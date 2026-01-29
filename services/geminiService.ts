
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeRiskFromImage(base64Data: string, mimeType: string) {
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
            text: `Vous êtes un expert mondial en vision artificielle spécialisé dans la "Fall Detection" (détection de chute) multimodale. 
            Analysez cette image avec une rigueur absolue pour identifier :
            1. Chute Avérée : Personne allongée au sol (domicile, hôpital) ou au pied d'un escalier mécanique (gare).
            2. Chute de Hauteur : Travailleur ayant basculé d'une échelle ou d'un échafaudage (BTP/Industrie).
            3. Risque Critique : Personne en perte d'équilibre, malaise visible, ou glissade en cours sur sol humide.
            4. Environnement : Identifiez si nous sommes en milieu Hospitalier, Industriel/BTP, ou dans un Espace Public (Mall, Gare).
            
            Le système doit être capable de distinguer un travailleur penché d'une chute réelle.
            Répondez UNIQUEMENT au format JSON.`
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
