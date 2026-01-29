
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Gavel, Scale } from 'lucide-react';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full mb-4">
            <FileText className="w-8 h-8 text-slate-700" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">{t('terms_page.title')}</h1>
          <p className="text-lg text-slate-600 font-medium italic">{t('terms_page.subtitle')}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-10 text-slate-700">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Scale className="w-6 h-6 text-blue-600" />
              {t('terms_page.preamble_title')}
            </h2>
            <p className="leading-relaxed">
              {t('terms_page.preamble_desc')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-blue-600" />
              {t('terms_page.responsibility_title')}
            </h2>
            <p className="leading-relaxed">
              {t('terms_page.responsibility_desc')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">{t('terms_page.billing_title')}</h2>
            <p className="leading-relaxed">
              {t('terms_page.billing_desc')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">{t('terms_page.modifications_title')}</h2>
            <p className="leading-relaxed">
              {t('terms_page.modifications_desc')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
