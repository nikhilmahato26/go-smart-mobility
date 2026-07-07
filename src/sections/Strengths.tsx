import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { strengthsData } from '../data/mobilityData';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Zap, 
  Map, 
  CreditCard, 
  ThumbsUp,
  Award,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Strengths() {
  const [activeStrengthIdx, setActiveStrengthIdx] = useState(0);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'Clock': return Clock;
      case 'Zap': return Zap;
      case 'Map': return Map;
      case 'CreditCard': return CreditCard;
      case 'ThumbsUp': return ThumbsUp;
      default: return ShieldCheck;
    }
  };

  const footerStats = [
    { text: 'SAFETY FIRST', icon: ShieldCheck },
    { text: '1000+ HAPPY CLIENTS', icon: Users },
    { text: 'PAN INDIA PRESENCE', icon: Map },
    { text: '10+ YEARS EXPERIENCE', icon: Award },
    { text: 'BUILT ON TRUST', icon: Sparkles }
  ];

  return (
    <Section id="strengths" bgType="gradient-green">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Core Values
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Our Strength
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            Driving Trust. Delivering Excellence.
          </p>
        </div>

        {/* Concentric Interactive Selector Wheel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left / Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
            {strengthsData.map((str, i) => {
              const IconComponent = getIcon(str.iconName);
              const isActive = activeStrengthIdx === i;
              return (
                <button
                  key={str.title}
                  onClick={() => setActiveStrengthIdx(i)}
                  onMouseEnter={() => setActiveStrengthIdx(i)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? 'border-gsm-green bg-gsm-green text-white shadow-lg translate-x-2'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-800'}`}>
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="leading-tight text-left">
                    <h3 className="font-heading font-black text-xs sm:text-sm uppercase tracking-wide">
                      {str.title}
                    </h3>
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>
                      Key Pillar
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right / Circle Emblem Visual Chart (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between items-center text-center min-h-[440px] order-1 lg:order-2">
            
            {/* Center Emblem Visual */}
            <div className="relative w-48 h-48 rounded-full border-4 border-slate-100 bg-slate-50 flex items-center justify-center shadow-inner group">
              {/* Outer rotating frame */}
              <div className="absolute inset-1 border border-dashed border-gsm-green rounded-full group-hover:rotate-45 transition-transform duration-10000"></div>
              
              {/* GSM center circle */}
              <div className="w-10/12 h-10/12 rounded-full bg-gradient-to-tr from-gsm-blue to-gsm-green text-white flex flex-col items-center justify-center p-4 shadow-md">
                <span className="font-heading font-black text-4xl">GSM</span>
                <span className="text-[7px] text-slate-200 tracking-widest font-extrabold uppercase mt-1">GoSmart</span>
              </div>
            </div>

            {/* Display active description details */}
            <div className="mt-8 space-y-3 w-full border-t border-slate-100 pt-6">
              <span className="text-[10px] font-black text-gsm-green uppercase tracking-widest block">Strength Highlight</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStrengthIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 uppercase">
                    {strengthsData[activeStrengthIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-md mx-auto">
                    {strengthsData[activeStrengthIdx].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Value badges footer bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8">
            {footerStats.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-gsm-lightgreen stroke-[2.2] shrink-0" />
                <span className="text-[10px] sm:text-xs font-black tracking-wider text-slate-200 uppercase">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing promise slogan */}
        <div className="flex justify-center text-center pt-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              BUILT ON TRUST. DELIVERED WITH CARE.
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

      </div>
    </Section>
  );
}
