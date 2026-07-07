import React from 'react';
import Section from '../components/ui/Section';
import { 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Leaf,
  Users,
  Cpu,
  Globe,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Introduction() {
  const introCards = [
    {
      title: 'Reliable',
      description: 'Dependable rides when you need them most.',
      icon: Clock,
      color: 'border-emerald-200 text-emerald-600 bg-emerald-50/50',
    },
    {
      title: 'Safe & Secure',
      description: 'Your safety is our top priority on every ride.',
      icon: ShieldCheck,
      color: 'border-blue-200 text-blue-600 bg-blue-50/50',
    },
    {
      title: 'Everywhere',
      description: 'Wide reach to take you wherever you need to go.',
      icon: MapPin,
      color: 'border-amber-200 text-amber-600 bg-amber-50/50',
    },
    {
      title: 'Smarter Mobility',
      description: 'Technology-driven solutions for a better tomorrow.',
      icon: Zap,
      color: 'border-purple-200 text-purple-600 bg-purple-50/50',
    },
  ];

  const pillars = [
    { title: 'Customer Focused', icon: Users, color: 'text-blue-500' },
    { title: 'Innovative Solutions', icon: Cpu, color: 'text-amber-500' },
    { title: 'Sustainable Future', icon: Leaf, color: 'text-emerald-500' },
    { title: 'Trusted Partnership', icon: HeartHandshake, color: 'text-indigo-500' },
  ];

  return (
    <Section id="introduction" bgType="gradient-blue">
      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Title and Colored Dots */}
        <div className="text-center space-y-4">
          <h2 className="font-heading font-black text-3xl md:text-4.5xl text-slate-900 tracking-tight">
            GoSmart Mobility Introduction
          </h2>
          <div className="flex justify-center items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-gsm-blue"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-gsm-green"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500"></span>
          </div>
          <p className="text-md md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            GoSmart Mobility is your trusted partner in modern transportation solutions. We are committed to providing safe, reliable, affordable, and sustainable mobility services that empower people and businesses to move smarter every day.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {introCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border bg-white shadow-sm flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:shadow-md ${card.color}`}
            >
              <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100">
                <card.icon className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg leading-none">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Green Quote Box */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm"
        >
          <div className="p-4 bg-emerald-600 text-white rounded-full shadow-md shrink-0">
            <Leaf className="w-8 h-8 fill-emerald-100 text-emerald-600 stroke-[1.5]" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-emerald-950 font-heading font-black text-lg md:text-xl leading-relaxed">
              At <span className="text-gsm-green">GoSmart Mobility</span>, we don't just take you places, <br className="hidden md:inline" />
              we move you toward a smarter, greener future.
            </p>
          </div>
        </motion.div>

        {/* Bottom Banner of Pillars */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className={`p-2.5 bg-slate-800 rounded-xl ${pillar.color}`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <span className="font-heading font-black text-sm md:text-base tracking-wide">
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
