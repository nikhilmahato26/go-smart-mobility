import React, { useState } from 'react';
import { ShieldCheck, MapPin, Sparkles, Clock, ArrowRight, Car, Route, Calendar, User, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteContacts } from '../data/mobilityData';

const timeOptions = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
];

export default function Hero() {
  const [formData, setFormData] = useState({
    carType: 'SEDAN',
    tripType: 'Round Trip',
    from: '',
    to: '',
    pickupDate: '',
    pickupTime: '08:00 AM',
    travelerName: '',
    mobileNumber: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Cab Booking Request* 🚖
----------------------------------
• *Car Type:* ${formData.carType}
• *Trip Type:* ${formData.tripType}
• *From:* ${formData.from}
• *To:* ${formData.to}
• *Pickup Date:* ${formData.pickupDate}
• *Pickup Time:* ${formData.pickupTime}
• *Traveler Name:* ${formData.travelerName}
• *Mobile Number:* ${formData.mobileNumber}
${formData.email ? `• *Email:* ${formData.email}` : ''}
----------------------------------
_Sent from GoSmart Mobility Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${siteContacts.phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
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
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-8">
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

          {/* Booking Form on the Right */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-2xl relative"
            >
              {/* Header Banner */}
              <div className="bg-[#0b56a4] text-white py-3 px-4 rounded-xl text-center shadow-sm mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20"></div>
                <h3 className="font-heading font-black text-base sm:text-lg text-[#ffd600] tracking-wide relative z-10 uppercase">
                  Book Local & Intercity Cabs
                </h3>
              </div>

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Car Type & Trip Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      <span className="text-red-500 mr-1">*</span>Type Of Car
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        required
                        value={formData.carType}
                        onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-6 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue appearance-none cursor-pointer"
                      >
                        <option value="SEDAN">SEDAN</option>
                        <option value="SUV">SUV</option>
                        <option value="MUV">MUV</option>
                        <option value="TEMPO TRAVELLER">TEMPO TRAVELLER</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      <span className="text-red-500 mr-1">*</span>Trip Type
                    </label>
                    <div className="relative">
                      <Route className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        required
                        value={formData.tripType}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-6 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue appearance-none cursor-pointer"
                      >
                        <option value="Round Trip">Round Trip</option>
                        <option value="One Way">One Way</option>
                        <option value="Local Package">Local Package</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* From */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                    <span className="text-red-500 mr-1">*</span>From
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Enter pickup location"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                    />
                  </div>
                </div>

                {/* To */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                    <span className="text-red-500 mr-1">*</span>To
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Enter drop location"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                    />
                  </div>
                </div>

                {/* Pickup Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      <span className="text-red-500 mr-1">*</span>Pick up Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      <span className="text-red-500 mr-1">*</span>Pick up Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        required
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-6 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue appearance-none cursor-pointer"
                      >
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Traveler Name */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                    <span className="text-red-500 mr-1">*</span>Traveler Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Enter traveler name"
                      value={formData.travelerName}
                      onChange={(e) => setFormData({ ...formData, travelerName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                    />
                  </div>
                </div>

                {/* Mobile Number & Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      <span className="text-red-500 mr-1">*</span>Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="Enter mobile"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wider text-left">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-gsm-blue focus:ring-1 focus:ring-gsm-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#f6d20f] hover:bg-[#e2c00a] text-slate-900 font-extrabold text-xs sm:text-sm py-3 rounded-xl transition-all duration-300 shadow-md uppercase tracking-wider cursor-pointer active:scale-98 mt-2"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
