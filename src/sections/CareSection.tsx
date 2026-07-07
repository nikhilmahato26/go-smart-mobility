import React from 'react';
import Section from '../components/ui/Section';
import { 
  Briefcase, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  Heart, 
  Clock, 
  ThumbsUp,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function CareSection() {
  const assistancePoints = [
    {
      title: 'Luggage Handling',
      description: 'We handle your luggage with care and respect.',
      icon: Briefcase,
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600'
    },
    {
      title: 'Door to Door Service',
      description: 'Pickup from your location and drop at your destination.',
      icon: MapPin,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600'
    },
    {
      title: 'Personalized Assistance',
      description: 'We are always here to assist you.',
      icon: HelpCircle,
      color: 'bg-amber-50 border-amber-100 text-amber-600'
    },
    {
      title: 'Safe & Comfortable Journey',
      description: 'Your safety and comfort are our top priority.',
      icon: ShieldCheck,
      color: 'bg-blue-50 border-blue-100 text-blue-600'
    }
  ];

  const qualityBadges = [
    { text: 'TRUSTED DRIVERS', icon: UserCheck },
    { text: 'WORKING 24*7 SERVICES', icon: Clock },
    { text: 'RELIABLE & PUNCTUAL', icon: ShieldCheck },
    { text: 'CUSTOMER SATISFACTION', icon: ThumbsUp }
  ];

  return (
    <Section id="care" bgType="gradient-blue">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-gsm-blue text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-gsm-green fill-gsm-green" />
            <span>Passenger Centricity</span>
          </div>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            We Don't Just Drive, We Care.
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            Helping you with every step of your journey.
          </p>
        </div>

        {/* Content Panel (Split Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Assistance Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-heading font-black text-xs md:text-sm tracking-widest text-slate-400 uppercase mb-2">
                WE ASSIST YOU WITH:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {assistancePoints.map((pt, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
                    <div className={`p-2.5 rounded-xl border w-fit ${pt.color}`}>
                      <pt.icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xs sm:text-sm text-slate-900 leading-tight">
                        {pt.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-1">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Illustration & Quote Overlay (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80"
                alt="Luggage Handling Assistance"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              {/* Sit back and relax overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-200 flex gap-4 items-center">
                <div className="p-3 bg-gsm-blue text-white rounded-full">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                    Sit back, relax and enjoy a hassle-free ride. <br className="hidden sm:inline" />
                    <span className="text-gsm-green">We take care of the rest.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quality Badges row */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {qualityBadges.map((badge, i) => (
            <div key={i} className="flex gap-3 items-center justify-center p-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
              <badge.icon className="w-5 h-5 text-gsm-blue shrink-0" />
              <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Footer Slogan */}
        <div className="flex justify-center text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Happy Clients, Safe Rides, Better Journeys.
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

      </div>
    </Section>
  );
}
