import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { siteContacts } from '../../data/mobilityData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'f', color: 'hover:bg-blue-600' },
    { name: 'LinkedIn', href: '#', icon: 'in', color: 'hover:bg-blue-700' },
    { name: 'Instagram', href: '#', icon: 'ig', color: 'hover:bg-pink-600' },
    { name: 'WhatsApp', href: `https://wa.me/91${siteContacts.phone}`, icon: 'wa', color: 'hover:bg-green-600' }
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden pt-16 pb-8">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gsm-blue/10 to-gsm-green/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gsm-green/10 to-gsm-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gsm-blue to-gsm-green text-white shadow-lg">
                <span className="font-heading font-extrabold text-sm">GSM</span>
              </div>
              <div className="flex flex-col">
                <div className="font-heading font-black text-lg tracking-tight flex leading-none">
                  <span className="text-white">GoSmart</span>
                  <span className="text-gsm-lightgreen ml-1">Mobility</span>
                </div>
                <span className="text-[9px] text-slate-400 font-medium tracking-wider uppercase leading-none mt-1">
                  your own fleet.. Everywhere
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering people and businesses to move smarter every day. Providing safe, reliable, affordable, and sustainable mobility services.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon === 'wa' ? (
                    <span className="text-sm">💬</span>
                  ) : (
                    social.icon
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-md tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#introduction" className="hover:text-gsm-lightgreen transition-colors">
                  Company Introduction
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-gsm-lightgreen transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gsm-lightgreen transition-colors">
                  Cab Services
                </a>
              </li>
              <li>
                <a href="#incredible-india" className="hover:text-gsm-lightgreen transition-colors">
                  Incredible India Tours
                </a>
              </li>
              <li>
                <a href="#rajasthan" className="hover:text-gsm-lightgreen transition-colors">
                  Explore Rajasthan
                </a>
              </li>
            </ul>
          </div>

          {/* Core Values / Support */}
          <div>
            <h3 className="text-white font-heading font-bold text-md tracking-wider uppercase mb-6">
              Our Promise
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Safety First</h4>
                  <p className="text-xs text-slate-400">Regularly sanitized vehicles & verified drivers.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <HeartHandshake className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Customer Focus</h4>
                  <p className="text-xs text-slate-400">Personalized assistance & 24/7 dedicated support.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sparkles className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Premium Experience</h4>
                  <p className="text-xs text-slate-400">Pristine cars and punctual commutes, always.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-md tracking-wider uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <a href={`tel:${siteContacts.phone}`} className="hover:text-white transition-colors">
                  {siteContacts.phone}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <a href={`mailto:${siteContacts.email}`} className="hover:text-white transition-colors break-all">
                  {siteContacts.email}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">
                  <strong className="text-white block mb-0.5">Head Office:</strong>
                  {siteContacts.headOfficeAddress}
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-gsm-lightgreen shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">
                  <strong className="text-white block mb-0.5">Branch Office:</strong>
                  {siteContacts.address}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-gsm-lightgreen shrink-0" />
                <span className="text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full">
                  {siteContacts.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} GoSmart Mobility. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Smarter Rides, Better Tomorrow</span>
            <span>•</span>
            <span>Your Journey, Our Responsibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
