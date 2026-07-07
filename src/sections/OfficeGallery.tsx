import { useState } from 'react';
import Section from '../components/ui/Section';
import { officeDepartments } from '../data/mobilityData';
import { 
  Building2, 
  Users, 
  Workflow, 
  Award, 
  ZoomIn
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function OfficeGallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const statsBadges = [
    { text: 'WELL ORGANIZED DEPARTMENTS', icon: Building2 },
    { text: 'EXPERIENCED & DEDICATED TEAM', icon: Users },
    { text: 'SMOOTH WORKFLOW', icon: Workflow },
    { text: 'BETTER COORDINATION', icon: Award }
  ];

  return (
    <Section id="office" bgType="white">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Company Infrastructure
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Our Office. Our Team. Our Strength.
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            Dedicated Teams. Separate Departments. Seamless Operations.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {officeDepartments.map((dept, index) => {
            return (
              <motion.div
                key={dept.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -5 }}
                className="relative h-72 rounded-3xl overflow-hidden shadow-sm group border border-slate-100 flex flex-col justify-end text-left"
              >
                {/* Photo background */}
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:from-slate-950 group-hover:via-slate-950/60 transition-colors duration-300"></div>

                {/* Content Overlay */}
                <div className="relative p-5 z-10 space-y-2">
                  <span className="text-[10px] text-gsm-lightgreen font-black uppercase tracking-widest block">
                    Active Dept. 0{dept.id}
                  </span>
                  <h3 className="font-heading font-black text-white text-md leading-tight uppercase">
                    {dept.name}
                  </h3>
                  
                  {/* Collapsible description */}
                  <p className="text-[10px] text-slate-300 font-semibold leading-relaxed overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-300">
                    {dept.description}
                  </p>
                </div>

                {/* Zoom marker float */}
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Stats Indicators */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsBadges.map((badge, i) => (
            <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-gsm-blue shadow-sm shrink-0">
                <badge.icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-black text-[10px] sm:text-xs text-slate-950 tracking-wider">
                  {badge.text}
                </h4>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 block">Verified Marker</span>
              </div>
            </div>
          ))}
        </div>

        {/* Slogan Banner Block */}
        <div className="bg-slate-900 rounded-2xl py-3 px-6 text-white text-center shadow-md max-w-4xl mx-auto">
          <p className="font-heading font-black text-xs md:text-sm tracking-widest uppercase">
            One Team, One Goal. Delivering Excellence.
          </p>
        </div>

      </div>
    </Section>
  );
}
