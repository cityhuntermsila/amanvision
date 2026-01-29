
import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
            <Lock className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Politique de Confidentialité</h1>
          <p className="text-xl text-slate-600 font-medium italic">Votre vie privée est le pilier de notre vigilance AmanVision.</p>
        </div>

        <div className="prose prose-blue max-w-none text-slate-700 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              1. Collecte des Données
            </h2>
            <p className="leading-relaxed">
              AmanVision ne collecte que les données strictement nécessaires au fonctionnement du service de vigilance. Les flux vidéo sont analysés en temps réel et ne sont jamais stockés sur nos serveurs sans une activation explicite par l'administrateur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <EyeOff className="w-6 h-6 text-blue-600" />
              2. Traitement par IA
            </h2>
            <p className="leading-relaxed">
              Notre intelligence artificielle traite les images localement via des passerelles sécurisées (Edge Computing) autant que possible. Lorsqu'une analyse cloud est requise, les images sont anonymisées et cryptées de bout en bout.
            </p>
          </section>

          <section className="space-y-4 bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-2xl font-black text-blue-900">Engagement de Transparence</h2>
            <p className="text-blue-800 font-medium">
              Conformément à la législation sur la protection des données, AmanVision s'engage à maintenir l'intégralité de ses infrastructures de stockage sécurisées et cryptées.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">3. Vos Droits</h2>
            <p className="leading-relaxed">
              Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, contactez notre Délégué à la Protection des Données à <span className="font-bold text-blue-600">privacy@amanvision.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
