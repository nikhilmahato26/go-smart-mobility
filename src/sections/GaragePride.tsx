import React from 'react';
import Section from '../components/ui/Section';
import { 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  UserCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function GaragePride() {
  const coreGarageCards = [
    {
      title: 'Well Maintained Fleet',
      description: 'Regular servicing and quality checks for a smooth and safe ride.',
      icon: Wrench,
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      title: 'Professional Drivers',
      description: 'Trained, verified and courteous drivers you can trust.',
      icon: UserCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      title: 'Clean & Hygienic Cabs',
      description: 'Clean, sanitized and comfortable cabs for every journey.',
      icon: Sparkles,
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      title: 'Safety Our Priority',
      description: 'Safety protocols followed to ensure peace of mind for every customer.',
      icon: ShieldCheck,
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    }
  ];

  const operationalIndicators = [
    {
      title: 'VERIFIED DRIVERS',
      desc: 'Background verified and well trained',
      icon: UserCheck
    },
    {
      title: 'ON TIME SERVICE',
      desc: 'Punctual and reliable every time',
      icon: CalendarCheck
    },
    {
      title: '24X7 AVAILABILITY',
      desc: 'Always available whenever you need',
      icon: Clock
    },
    {
      title: 'CUSTOMER SUPPORT',
      desc: 'Quick support, always by your side',
      icon: PhoneCall
    }
  ];

  return (
    <Section id="garage" bgType="white">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Our Commitment
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
            Well Maintained Cabs. Professional Drivers. Safe Journeys.
          </h2>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">
            Our cabs. Our drivers. Our commitment to you.
          </p>
        </div>

        {/* Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl p-8 md:p-12">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title Part */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-gsm-lightgreen font-bold text-xs uppercase tracking-widest">
                Operations Excellence
              </span>
              <h3 className="font-heading font-black text-3xl md:text-4.5xl leading-none tracking-tight">
                GOSMART MOBILITY
              </h3>
              <p className="text-lg md:text-xl font-medium text-slate-300 italic">
                YOUR JOURNEY, OUR RESPONSIBILITY
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Safety', 'Punctuality', 'Comfort', 'Trust'].map((tag, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gsm-lightgreen" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Live Status Part */}
            <div className="lg:col-span-6 flex flex-col md:flex-row justify-center lg:justify-end gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center md:text-left">
                <span className="text-[10px] text-emerald-400 font-extrabold tracking-widest block uppercase mb-1">Status</span>
                <h4 className="font-heading font-black text-2xl text-white">Garage Operations</h4>
                <p className="text-xs text-slate-300 mt-1">Daily safety checks and vacuum sanitation active.</p>
              </div>
              <div className="bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-2xl p-6 text-center flex flex-col justify-center">
                <span className="text-[10px] text-slate-300 font-bold block uppercase mb-1">Working Hours</span>
                <span className="font-heading font-black text-lg">WORKING 24*7</span>
                <span className="text-xs font-bold text-slate-300">SERVICES</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreGarageCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-start space-y-4 hover:shadow-md transition-all duration-300`}
            >
              <div className={`p-3 rounded-xl border ${card.color}`}>
                <card.icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h4 className="font-heading font-black text-md text-slate-900 leading-none">
                {card.title}
              </h4>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Operational Indicators */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {operationalIndicators.map((ind, i) => (
            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-gsm-blue shadow-sm shrink-0">
                <ind.icon className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h5 className="font-heading font-black text-xs text-slate-900 tracking-wide">
                  {ind.title}
                </h5>
                <p className="text-[11px] text-slate-500 font-semibold leading-tight mt-1">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Slogan */}
        <div className="border-b border-slate-200 pb-2 flex justify-center">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Well Maintained Cabs. Professional Drivers. Happy Clients.
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

      </div>
    </Section>
  );
}
