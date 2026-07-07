import { useState } from 'react';
import Section from '../components/ui/Section';
import { indiaStatesData } from '../data/mobilityData';
import { 
  Map, 
  Heart, 
  Users, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IncredibleIndia() {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);

  const leftStates = indiaStatesData.slice(0, 9);
  const rightStates = indiaStatesData.slice(9);

  const tourismThemes = [
    { name: 'Spirituality', icon: '🕉️', color: 'bg-orange-50 border-orange-100 text-orange-600' },
    { name: 'Heritage', icon: '🏛️', color: 'bg-amber-50 border-amber-100 text-amber-600' },
    { name: 'Adventure', icon: '⛰️', color: 'bg-sky-50 border-sky-100 text-sky-600' },
    { name: 'Nature', icon: '🌳', color: 'bg-emerald-50 border-emerald-100 text-emerald-600' },
    { name: 'Culture', icon: '🎭', color: 'bg-purple-50 border-purple-100 text-purple-600' },
    { name: 'Hospitality', icon: '🤝', color: 'bg-rose-50 border-rose-100 text-rose-600' }
  ];

  const travelBadges = [
    { text: 'SAFE & RELIABLE TRAVEL', icon: ShieldCheck },
    { text: 'COMFORTABLE RIDES', icon: Heart },
    { text: 'PROFESSIONAL DRIVERS', icon: Users },
    { text: '24x7 SUPPORT', icon: Clock },
    { text: 'CLEAN & WELL MAINTAINED CABS', icon: Wrench }
  ];

  return (
    <Section id="incredible-india" bgType="gradient-blue">
      <div className="space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-gsm-blue text-xs font-bold uppercase tracking-wider">
            <Map className="w-3.5 h-3.5" />
            <span>Tourism Packages & Tours</span>
          </div>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none">
            Incredible India
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            One Country, Endless Experiences
          </p>
          
          <div className="inline-flex justify-center items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">
              Explore. Experience. Enjoy.
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

        {/* Dynamic Split Layout matching Slide 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left States Column (3 cols) */}
          <div className="lg:col-span-3 space-y-2 max-h-[550px] overflow-y-auto pr-2">
            <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block px-2">Northern & Western Regions</h4>
            {leftStates.map((state, index) => {
              const globalIndex = index;
              return (
                <button
                  key={state.name}
                  onClick={() => setSelectedStateIndex(globalIndex)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all duration-300 ${
                    selectedStateIndex === globalIndex
                      ? 'border-gsm-blue bg-gsm-blue/5 shadow-sm text-gsm-blue font-bold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                  <div className="text-left leading-tight">
                    <h5 className="font-heading font-black text-xs uppercase">{state.name}</h5>
                    <span className="text-[9px] text-slate-400 font-medium">{state.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Map/Showcase Panel (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden">
            
            {/* Visual background details */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStateIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex-grow flex flex-col justify-center items-center space-y-6 py-6"
              >
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={indiaStatesData[selectedStateIndex].image}
                    alt={indiaStatesData[selectedStateIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <Camera className="absolute bottom-3 right-3 text-white w-5 h-5 drop-shadow" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-gsm-green uppercase tracking-widest">Featured Tour State</span>
                  <h3 className="font-heading font-black text-2xl text-slate-950 uppercase leading-none">
                    {indiaStatesData[selectedStateIndex].name}
                  </h3>
                  <p className="text-sm font-semibold italic text-slate-500">
                    "{indiaStatesData[selectedStateIndex].desc}"
                  </p>
                </div>

                <p className="text-xs text-slate-500 max-w-sm leading-relaxed font-semibold">
                  Travel comfortably with GoSmart Mobility. Book an outstation package to explore {indiaStatesData[selectedStateIndex].name} with a dedicated personal driver.
                </p>

                <a 
                  href="#contact" 
                  className="bg-slate-950 text-white hover:bg-gsm-blue font-bold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-all"
                >
                  Book Outstation Cab
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Tourism Themes (Slide 7 Icons) */}
            <div className="border-t border-slate-100 pt-6 w-full">
              <h4 className="text-[9px] font-black text-slate-400 tracking-wider uppercase mb-3">Endless Travel Themes</h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {tourismThemes.map((theme, i) => (
                  <div key={i} className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center ${theme.color}`}>
                    <span className="text-lg mb-1">{theme.icon}</span>
                    <span className="text-[8px] font-black uppercase tracking-wider">{theme.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right States Column (3 cols) */}
          <div className="lg:col-span-3 space-y-2 max-h-[550px] overflow-y-auto pl-2">
            <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 block px-2">Southern & Eastern Regions</h4>
            {rightStates.map((state, index) => {
              const globalIndex = index + 9;
              return (
                <button
                  key={state.name}
                  onClick={() => setSelectedStateIndex(globalIndex)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all duration-300 ${
                    selectedStateIndex === globalIndex
                      ? 'border-gsm-blue bg-gsm-blue/5 shadow-sm text-gsm-blue font-bold'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                  <div className="text-left leading-tight">
                    <h5 className="font-heading font-black text-xs uppercase">{state.name}</h5>
                    <span className="text-[9px] text-slate-400 font-medium">{state.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Travel Badges Bottom Row */}
        <div className="bg-slate-900 rounded-3xl p-5 shadow-xl text-white">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {travelBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-gsm-lightgreen stroke-[2.2] shrink-0" />
                <span className="text-[10px] sm:text-xs font-black tracking-wider text-slate-200 uppercase">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slogan Statement */}
        <div className="flex justify-center items-center gap-2.5 pt-4">
          <span className="h-[1px] w-8 bg-slate-300"></span>
          <p className="text-sm font-black text-gsm-blue italic">
            Your Journey, Our Responsibility
          </p>
          <span className="h-[1px] w-8 bg-slate-300"></span>
        </div>

      </div>
    </Section>
  );
}
