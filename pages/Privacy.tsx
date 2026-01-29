
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">{t('privacy_page.title')}</h1>
          <p className="text-lg text-slate-600 font-medium italic">{t('privacy_page.subtitle')}</p>
        </div>

        <div className="prose prose-blue max-w-none text-slate-700 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              {t('privacy_page.section1_title')}
            </h2>
            <p className="leading-relaxed">
              {t('privacy_page.section1_desc')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <EyeOff className="w-6 h-6 text-blue-600" />
              {t('privacy_page.section2_title')}
            </h2>
            <p className="leading-relaxed">
              {t('privacy_page.section2_desc')}
            </p>
          </section>

          <section className="space-y-4 bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-2xl font-black text-blue-900">{t('privacy_page.transparency_title')}</h2>
            <p className="text-blue-800 font-medium">
              {t('privacy_page.transparency_desc')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">{t('privacy_page.section3_title')}</h2>
            <p className="leading-relaxed">
              {t('privacy_page.section3_desc')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
