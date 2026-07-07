import React from 'react';
import Section from '../components/ui/Section';
import { driverBehaviors } from '../data/mobilityData';
import { 
  Smile, 
  ShieldCheck, 
  MapPin, 
  ThumbsUp, 
  Sparkles, 
  MessageSquare,
  Award,
  HeartHandshake
} from 'lucide-react';

export default function RideQuality() {
  
  // Icon selector mapping string to component
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return Award;
      case 'HeartHandshake': return HeartHandshake;
      case 'Smile': return Smile;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'MessageSquare': return MessageSquare;
      default: return Smile;
    }
  };

  return (
    <Section id="ride-quality" bgType="white">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Passenger Experience
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Every Ride, Every Time, With Care
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            We ensure a safe, comfortable and pleasant journey for every client.
          </p>
        </div>

        {/* Pickup & Drop Panels (Split Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pickup */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="p-6 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-gsm-blue text-[10px] font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3 h-3" />
                <span>Arrival Phase</span>
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                PICKUP
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1">
                We Arrive for You. On-time pickup with a smile.
              </p>
            </div>
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
                alt="Pickup phase service"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-bold uppercase tracking-wider">Opening door for you</span>
                <span className="w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Drop */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="p-6 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-gsm-green text-[10px] font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3 h-3" />
                <span>Destination Phase</span>
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                DROP
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1">
                We Reach with Care. Safe drop at your destination.
              </p>
            </div>
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                alt="Drop phase service"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-bold uppercase tracking-wider">Helping with drop off</span>
                <span className="w-2.5 h-2.5 bg-gsm-blue border border-white rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

        </div>

        {/* Center overlay sticker */}
        <div className="flex justify-center">
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-3.5 px-8 text-center max-w-sm shadow-sm relative -mt-12 z-25">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">Highlights</p>
            <h4 className="font-heading font-black text-lg text-gsm-blue mt-1">
              Your Comfort, Our Priority
            </h4>
          </div>
        </div>

        {/* 6 Behaviors Grid */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-heading font-black text-xs md:text-sm tracking-widest text-slate-400 uppercase text-center mb-2">
            OUR DRIVER'S BEHAVIOR WITH CLIENTS:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverBehaviors.map((beh, i) => {
              const IconComponent = getIcon(beh.iconName);
              return (
                <div key={i} className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="p-2.5 bg-emerald-50 text-gsm-green border border-emerald-100 rounded-xl shrink-0">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xs sm:text-sm text-slate-900 uppercase">
                      {beh.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-1">
                      {beh.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer promise statement */}
        <div className="bg-gradient-to-r from-gsm-blue to-gsm-darkgreen rounded-2xl py-3.5 px-6 text-white text-center shadow-md max-w-4xl mx-auto">
          <p className="font-heading font-black text-xs md:text-sm tracking-widest uppercase">
            Happy Clients, Safe Rides, Better Journeys – That's Our Promise.
          </p>
        </div>

      </div>
    </Section>
  );
}
