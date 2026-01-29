
import React from 'react';
import { FileText, Gavel, Scale } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-200 rounded-full mb-6">
            <FileText className="w-10 h-10 text-slate-700" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Conditions Générales</h1>
          <p className="text-xl text-slate-600 font-medium italic">Cadre légal des services AmanVision.</p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 space-y-12 text-slate-700">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Scale className="w-6 h-6 text-blue-600" />
              Préambule
            </h2>
            <p className="leading-relaxed">
              Les présentes conditions régissent l'utilisation du logiciel SaaS AmanVision et des services associés. En accédant à notre plateforme, vous acceptez pleinement ces termes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-blue-600" />
              Responsabilité
            </h2>
            <p className="leading-relaxed">
              AmanVision est un outil d'aide à la vigilance. Bien que notre taux de précision soit extrêmement élevé, le système ne remplace en aucun cas la présence humaine obligatoire. AmanVision ne pourra être tenu responsable en cas de retard d'intervention humaine.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">Abonnement & Paiement</h2>
            <p className="leading-relaxed">
              Tout mois entamé est dû. Le non-paiement entraîne la suspension automatique du flux de vigilance AmanVision après un préavis de 48 heures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">Modification des Termes</h2>
            <p className="leading-relaxed">
              AmanVision se réserve le droit de modifier ces conditions à tout moment pour s'adapter aux évolutions technologiques. Les utilisateurs seront informés par email 15 jours avant l'entrée en vigueur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
