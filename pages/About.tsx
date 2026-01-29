
import React from 'react';
import { Users, Shield, Target, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">Notre Mission</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">AmanVision : Préserver la dignité par l'IA.</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              AmanVision est née de la volonté d'offrir aux établissements de santé et aux familles un outil de surveillance bienveillant, non intrusif et extrêmement réactif.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-300"></div>
              <img
                src="/images/images (1).jpg"
                className="relative rounded-[2rem] shadow-xl object-cover aspect-square"
                alt="Caregiving with AmanVision"
              />
            </div>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Sécurité sans Compromis</h3>
                  <p className="text-slate-600 leading-relaxed">Nous traitons les données localement pour garantir une confidentialité totale des patients et résidents.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Précision Algorithmique</h3>
                  <p className="text-slate-600 leading-relaxed">Nos modèles sont entraînés sur des milliers de scénarios de chutes pour minimiser les fausses alertes.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Ingénierie & Excellence</h3>
                  <p className="text-slate-600 leading-relaxed">Dirigée par <strong>Imad Eddine Abdeslam</strong>, notre équipe d'ingénieurs passionnés assure une assistance rapide et personnalisée AmanVision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12">Nos Engagements AmanVision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Respect de l\'intimité', 'Zéro capteur portable', 'Alerte immédiate App/SMS'].map((item) => (
              <div key={item} className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center">
                <CheckCircle2 className="w-10 h-10 text-blue-200 mb-4" />
                <span className="text-xl font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
