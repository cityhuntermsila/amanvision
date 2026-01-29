
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Shield, Target, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">{t('about.mission_badge')}</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">{t('about.title')}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-300"></div>
              <img
                src="/images/images (1).jpg"
                className="relative rounded-[2rem] shadow-xl object-cover aspect-square"
                alt="Caregiving with AmanVision"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{t('about.feat1_title')}</h3>
                  <p className="text-slate-600 leading-relaxed">{t('about.feat1_desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{t('about.feat2_title')}</h3>
                  <p className="text-slate-600 leading-relaxed">{t('about.feat2_desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{t('about.feat3_title')}</h3>
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.feat3_desc') }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black mb-8">{t('about.engagement_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t('about.engagement1'), t('about.engagement2'), t('about.engagement3')].map((item) => (
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
