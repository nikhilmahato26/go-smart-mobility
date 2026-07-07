import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { rajasthanAttractions } from '../data/mobilityData';
import { ShieldCheck, UserCheck, Wrench, Clock, Compass, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoyalRajasthan() {
  const [filterCity, setFilterCity] = useState('ALL');

  const cities = ['ALL', 'JAIPUR', 'UDAIPUR', 'JODHPUR', 'JAISALMER'];

  const filteredAttractions = rajasthanAttractions.filter((att) => {
    if (filterCity === 'ALL') return true;
    return att.name.toUpperCase().includes(filterCity);
  });

  const valueBadges = [
    { text: 'SAFE & RELIABLE', icon: ShieldCheck },
    { text: 'EXPERIENCED DRIVERS', icon: UserCheck },
    { text: 'WELL MAINTAINED FLEET', icon: Wrench },
    { text: '24x7 SUPPORT', icon: Clock }
  ];

  return (
    <Section id="rajasthan" bgType="light-green">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2">
            <span className="text-xl">👑</span>
            <span className="text-xs uppercase text-amber-700 font-extrabold tracking-widest bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
              Royal Heritage Tour
            </span>
          </div>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-[#1e6b38] tracking-tight leading-none uppercase">
            Explore The Royal Rajasthan
          </h2>
          <p className="text-slate-600 font-bold text-xs md:text-sm tracking-widest uppercase">
            The Land of Kings. Rich Heritage. Vibrant Culture. Timeless Beauty.
          </p>
          
          <div className="bg-[#1e6b38] text-white py-2 px-6 rounded-full inline-block shadow-md">
            <p className="text-xs font-black tracking-widest uppercase">
              TRAVEL COMFORTABLY WITH GOSMART MOBILITY
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFilterCity(city)}
              className={`px-4 py-2 rounded-xl text-xs font-black tracking-wider transition-all duration-300 ${
                filterCity === city
                  ? 'bg-[#1e6b38] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredAttractions.map((att, i) => (
            <motion.div
              layout
              key={att.name}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={att.imageUrl}
                  alt={att.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg text-white">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] text-[#1e6b38] font-bold uppercase tracking-wider block">
                    {att.location}
                  </span>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-slate-950 uppercase leading-snug mt-1">
                    {att.name.split(',')[0]}
                  </h3>
                </div>
                
                <a
                  href="#contact"
                  className="text-[10px] font-black text-[#1e6b38] hover:underline mt-4 inline-flex items-center gap-1 uppercase"
                >
                  <span>Inquire Cab Package</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inner Banner with overlapping White Cab */}
        <div className="relative bg-slate-900 text-white rounded-3xl p-8 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1599661046289-e31897826741?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Slogans Grid */}
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              {valueBadges.map((badge, i) => (
                <div key={i} className="flex gap-3 items-center p-3 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="p-2 bg-amber-500 text-slate-950 rounded-xl">
                    <badge.icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-black tracking-wider text-slate-200 uppercase">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Statement */}
            <div className="md:col-span-4 text-center md:text-right space-y-3">
              <span className="text-xs uppercase text-emerald-400 font-extrabold tracking-widest">Your Journey, Our Responsibility</span>
              <h3 className="font-heading font-black text-lg sm:text-xl leading-snug text-white">
                Go Smart, Travel Smart <br className="hidden md:inline" />
                with GoSmart Mobility
              </h3>
              <a 
                href="#contact" 
                className="inline-block bg-[#1e6b38] hover:bg-emerald-600 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                Book Rajasthan Tour
              </a>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
