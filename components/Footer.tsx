
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Globe, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#4a0e34] text-white py-12 border-t border-[#601344]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <Shield className="w-6 h-6 text-[#601344]" />
              </div>
              <span className="text-2xl font-black tracking-tighter">AmanVision</span>
            </div>
            <p className="text-rose-100/60 leading-relaxed font-medium">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-rose-300 font-black uppercase tracking-[0.2em]">
              <Globe className="w-4 h-4" />
              <span>Aman Tech Solutions {new Date().getFullYear()}</span>
            </div>
          </div>
          <div>
            <h5 className="font-black text-sm mb-8 text-rose-200 uppercase tracking-widest">{t('footer.solutions')}</h5>
            <ul className="space-y-4 text-rose-100/70">
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors text-left font-bold">{t('footer.offers')}</button></li>
              <li><button onClick={() => onNavigate('demo')} className="hover:text-white transition-colors text-left font-bold">{t('footer.demo')}</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors text-left font-bold">{t('footer.pricing')}</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-sm mb-8 text-rose-200 uppercase tracking-widest">{t('footer.company')}</h5>
            <ul className="space-y-4 text-rose-100/70">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left font-bold">{t('footer.about')}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left font-bold">{t('footer.contact')}</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors text-left font-bold">{t('footer.privacy')}</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-sm mb-8 text-rose-200 uppercase tracking-widest">{t('footer.newsletter')}</h5>
            <p className="text-xs text-rose-100/50 mb-6 font-medium">{t('footer.newsletter_desc')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="bg-[#601344]/50 border border-white/10 rounded-xl px-4 py-3 w-full outline-none focus:border-rose-400 text-sm text-white placeholder:text-rose-300/30"
              />
              <button className="bg-rose-500 text-white p-3 rounded-xl hover:bg-rose-400 transition-all shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-10 pt-6 text-center text-rose-100/20 text-[10px] font-black tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
