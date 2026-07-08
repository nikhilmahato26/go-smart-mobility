import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { fleetData } from '../data/mobilityData';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Activity, 
  Wrench, 
  UserCheck, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CabFleet() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  const fleetBadges = [
    { label: 'WELL MAINTAINED CARS', icon: Wrench },
    { label: 'SAFE & RELIABLE', icon: ShieldCheck },
    { label: 'PROFESSIONAL DRIVERS', icon: UserCheck },
    { label: 'COMFORTABLE JOURNEYS', icon: Activity },
    { label: '24/7 AVAILABILITY', icon: Clock },
    { label: 'ON TIME, EVERY TIME', icon: Compass }
  ];

  return (
    <Section id="fleet" bgType="slate">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-3">
          <h2 className="font-heading font-black text-3xl md:text-4.5xl text-slate-900 tracking-tight">
            OUR CAB FLEET
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="h-[2px] w-6 bg-gsm-green"></span>
            <p className="text-md md:text-lg font-bold text-slate-500 uppercase tracking-widest">
              Reliable. Comfortable. Always GoSmart.
            </p>
            <span className="h-[2px] w-6 bg-gsm-blue"></span>
          </div>
        </div>

        {/* Dynamic Fleet Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Selector Panel (visible only on desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
            {fleetData.map((car, i) => (
              <button
                key={car.id}
                onClick={() => setActiveCarIndex(i)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeCarIndex === i
                    ? 'border-gsm-blue bg-gsm-blue text-white shadow-lg translate-x-2'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <h3 className="font-heading font-black text-md leading-none">
                    {car.name}
                  </h3>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider block mt-1 ${activeCarIndex === i ? 'text-slate-200' : 'text-slate-400'}`}>
                    {car.brand} • {car.type}
                  </span>
                </div>
                <div className={`p-2 rounded-xl text-xs font-black ${activeCarIndex === i ? 'bg-white/20' : 'bg-slate-100'}`}>
                  {car.capacity}
                </div>
              </button>
            ))}
          </div>

          {/* Image/Detail Panel (Full width on mobile, 8 cols on desktop) */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-4 md:p-8 shadow-md min-h-[380px] flex flex-col justify-between">
            
            {/* Mobile Selector Menu (visible only on mobile) */}
            <div className="flex lg:hidden flex-row overflow-x-auto gap-2 py-1.5 -mx-4 px-4 scrollbar-none border-b border-slate-100 pb-3 mb-4">
              {fleetData.map((car, i) => (
                <button
                  key={car.id}
                  onClick={() => setActiveCarIndex(i)}
                  className={`shrink-0 w-auto text-left py-1.5 px-3 rounded-xl border transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    activeCarIndex === i
                      ? 'border-gsm-blue bg-gsm-blue text-white shadow-sm scale-102 font-extrabold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <span className="font-heading font-black text-xs">
                    {car.name}
                  </span>
                  <span className={`text-[9px] font-semibold ${activeCarIndex === i ? 'text-slate-200' : 'text-slate-400'}`}>
                    ({car.capacity})
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCarIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"
              >
                {/* Photo */}
                <div className="relative group overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <img
                    src={fleetData[activeCarIndex].imageUrl}
                    alt={fleetData[activeCarIndex].name}
                    className="w-full h-40 sm:h-48 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      GoSmart Elite Fleet
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <span className="text-[10px] md:text-xs font-black text-gsm-green uppercase tracking-widest">
                      {fleetData[activeCarIndex].brand}
                    </span>
                    <h3 className="font-heading font-black text-xl md:text-3.5xl text-slate-900 leading-tight">
                      {fleetData[activeCarIndex].name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] md:text-xs font-bold">
                      <Users className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <span>Capacity: {fleetData[activeCarIndex].capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {fleetData[activeCarIndex].features.map((feat, index) => (
                        <div key={index} className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gsm-green shrink-0"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold bg-slate-900 text-white hover:bg-gsm-blue px-3.5 py-2 rounded-xl transition-all duration-300 w-fit"
                  >
                    <span>Book this car</span>
                    <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slogans Grid */}
            <div className="border-t border-slate-100 pt-4 mt-6 grid grid-cols-3 md:grid-cols-6 gap-3">
              {fleetBadges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="p-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 mb-1">
                    <badge.icon className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-bold text-slate-500 leading-none">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer Slogan Banner */}
        <div className="bg-gradient-to-r from-gsm-blue to-gsm-darkgreen rounded-2xl py-3 px-6 text-white text-center shadow-md">
          <p className="font-heading font-black text-xs md:text-sm tracking-widest uppercase">
            One Fleet. Every Destination. GoSmart.
          </p>
        </div>

      </div>
    </Section>
  );
}
