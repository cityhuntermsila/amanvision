
import React from 'react';
import AIAnalyzer from '../components/AIAnalyzer';
import { PlanType } from '../types';
import { ShieldAlert, Zap, Cpu } from 'lucide-react';

interface DemoProps {
  currentPlan: PlanType;
  onNavigate: (page: string) => void;
}

const Demo: React.FC<DemoProps> = ({ currentPlan, onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-[#FDF8FA]">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#601344] text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
            <Cpu className="w-4 h-4 text-rose-400" />
            <span>Moteur Neuronal Aman v4.0</span>
          </div>
          <h1 className="heading-xl">Expérimentez l'<span className="text-[#0077C8]">Inférence</span>.</h1>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Testez la puissance de notre IA sur vos propres images. Notre moteur détecte instantanément les risques et les chutes.
          </p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-medical p-2 md:p-6 border border-rose-50 overflow-hidden">
          <AIAnalyzer currentPlan={currentPlan} onNavigate={onNavigate} />
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Capture Photo", desc: "Importez une image de situation réelle." },
            { step: "02", title: "Analyse IA", desc: "L'IA identifie les squelettes et postures." },
            { step: "03", title: "Verdict Médical", desc: "Recevez une alerte et un conseil immédiat." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[3rem] border border-rose-50 shadow-sm flex flex-col items-center text-center space-y-6">
              <div className="w-14 h-14 bg-[#601344] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                {item.step}
              </div>
              <h4 className="text-xl font-extrabold text-[#601344] uppercase tracking-tighter">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-rose-50 rounded-[4rem] border border-rose-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex gap-8 items-start">
            <div className="bg-[#601344] p-4 rounded-2xl shadow-lg">
              <ShieldAlert className="w-8 h-8 text-white" />
            </div>
            <div>
              <h5 className="font-black text-[#601344] uppercase tracking-widest text-lg mb-2">Note de Démonstration</h5>
              <p className="text-[#601344]/70 font-medium leading-relaxed">
                Cette démo utilise des images fixes. Pour une protection temps réel 24/7 avec flux vidéo continu, contactez-nous pour une installation Pro.
              </p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('pricing')}
            className="whitespace-nowrap bg-[#0077C8] text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-[#601344] transition-all shadow-xl active:scale-95"
          >
            Découvrir l'offre Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
