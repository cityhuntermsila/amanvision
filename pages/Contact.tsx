
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-500 py-24 bg-[#FDF8FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-[#0077C8] font-black uppercase tracking-widest text-xs">Consultation Experte</h2>
              <h1 className="heading-xl">Sécurisons vos <br /><span className="text-[#0077C8]">Résidents</span>.</h1>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-lg">
                Nos experts vous conseillent sur le déploiement de la vigilance intelligente dans votre établissement.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <Phone className="w-7 h-7" />, title: "Téléphone", val: "+213 665 15 96 31", color: "bg-rose-50" },
                { icon: <Mail className="w-7 h-7" />, title: "Email", val: "imadabdeslamai@gmail.com", color: "bg-blue-50" },
                { icon: <MapPin className="w-7 h-7" />, title: "Siège", val: "M'sila, Algérie", color: "bg-slate-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 p-8 bg-white rounded-[2.5rem] border border-rose-50 shadow-sm hover:shadow-medical transition-all">
                  <div className={`${item.color} p-5 rounded-2xl text-[#601344]`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</div>
                    <div className="text-xl font-extrabold text-[#601344]">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-medical border border-rose-50 relative">
            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#601344] rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#601344] tracking-tight">Audit Fall-Prevention</h3>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nom du Responsable</label>
                    <input type="text" className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder="M. Benali" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Etablissement</label>
                    <input type="email" className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder="direction@clinique.dz" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Type d'Etablissement</label>
                  <select className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344] appearance-none cursor-pointer">
                    <option>Hôpital / Clinique Publique</option>
                    <option>Établissement de Santé Privé</option>
                    <option>EHPAD / Maison de Retraite</option>
                    <option>Résidence Senior / Maintien à domicile</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Votre Projet</label>
                  <textarea rows={5} className="w-full px-8 py-5 bg-rose-50/50 border border-rose-100 rounded-2xl outline-none font-bold text-[#601344]" placeholder="Nombre de lits à équiper, contraintes spécifiques..."></textarea>
                </div>
                <button className="w-full py-6 bg-[#601344] text-white font-extrabold text-xl rounded-full hover:bg-[#4a0e34] transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95 group">
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  Demander une Étude
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
