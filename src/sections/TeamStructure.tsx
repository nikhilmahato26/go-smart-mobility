import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { teamStructure } from '../data/mobilityData';
import { 
  Users, 
  User, 
  TrendingUp, 
  Cpu, 
  Receipt, 
  BadgeCent, 
  ArrowRight,
  GitFork
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamStructure() {
  const [activeTab, setActiveTab] = useState<'all' | 'md' | 'sales' | 'ops' | 'billing' | 'finance'>('all');

  const teamCards = [
    {
      id: 'sales' as const,
      title: '2. SALES TEAM',
      icon: TrendingUp,
      color: 'border-emerald-200 text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50',
      data: teamStructure.sales
    },
    {
      id: 'ops' as const,
      title: '3. REVERSION & OPERATIONS TEAM',
      icon: Cpu,
      color: 'border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-50',
      data: teamStructure.operations
    },
    {
      id: 'billing' as const,
      title: '4. BILLING TEAM',
      icon: Receipt,
      color: 'border-amber-200 text-amber-600 bg-amber-50/50 hover:bg-amber-50',
      data: teamStructure.billing
    },
    {
      id: 'finance' as const,
      title: '5. ACCOUNT & FINANCIAL TEAM',
      icon: BadgeCent,
      color: 'border-indigo-200 text-indigo-600 bg-indigo-50/50 hover:bg-indigo-50',
      data: teamStructure.accounts
    }
  ];

  return (
    <Section id="team" bgType="gradient-blue">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Corporate Layout
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Our Team Management Structure
          </h2>
          <div className="flex justify-center items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-gsm-blue"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-gsm-green"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500"></span>
          </div>
        </div>

        {/* Dynamic Interactive Flowchart Visual */}
        <div className="space-y-8 max-w-5xl mx-auto">
          
          {/* Managing Director (1. MD) Node */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveTab(activeTab === 'md' ? 'all' : 'md')}
              className={`p-6 rounded-3xl border text-center shadow-md cursor-pointer transition-all duration-300 w-full max-w-sm ${
                activeTab === 'md'
                  ? 'border-gsm-blue bg-gsm-blue text-white shadow-lg'
                  : 'border-slate-200 bg-white text-slate-800'
              }`}
            >
              <div className={`p-3 rounded-2xl w-fit mx-auto mb-3 shadow-inner ${activeTab === 'md' ? 'bg-white/20' : 'bg-slate-50'}`}>
                <User className="w-8 h-8 stroke-[2.2] text-slate-900" style={{ color: activeTab === 'md' ? '#fff' : undefined }} />
              </div>
              <h3 className="font-heading font-black text-lg">1. MD</h3>
              <p className={`text-xs font-semibold ${activeTab === 'md' ? 'text-slate-200' : 'text-slate-500'} mt-1 uppercase`}>
                {teamStructure.md.role}
              </p>
              
              {/* Collapsible MD responsibilities list */}
              {activeTab === 'md' && (
                <div className="mt-4 border-t border-white/20 pt-4 space-y-2 text-left">
                  {teamStructure.md.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-gsm-green rounded-full shrink-0"></span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Tree Branch Line */}
            <div className="hidden lg:flex flex-col items-center h-12 w-1 relative mt-1 select-none">
              <div className="bg-slate-300 w-0.5 h-full"></div>
              {/* Horizontal crossbar */}
              <div className="bg-slate-300 h-0.5 w-[650px] absolute bottom-0"></div>
            </div>
          </div>

          {/* Subordinate Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 lg:pt-0">
            {teamCards.map((team, idx) => {
              const isSelected = activeTab === team.id;
              return (
                <motion.div
                  key={team.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveTab(isSelected ? 'all' : team.id)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'border-gsm-blue bg-gsm-blue text-white shadow-lg scale-102 z-10'
                      : team.color
                  }`}
                >
                  {/* Card vertical tree line connector (decorative for desktop) */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300 select-none"></div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className={`p-2.5 rounded-xl border shadow-sm shrink-0 ${isSelected ? 'bg-white/20 border-white/10 text-white' : 'bg-white text-slate-800'}`}>
                        <team.icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/15 text-white' : 'bg-slate-200/50 text-slate-500'
                      }`}>
                        {isSelected ? 'Focused' : 'Expand'}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading font-black text-sm uppercase">
                        {team.title}
                      </h4>
                      <p className={`text-[10px] font-bold ${isSelected ? 'text-slate-200' : 'text-slate-400'} mt-1`}>
                        {team.data.role.split('- ')[1] || 'Department Team'}
                      </p>
                    </div>

                    {/* Department Lists */}
                    <ul className="space-y-2 border-t border-slate-200/10 pt-3">
                      {team.data.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold leading-snug">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isSelected ? 'bg-emerald-400' : 'bg-slate-400'}`}></span>
                          <span className={isSelected ? 'text-slate-100' : 'text-slate-600'}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Footer Slogan Bar */}
        <div className="bg-slate-900 rounded-2xl py-3 px-6 text-white text-center shadow-md max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-1 text-xs font-black tracking-widest uppercase">
            <span>ONE TEAM.</span>
            <span className="text-gsm-lightgreen hidden sm:inline">|</span>
            <span>ONE GOAL.</span>
            <span className="text-gsm-lightgreen hidden sm:inline">|</span>
            <span>EXCELLENCE TOGETHER.</span>
          </div>
        </div>

      </div>
    </Section>
  );
}
