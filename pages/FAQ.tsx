
import React from 'react';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 py-12 bg-[#FDF8FA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-[1.5rem] shadow-medical mb-4">
            <HelpCircle className="w-10 h-10 text-[#601344]" />
          </div>
          <h2 className="text-[#0077C8] font-black uppercase tracking-widest text-xs">Centre de Support</h2>
          <h1 className="heading-xl">Questions <span className="text-[#0077C8]">Fréquentes</span></h1>
          <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">Tout ce qu'il faut savoir sur la protection par vision artificielle.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[2rem] p-8 border border-rose-50 transition-all hover:border-[#601344]/40 hover:shadow-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between font-extrabold text-lg text-[#601344] tracking-tight">
                <span className="pr-8">{faq.question}</span>
                <div className="shrink-0 bg-rose-50 p-2 rounded-xl transition-all duration-500 group-hover:rotate-180 group-hover:bg-[#601344] group-hover:text-white">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="mt-8 text-slate-500 leading-relaxed font-medium text-lg border-t border-rose-50 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-10 bg-[#601344] rounded-[3rem] text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-[100px] rounded-full"></div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">Encore des interrogations ?</h3>
          <p className="text-rose-100/60 font-medium text-lg">Notre équipe technique est disponible pour une consultation personnalisée.</p>
          <button className="px-10 py-4 bg-white text-[#601344] font-extrabold rounded-full hover:bg-rose-50 transition-all shadow-2xl active:scale-95 text-base">
            Contacter un expert Aman
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
