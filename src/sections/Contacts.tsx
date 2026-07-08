import { useState } from 'react';
import Section from '../components/ui/Section';
import { siteContacts } from '../data/mobilityData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send,
  PhoneCall
} from 'lucide-react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Airport Transfers',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking form submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Airport Transfers', message: '' });
    }, 4000);
  };

  const contactItems = [
    {
      title: 'PHONE',
      value: siteContacts.phone,
      href: `tel:${siteContacts.phone}`,
      icon: Phone,
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      title: 'EMAIL',
      value: siteContacts.email,
      href: `mailto:${siteContacts.email}`,
      icon: Mail,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      title: 'HEAD OFFICE',
      value: siteContacts.headOfficeAddress,
      href: null,
      icon: MapPin,
      color: 'text-orange-600 bg-orange-50 border-orange-100'
    },
    {
      title: 'BRANCH OFFICE',
      value: siteContacts.address,
      href: null,
      icon: MapPin,
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      title: 'WORKING',
      value: siteContacts.workingHours,
      href: null,
      icon: Clock,
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    }
  ];

  return (
    <Section id="contact" bgType="slate">
      <div className="space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase text-slate-400 font-extrabold tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Get in touch
          </span>
          <h2 className="font-heading font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none uppercase">
            Our Contacts
          </h2>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-widest uppercase">
            We're here to help you Anytime, Anywhere.
          </p>
        </div>

        {/* Form and info row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Contact Info cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="font-heading font-black text-xs md:text-sm tracking-widest text-slate-400 uppercase mb-2">
                DIRECT CHANNELS
              </h3>
              
              <div className="space-y-4">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className={`p-3 rounded-xl border shrink-0 ${item.color}`}>
                      <item.icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                        {item.title}
                      </span>
                      {item.href ? (
                        <a href={item.href} className="block text-xs sm:text-sm font-black text-slate-900 hover:text-gsm-blue break-all mt-1">
                          {item.value}
                        </a>
                      ) : (
                        <span className="block text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed mt-1">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer support callout */}
              <div className="bg-[#eaf9f0] border border-[#cbeed7] rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Customer Support</span>
                    <span className="text-xs font-black text-slate-950">We are just a call away!</span>
                  </div>
                </div>
                <a href={`tel:${siteContacts.phone}`} className="text-xs font-black text-emerald-700 hover:underline">
                  {siteContacts.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-left space-y-1">
                <span className="text-[10px] font-black text-gsm-green uppercase tracking-widest block">Quick Booking Request</span>
                <h3 className="font-heading font-black text-xl text-slate-900 uppercase">
                  Schedule Your Ride
                </h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3 py-16">
                  <div className="p-3 bg-emerald-600 text-white rounded-full w-fit mx-auto shadow-md">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-lg">Request Received!</h4>
                  <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto">
                    Thank you! Our operations team (Dwarka branch) will contact you shortly to confirm your booking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gsm-blue"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gsm-blue"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gsm-blue"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Service Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gsm-blue"
                      >
                        <option>Airport Transfers</option>
                        <option>Outstation Cabs</option>
                        <option>Local City Rides</option>
                        <option>Corporate Travel</option>
                        <option>Hourly / Daily Rentals</option>
                        <option>Rajasthan Heritage Tour</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Pickup / Drop Location & Instructions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gsm-blue"
                      placeholder="Enter details about your ride package..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-gsm-blue text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Ride Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Thank You Box Block */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white max-w-6xl mx-auto shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          
          <div className="text-center md:text-left space-y-1.5 relative z-10">
            <span className="text-[9px] text-gsm-lightgreen font-black uppercase tracking-widest">Acknowledgment</span>
            <h4 className="font-heading font-black text-lg">Thank you for choosing GoSmart Mobility.</h4>
            <p className="text-xs font-semibold text-slate-400">Your journey. Our responsibility.</p>
          </div>

          <div className="flex gap-4 relative z-10">
            {['💬 WhatsApp Support', '📞 Call Chauffeur', '📧 Email HQ'].map((lbl, idx) => (
              <a
                key={idx}
                href={idx === 0 ? `https://wa.me/91${siteContacts.phone}` : idx === 1 ? `tel:${siteContacts.phone}` : `mailto:${siteContacts.email}`}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold rounded-xl transition-all"
              >
                {lbl}
              </a>
            ))}
          </div>
        </div>

        {/* Banner Slogan */}
        <div className="flex justify-center text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              WORKING 24*7 SERVICES — GOSMART MOBILITY
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

      </div>
    </Section>
  );
}
