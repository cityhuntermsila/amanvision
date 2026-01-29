import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate-600"
            title={i18n.language === 'fr' ? 'English' : 'Français'}
        >
            <Globe className="w-4 h-4" />
            <span>{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
        </button>
    );
};

export default LanguageSwitcher;
