import React from 'react';
import Section from '../components/ui/Section';
import { 
  Compass, 
  Target, 
  Users, 
  Sparkles, 
  Leaf, 
  TrendingUp, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  const missionItems = [
    'To provide safe, comfortable and reliable transportation solutions.',
    'To deliver exceptional service through professionalism, integrity and teamwork.',
    'To embrace technology and innovation for continuous improvement.',
    'To promote sustainable practices and reduce environmental impact.',
    'To create value for our clients, partners, employees and the community.'
  ];

  const pillars = [
    { title: 'Customer Centric', icon: Users, color: 'text-blue-500' },
    { title: 'Growth & Innovation', icon: TrendingUp, color: 'text-amber-500' },
    { title: 'Sustainable Future', icon: Leaf, color: 'text-emerald-500' }
  ];

  return (
    <Section id="vision" bgType="white">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Strategic Alignment
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Our Vision & Mission
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            Driving excellence today for a smarter, safer and sustainable tomorrow.
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Our Vision Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            {/* Visual bottom banner */}
            <div className="absolute bottom-0 left-0 right-0 h-40 opacity-15 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="p-3.5 bg-gsm-blue text-white rounded-2xl w-fit shadow-md">
                <Compass className="w-8 h-8 stroke-[2.2] animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase">
                  OUR VISION
                </h3>
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-slate-650">
                  To be a leading mobility solutions provider, recognized for innovation, reliability and customer delight, creating value for our stakeholders and contributing to a sustainable future.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200/50 mt-8 relative z-10 flex justify-between items-center text-xs font-bold text-gsm-blue uppercase tracking-wider">
              <span>Goal: Industry Leader</span>
              <span className="w-2.5 h-2.5 bg-gsm-blue rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Our Mission Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="p-3.5 bg-gsm-green text-white rounded-2xl w-fit shadow-md">
                <Target className="w-8 h-8 stroke-[2.2]" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase">
                  OUR MISSION
                </h3>
                
                <ul className="space-y-3">
                  {missionItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-emerald-50 text-gsm-green border border-emerald-100 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs font-bold text-gsm-green uppercase tracking-wider">
              <span>Approach: Service Excellence</span>
              <span className="w-2.5 h-2.5 bg-gsm-green rounded-full animate-pulse"></span>
            </div>
          </div>

        </div>

        {/* Bottom pillars showcase */}
        <div className="bg-slate-900 rounded-3xl p-6 text-white max-w-4xl mx-auto shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className={`p-2 bg-slate-800 rounded-xl ${pillar.color}`}>
                  <pillar.icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-wide">
                  {pillar.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
