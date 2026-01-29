
import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Play,
  Heart,
  Zap,
  Cpu,
  Layers,
  CheckCircle,
  BellRing,
  PhoneCall,
  AlertCircle,
  ShieldAlert,
  Activity,
  HardHat,
  Train,
  Building2,
  HeartPulse,
  Network
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const sectors = [
    {
      title: "Santé & Seniors",
      desc: "Vigilance bienveillante en chambre et à domicile.",
      img: "/images/images.jpg",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />
    },
    {
      title: "BTP & Industrie",
      desc: "Détection des chutes de hauteur et protection des isolés.",
      img: "/images/fall_btp2.jpg",
      icon: <HardHat className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Gares & Malls",
      desc: "Sécurité des escalators et flux de passants 24/7.",
      img: "/images/fall_mall1.jpg",
      icon: <Building2 className="w-8 h-8 text-emerald-500" />
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 rounded-full border border-rose-100 text-[#601344] text-[8px] font-black uppercase tracking-widest">
                  <ShieldAlert className="w-3 h-3" />
                  Protection Intelligente v4.0
                </div>
                <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-[#601344] leading-[0.9]">
                  AmanVision
                </h1>
                <p className="text-lg lg:text-2xl font-bold text-[#0077C8] italic tracking-tight leading-snug">
                  La vigilance par l'IA, de la maison au chantier.
                </p>
              </div>
              <p className="text-lg lg:text-xl text-slate-600 max-w-lg font-medium leading-relaxed">
                Leader de la détection de chutes par vision artificielle. Sécurisez vos proches, vos employés et vos clients avec une précision inégalée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-8 py-3.5 bg-[#0077C8] text-white rounded-full font-extrabold text-base hover:bg-[#601344] transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
                >
                  Dès 1000 DZD / mois
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-8 py-3.5 bg-white border-2 border-[#601344] text-[#601344] rounded-full font-extrabold text-base hover:bg-rose-50 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Démo IA Live
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 mt-20 lg:mt-0 relative">
              <div className="absolute inset-0 bg-rose-900/5 blur-3xl rounded-full"></div>
              <img
                src="/images/aman.jpg"
                alt="AmanVision Fall Detection"
                className="rounded-[3rem] shadow-2xl border-4 border-slate-50 relative z-10 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Secteurs */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-14 space-y-4">
            <h2 className="text-[#601344] text-3xl lg:text-5xl font-extrabold tracking-tighter leading-none">
              Un Seul Cœur IA, <br /><span className="text-[#0077C8]">Toutes les Chutes Détectées</span>.
            </h2>
            <p className="text-base lg:text-lg text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
              De l'intimité d'une chambre aux flux d'une gare internationale, AmanVision s'adapte pour sauver des vies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sector, idx) => (
              <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-medical border border-slate-100 transition-all hover:shadow-2xl mx-auto w-full max-w-sm lg:max-w-none">
                <div className="aspect-square lg:aspect-[4/3] overflow-hidden relative bg-slate-50 flex items-center justify-center">
                  <img
                    src={sector.img}
                    alt={sector.title}
                    className="w-full h-full object-contain lg:object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-lg">
                    {sector.icon}
                  </div>
                </div>
                <div className="p-8 lg:p-10 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-[#601344]">{sector.title}</h3>
                  <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logic de Réponse */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-[#601344] text-3xl lg:text-5xl font-extrabold tracking-tighter leading-tight">
                Vigilance <span className="text-[#E35205]">Proactive</span> <br />Industrielle & Urbaine.
              </h2>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
                Sur un chantier ou dans un mall, une chute peut passer inaperçue. AmanVision alerte vos équipes <span className="text-[#601344] font-black underline decoration-[#0077C8] decoration-4 underline-offset-4">en moins d'une seconde</span>.
              </p>

              <div className="grid grid-cols-2 gap-4 lg:gap-6 pb-4">
                <div className="p-4 lg:p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <div className="text-2xl lg:text-3xl font-black text-[#601344]">0.8s</div>
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-2">Délai d'Alerte</div>
                </div>
                <div className="p-4 lg:p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <div className="text-2xl lg:text-3xl font-black text-[#0077C8]">100%</div>
                  <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-2">Précision</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-square lg:aspect-video w-full max-w-lg lg:max-w-none bg-slate-100 flex items-center justify-center">
                <img
                  src="/images/fall_btp.jpg"
                  className="w-full h-full object-contain lg:object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Protection BTP"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Multi-pôles */}
      <section className="py-12 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h2 className="heading-xl">L'Engagement AmanVision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Zéro Bracelet", desc: "Pas de capteur à porter. Une liberté totale pour les seniors et ouvriers.", icon: <Zap className="text-[#601344]" /> },
              { title: "CCTV Intégré", desc: "S'adapte à vos caméras de sécurité existantes en quelques clics.", icon: <Network className="text-[#0077C8]" /> },
              { title: "Smart Alerts", desc: "Notifications intelligentes envoyées aux bons intervenants selon la zone.", icon: <BellRing className="text-[#E35205]" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-medical space-y-4 border border-white hover:border-rose-100 transition-all mx-auto w-full max-w-sm lg:max-w-none">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#601344]">{item.title}</h3>
                <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
