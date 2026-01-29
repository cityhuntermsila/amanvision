
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PRICING_PLANS } from '../constants';
import { Check, ShieldCheck } from 'lucide-react';
import { PlanType } from '../types';

interface PricingProps {
  currentPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  onNavigate: (page: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ currentPlan, onSelectPlan, onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-500 py-10 lg:py-16 bg-[#FDF8FA]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12 space-y-3 lg:space-y-4">
          <h2 className="text-[#601344] font-extrabold uppercase tracking-widest text-[9px] lg:text-[10px] bg-rose-50 inline-block px-4 py-1.5 rounded-full border border-rose-100">
            {t('pricing_page.badge')}
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#601344] leading-none">
            {t('pricing_page.title_part1')} <span className="text-[#0077C8]">{t('pricing_page.title_part2')}</span>.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            {t('pricing_page.subtitle')}
          </p>
        </div>

        {/* Compressed Grid container to reduce "zone" by 30% on PC */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-5 items-stretch max-w-sm mx-auto lg:max-w-6xl lg:my-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white p-6 lg:p-7 rounded-[2rem] lg:rounded-[2.5rem] border-4 transition-all flex flex-col h-full ${plan.popular
                ? 'border-[#601344] shadow-2xl relative lg:scale-105 z-10'
                : 'border-white hover:border-rose-100 shadow-medical'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#601344] text-white px-5 py-1 lg:px-6 lg:py-1.5 rounded-full text-[8px] lg:text-[9px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">
                  {t('pricing_page.popular_badge')}
                </div>
              )}

              <div className="mb-4 lg:mb-6">
                <h4 className="text-lg lg:text-xl font-extrabold text-[#601344] mb-1">{plan.name}</h4>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#601344]">{plan.price}</span>
                  <span className="text-slate-400 font-bold uppercase text-[7px] lg:text-[8px] tracking-widest">{t('pricing_page.month')}</span>
                </div>
                <p className="text-[10px] lg:text-[12px] text-slate-500 mt-2 lg:mt-3 font-medium leading-tight min-h-[30px]">
                  {t(`pricing.plan${PRICING_PLANS.indexOf(plan) + 1}_desc`)}
                </p>
              </div>

              <ul className="space-y-2 lg:space-y-2.5 mb-6 lg:mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={f} className="flex items-start gap-2 lg:gap-2.5 text-slate-700 font-bold text-[10px] lg:text-[11px] leading-tight">
                    <Check className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#0077C8] flex-shrink-0 mt-0.5" />
                    {t(`pricing.plan${PRICING_PLANS.indexOf(plan) + 1}_feat${idx + 1}`)}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.plan === 'professional' || plan.plan === 'familial') {
                    onNavigate('contact');
                  } else {
                    onSelectPlan(plan.plan as PlanType);
                  }
                }}
                className={`w-full py-3 lg:py-3.5 rounded-[1.15rem] lg:rounded-[1.25rem] font-extrabold text-xs lg:text-sm transition-all active:scale-95 shadow-md ${currentPlan === plan.plan && plan.plan === 'free'
                  ? 'bg-slate-100 text-slate-400 cursor-default shadow-none'
                  : plan.popular
                    ? 'bg-[#601344] text-white hover:bg-[#4a0e34]'
                    : 'bg-white border-2 border-[#601344] text-[#601344] hover:bg-rose-50'
                  }`}
              >
                {currentPlan === plan.plan && plan.plan === 'free' ? t('pricing_page.active_plan') : t(`pricing.plan${PRICING_PLANS.indexOf(plan) + 1}_btn`)}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-12 p-6 lg:p-10 bg-[#601344] rounded-[2rem] lg:rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 shadow-2xl relative overflow-hidden text-center lg:text-left">
          <div className="space-y-2 lg:space-y-3 relative z-10 lg:w-2/3">
            <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tighter leading-none">{t('pricing_page.enterprise_title_part1')} <span className="text-rose-300">{t('pricing_page.enterprise_title_part2')}</span>.</h3>
            <p className="text-rose-100/60 font-medium text-sm lg:text-base leading-relaxed">{t('pricing_page.enterprise_subtitle')}</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white text-[#601344] font-extrabold rounded-full shadow-2xl transition-all flex items-center justify-center gap-2 lg:gap-3 text-sm lg:text-base active:scale-95 relative z-10 hover:bg-rose-50"
          >
            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5" />
            {t('pricing_page.audit_btn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
