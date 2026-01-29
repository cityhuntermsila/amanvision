
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeRiskFromImage(base64Data: string, mimeType: string, lang: string = 'fr') {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: `You are a world-class artificial vision expert specialized in multimodal "Fall Detection".
            Analyze this image with absolute rigor to identify:
            1. Confirmed Fall: Person lying on the ground (home, hospital) or at the bottom of an escalator (station).
            2. Fall from Height: Worker who has fallen from a ladder or scaffolding (Construction/Industry).
            3. Critical Risk: Person losing balance, visible faintness, or slipping on a wet floor.
            4. Environment: Identify if we are in a Hospital, Industrial/Construction site, or a Public Space (Mall, Station).
            
            The system must be able to distinguish a leaning worker from a real fall.
            
            IMPORTANT: Provide all text fields ('context', 'detectedElements', 'recommendation') in ${lang === 'fr' ? 'French' : 'English'}.
            For 'riskLevel', use only 'low', 'medium', or 'high'.
            
            Respond ONLY in JSON format.`
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskLevel: {
              type: Type.STRING,
              description: "Niveau de risque: low, medium, high (chute détectée)"
            },
            context: {
              type: Type.STRING,
              description: "Environnement détecté (Santé, BTP, Public)"
            },
            detectedElements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Détails visuels de l'incident identifié"
            },
            recommendation: {
              type: Type.STRING,
              description: "Action immédiate pour les agents de secours ou sécurité"
            },
            isAlertNeeded: {
              type: Type.BOOLEAN,
              description: "VRAI si une intervention d'urgence est requise"
            },
          },
          required: ["riskLevel", "context", "detectedElements", "recommendation", "isAlertNeeded"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("Réponse vide de l'IA");

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Multi-Sector Analysis Error:", error);
    throw error;
  }
}
