
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FEATURES, BENEFITS, ARCHITECTURE, HOW_IT_WORKS_STEPS, TECH_STACK } from '../constants';
import { ShieldCheck, ChevronRight, Server, Database, Smartphone, Eye, HardHat, Train, Building2, Zap, Activity, Cpu, CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Intro Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="max-w-4xl mx-auto text-slate-500 font-medium leading-relaxed mb-8">
            {t('solutions_page.intro_text')}
          </p>
          <h1 className="heading-xl px-4">{t('solutions_page.intro_title')}</h1>
        </div>
      </section>

      {/* Grid des Solutions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2.5rem] p-6 lg:p-8 space-y-6 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-14 h-14 bg-[#601344] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#601344] tracking-tight">{t(`features.title${idx + 1}`)}</h3>
                <p className="text-slate-500 font-medium leading-relaxed lg:h-16">
                  {t(`features.desc${idx + 1}`)}
                </p>
                <div className="w-full aspect-square lg:aspect-video bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100 group-hover:border-[#601344]/10 transition-colors">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain lg:object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Process Section (From HowItWorks) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 text-[#601344]">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter">{t('solutions_page.process_title')}</h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-[#0077C8] via-[#601344] to-[#601344] opacity-20"></div>

            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className={`${step.color} w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500 relative`}>
                  <div className="absolute -top-3 -right-3 bg-[#601344] text-white w-10 h-10 rounded-full flex items-center justify-center font-black border-4 border-white">
                    0{idx + 1}
                  </div>
                  {step.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{t(`how_it_works.step${idx + 1}_title`)}</h3>
                  <p className="text-slate-500 font-bold leading-relaxed">{t(`how_it_works.step${idx + 1}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: Espaces Publics */}
      <section className="py-12 bg-[#601344] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/5 rounded-[3rem] p-8 lg:p-16 border border-white/10 lg:flex lg:items-center lg:gap-12 text-center lg:text-left">
            <div className="lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: t('solutions_page.smart_gare_title').replace('&', '<br /><span class="text-[#0077C8]">&</span>').replace('Smart Mall', '<span class="text-[#0077C8]">Smart Mall</span>') }} />
              <p className="text-base lg:text-lg text-rose-100/70 font-medium">
                {t('solutions_page.smart_gare_desc')}
              </p>
              <ul className="space-y-4 w-full max-w-md">
                <li className="flex items-center gap-4 font-bold text-left">
                  <div className="shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Train className="w-4 h-4" /></div>
                  {t('solutions_page.smart_gare_feat1')}
                </li>
                <li className="flex items-center gap-4 font-bold text-left">
                  <div className="shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><Building2 className="w-4 h-4" /></div>
                  {t('solutions_page.smart_gare_feat2')}
                </li>
                <li className="flex items-center gap-4 font-bold text-left">
                  <div className="shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><ShieldCheck className="w-4 h-4" /></div>
                  {t('solutions_page.smart_gare_feat3')}
                </li>
              </ul>
              <button className="w-full sm:w-auto px-10 py-5 bg-[#0077C8] text-white rounded-full font-black shadow-xl hover:bg-blue-600 transition-all active:scale-95">
                {t('solutions_page.smart_gare_btn')}
              </button>
            </div>
            <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-white/5 rounded-[3.5rem] rotate-3 -z-10 hidden lg:block"></div>
                <img
                  src="/images/fall_mall.jpg"
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full h-auto object-contain bg-black/20"
                  alt="Vigilance en Gare"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Stack Section (From HowItWorks) */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-100 lg:flex lg:items-center lg:gap-16 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#601344]"></div>
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <div className="bg-[#601344] inline-block p-3 rounded-2xl shadow-xl">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                {t('solutions_page.tech_stack_title')} <br /><span className="text-[#601344] italic">{t('solutions_page.tech_stack_badge')}</span>.
              </h2>
              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                {t('solutions_page.tech_stack_desc')}
              </p>

              <div className="space-y-6">
                {TECH_STACK.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-[#0077C8] p-1.5 rounded-full text-white">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-black text-[#601344] uppercase tracking-widest text-xs">{item.brand} :</span>
                      <span className="ml-2 font-bold text-slate-600">{item.product}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 mt-20 lg:mt-0 relative flex justify-center">
              <div className="absolute inset-0 bg-rose-900/5 blur-3xl rounded-full"></div>
              <img
                src="/images/aman.jpg"
                className="w-full max-w-sm rounded-[3rem] shadow-2xl border-4 border-slate-50 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Infrastructure Serveur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus (From HowItWorks) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">{t('solutions_page.rigueur_title_part1')} <span className="text-[#601344]">{t('solutions_page.rigueur_title_part2')}</span>.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-slate-50 rounded-[2rem] space-y-4 hover:bg-[#601344] hover:text-white transition-all group border border-slate-100">
              <Zap className="w-10 h-10 text-[#0077C8] group-hover:text-rose-400" />
              <h4 className="text-xl font-black">{t('solutions_page.rigueur_feat1_title')}</h4>
              <p className="opacity-70 font-bold text-sm">{t('solutions_page.rigueur_feat1_desc')}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] space-y-4 hover:bg-[#601344] hover:text-white transition-all group border border-slate-100">
              <Activity className="w-10 h-10 text-[#0077C8] group-hover:text-rose-400" />
              <h4 className="text-xl font-black">{t('solutions_page.rigueur_feat2_title')}</h4>
              <p className="opacity-70 font-bold text-sm">{t('solutions_page.rigueur_feat2_desc')}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] space-y-4 hover:bg-[#601344] hover:text-white transition-all group border border-slate-100">
              <Database className="w-10 h-10 text-[#0077C8] group-hover:text-rose-400" />
              <h4 className="text-xl font-black">{t('solutions_page.rigueur_feat3_title')}</h4>
              <p className="opacity-70 font-bold text-sm">{t('solutions_page.rigueur_feat3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 lg:mb-14 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-[#601344] tracking-tighter px-2">{t('solutions_page.infra_title')}</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto px-4 text-sm">
              {t('solutions_page.infra_subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {ARCHITECTURE.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 lg:p-10 rounded-[2.5rem] space-y-4 lg:space-y-6 hover:bg-[#601344] hover:text-white hover:shadow-2xl transition-all group text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-[#601344] rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:bg-[#0077C8] transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32, className: "text-white" })}
                </div>
                <h4 className="text-xl font-extrabold text-[#601344] group-hover:text-white">{t(`architecture.title${idx + 1}`)}</h4>
                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-white/80 text-sm">
                  {t(`architecture.desc${idx + 1}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
