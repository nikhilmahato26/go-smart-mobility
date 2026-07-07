import React from 'react';
import Section from '../components/ui/Section';
import { serviceData } from '../data/mobilityData';
import { 
  Plane, 
  Compass, 
  MapPin, 
  Briefcase, 
  Calendar,
  ShieldCheck,
  UserCheck,
  Wrench,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  
  // Icon selector mapping string to component
  const getIcon = (name: string) => {
    switch (name) {
      case 'PlaneTakeoff': return Plane;
      case 'Compass': return Compass;
      case 'MapPin': return MapPin;
      case 'Briefcase': return Briefcase;
      case 'Calendar': return Calendar;
      default: return MapPin;
    }
  };

  const trustBadges = [
    {
      title: 'Safe & Secure',
      desc: 'Verified drivers for your safety',
      icon: ShieldCheck
    },
    {
      title: 'Professional Drivers',
      desc: 'Experienced, courteous and well-trained',
      icon: UserCheck
    },
    {
      title: 'Well Maintained Cars',
      desc: 'Clean, comfortable and regularly serviced',
      icon: Wrench
    },
    {
      title: '24/7 Availability',
      desc: 'We are here for you, anytime, anywhere',
      icon: Clock
    }
  ];

  return (
    <Section id="services" bgType="gradient-green">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-gsm-green text-xs font-bold uppercase tracking-wider">
            <span>Core Offerings</span>
          </div>
          <div className="space-y-1">
            <span className="font-script text-4xl text-gsm-green leading-none">Smart Rides. Every Time.</span>
            <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight mt-1">
              Our Cab Services
            </h2>
          </div>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-wider uppercase">
            Safe. Reliable. Comfortable. Your Journey, Our Priority.
          </p>
        </div>

        {/* Services Grid (Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {serviceData.map((service, i) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-3 left-3 bg-white p-2 rounded-xl text-gsm-green shadow-md border border-slate-100">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Description */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-md text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="text-xs font-bold text-gsm-blue hover:text-gsm-green inline-flex items-center gap-1 group/btn"
                  >
                    <span>Request Service</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Badges Grid */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="p-2.5 bg-emerald-50 text-gsm-green rounded-xl border border-emerald-100 shrink-0">
                  <badge.icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xs text-slate-900 tracking-wide">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-snug mt-1">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
