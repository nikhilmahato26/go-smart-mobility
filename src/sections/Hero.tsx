import React from 'react';
import { ShieldCheck, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:py-36 bg-gradient-to-br from-blue-50 via-white to-emerald-50/30 overflow-hidden border-b border-slate-200/60">
      {/* Decorative leaf branch in top left for natural, eco-friendly mobility vibe */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 opacity-25 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gsm-green">
          <path d="M0,0 C20,10 40,5 50,20 C60,35 45,55 60,70 C70,80 90,85 100,100 M0,0 C10,20 5,40 20,50 C35,60 55,45 70,60 C80,70 85,90 100,100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10,8 C15,12 18,18 16,22 C14,26 8,24 6,20 C4,16 6,10 10,8 Z" fill="currentColor" opacity="0.6" />
          <path d="M22,16 C28,20 32,27 29,32 C26,37 18,34 14,30 C10,26 14,18 22,16 Z" fill="currentColor" opacity="0.6" />
          <path d="M35,28 C42,32 46,40 43,45 C40,50 32,47 28,42 C24,37 28,30 35,28 Z" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-gsm-blue text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5 text-gsm-green" />
                <span>Premium Cab Network</span>
              </motion.div>
              
              {/* Script Welcome Header */}
              <div className="space-y-1">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-script text-5xl md:text-7xl text-gsm-blue font-medium leading-none"
                >
                  Welcome
                </motion.h2>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="h-[2px] w-8 bg-slate-300 hidden md:block"></span>
                  <span className="font-heading font-semibold text-slate-500 text-lg uppercase tracking-widest">To</span>
                  <span className="h-[2px] w-8 bg-slate-300 hidden md:block"></span>
                </div>
              </div>

              {/* Bold Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading font-black text-4xl sm:text-5xl md:text-6.5xl tracking-tight leading-none"
              >
                <span className="text-gsm-blue drop-shadow-sm">GoSmart</span>{' '}
                <span className="text-gsm-green drop-shadow-sm">Mobility</span>
              </motion.h1>

              {/* Sub-slogan */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 mt-4"
              >
                <span className="h-[1px] w-4 bg-gsm-green"></span>
                <p className="text-md md:text-xl font-medium text-slate-600 italic">
                  your own fleet.. Everywhere
                </p>
                <span className="h-[1px] w-4 bg-gsm-green"></span>
              </motion.div>
            </div>

            {/* Quick Pillars Buttons/Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {[
                { label: 'Reliable Service', icon: Clock, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                { label: 'Safe & Secure', icon: ShieldCheck, color: 'text-blue-600 bg-blue-50 border-blue-100' },
                { label: 'Everywhere You Go', icon: MapPin, color: 'text-amber-600 bg-amber-50 border-amber-100' },
                { label: 'Smarter Mobility', icon: Sparkles, color: 'text-purple-600 bg-purple-50 border-purple-100' },
              ].map((pill, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all duration-300 hover:shadow-md hover:scale-103 ${pill.color}`}
                >
                  <pill.icon className="w-6 h-6 mb-2 stroke-[2.2]" />
                  <span className="text-xs font-bold text-slate-800">{pill.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA and Slogan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <a
                href="#fleet"
                className="flex items-center gap-2 bg-gradient-to-r from-gsm-blue to-gsm-darkgreen text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-md group"
              >
                <span>Explore Our Cab Fleet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Our Promise</span>
                <span className="text-sm font-extrabold text-gsm-blue">Smarter Rides, Better Tomorrow</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Emblem & Car Overlay */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-between min-h-[500px] pt-4">
            
            {/* Big Circular Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center p-3 z-20"
            >
              <img 
                src="/logo.png" 
                alt="GoSmart Mobility Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Skyline & Road Background Container */}
            <div className="absolute inset-x-0 bottom-0 top-28 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 z-0">
              <img
                src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80"
                alt="City Skyline Road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
            </div>

            {/* Green Cab (Moved Up, Overlayed) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative z-10 w-64 sm:w-72 -mt-10 mb-6 select-none"
            >
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
                alt="GoSmart Green Taxi"
                className="w-full object-contain drop-shadow-2xl rounded-2xl border border-white shadow-lg"
              />
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-md border border-emerald-400">
                GoSmart Cab
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
