import React from 'react';
import Section from '../components/ui/Section';
import { cityData } from '../data/mobilityData';
import { 
  Compass, 
  Plane, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  PhoneCall,
  UserCheck,
  ThumbsUp,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PanIndiaServices() {
  
  const serviceCategories = [
    { name: 'LOCAL SIGHTSEEING', icon: MapPin },
    { name: 'AIRPORT TRANSFER', icon: Plane },
    { name: 'OUTSTATION TRIPS', icon: Compass },
    { name: 'CORPORATE TRAVEL', icon: Briefcase },
    { name: 'DAILY / MONTHLY PACKAGES', icon: Calendar },
    { name: '24x7 SUPPORT', icon: Clock }
  ];

  const valuePillars = [
    { text: 'PROFESSIONAL DRIVERS', icon: UserCheck },
    { text: 'CLEAN & WELL MAINTAINED CABS', icon: Sparkles },
    { text: 'AFFORDABLE PRICES', icon: ThumbsUp },
    { text: 'SAFE & RELIABLE', icon: ShieldCheck },
    { text: 'CUSTOMER SATISFACTION', icon: ThumbsUp }
  ];

  return (
    <Section id="pan-india" bgType="white">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3">
            {/* Indian Flag color circles */}
            <span className="w-3 h-3 rounded-full bg-[#FF9933]"></span>
            <span className="w-3 h-3 rounded-full bg-white border border-blue-900 flex items-center justify-center text-[5px] text-blue-950 font-black">⚙</span>
            <span className="w-3 h-3 rounded-full bg-[#128807]"></span>
            <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest ml-1">Nationwide Coverage</span>
          </div>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none">
            Pan India Our Cab Services
          </h2>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">
            Every City, Every Journey
          </p>

          <div className="inline-flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-black text-gsm-blue tracking-widest border-y border-slate-200 py-2.5 px-6">
            <span>SAFE</span>
            <span className="text-gsm-green">•</span>
            <span>RELIABLE</span>
            <span className="text-gsm-green">•</span>
            <span>COMFORTABLE</span>
            <span className="text-gsm-green">•</span>
            <span>ON TIME</span>
          </div>
        </div>

        {/* 8 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cityData.map((city, i) => (
            <motion.div
              key={city.name}
              whileHover={{ scale: 1.02 }}
              className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm group border border-slate-100"
            >
              {/* Landmark background */}
              <img
                src={city.imageUrl}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
              
              {/* City content details overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left flex flex-col justify-end">
                <span className="text-[10px] text-gsm-lightgreen font-bold uppercase tracking-wider block">City Route Active</span>
                <h3 className="font-heading font-black text-white text-md sm:text-lg leading-tight uppercase mt-0.5">
                  {city.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-none mt-1">
                  {city.tagline}
                </p>
              </div>

              {/* Hover highlight circle icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Categories Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <h3 className="font-heading font-black text-xs md:text-sm tracking-widest text-slate-400 uppercase text-center mb-6">
            OUR CAB SERVICES CATEGORIES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2.5">
                <div className="p-3 bg-slate-800 rounded-2xl text-gsm-lightgreen border border-slate-700/50 shadow-inner">
                  <cat.icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black text-slate-200 tracking-wider leading-tight max-w-[120px]">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Banner Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between shadow-sm">
            <div className="flex gap-4 items-center">
              <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-black text-sm text-slate-900 leading-tight">YOUR JOURNEY</h4>
                <p className="text-xs text-slate-500 font-semibold leading-none mt-1">OUR RESPONSIBILITY</p>
              </div>
            </div>
            <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center justify-between shadow-sm">
            <div className="flex gap-4 items-center">
              <div className="p-2.5 bg-blue-600 text-white rounded-xl">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-black text-sm text-slate-900 leading-tight">24x7 SERVICE</h4>
                <p className="text-xs text-slate-500 font-semibold leading-none mt-1">NATIONWIDE SUPPORT LINE</p>
              </div>
            </div>
            <a href="tel:9821504916" className="text-xs font-black text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">Call Now</a>
          </div>
        </div>

        {/* Bottom Slogan Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] font-extrabold text-slate-500 tracking-wider">
            {valuePillars.map((pill, i) => (
              <div key={i} className="flex items-center gap-2">
                <pill.icon className="w-3.5 h-3.5 text-gsm-green" />
                <span>{pill.text}</span>
                {i < valuePillars.length - 1 && <span className="text-slate-300 ml-4 hidden lg:inline">|</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
