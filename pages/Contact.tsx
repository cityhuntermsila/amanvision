
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-500 py-12 bg-[#FDF8FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-[#0077C8] font-black uppercase tracking-widest text-xs">{t('contact_page.badge')}</h2>
              <h1 className="heading-xl">{t('contact_page.title_part1')} <br /><span className="text-[#0077C8]">{t('contact_page.title_part2')}</span>.</h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                {t('contact_page.subtitle')}
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: <Phone className="w-6 h-6" />, title: t('contact_page.phone'), val: "+213 665 15 96 31", color: "bg-rose-50" },
                { icon: <Mail className="w-6 h-6" />, title: t('contact_page.email'), val: "imadabdeslamai@gmail.com", color: "bg-blue-50" },
                { icon: <MapPin className="w-6 h-6" />, title: t('contact_page.headquarters'), val: `M'sila, ${t('contact_page.country')}`, color: "bg-slate-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-rose-50 shadow-sm hover:shadow-medical transition-all">
                  <div className={`${item.color} p-4 rounded-2xl text-[#601344]`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</div>
                    <div className="text-lg font-extrabold text-[#601344]">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-medical border border-rose-50 relative">
            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#601344] rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#601344] tracking-tight">{t('contact_page.form_title')}</h3>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contact_page.label_name')}</label>
                    <input type="text" className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder={t('contact_page.placeholder_name')} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contact_page.label_email')}</label>
                    <input type="email" className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder={t('contact_page.placeholder_email')} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contact_page.label_type')}</label>
                  <select className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344] appearance-none cursor-pointer">
                    <option>{t('contact_page.option1')}</option>
                    <option>{t('contact_page.option2')}</option>
                    <option>{t('contact_page.option3')}</option>
                    <option>{t('contact_page.option4')}</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contact_page.label_project')}</label>
                  <textarea rows={5} className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder={t('contact_page.placeholder_project')}></textarea>
                </div>
                <button className="w-full py-5 bg-[#601344] text-white font-extrabold text-lg rounded-full hover:bg-[#4a0e34] transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95 group">
                  <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  {t('contact_page.submit_btn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
