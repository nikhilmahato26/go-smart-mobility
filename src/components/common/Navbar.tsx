import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteContacts } from '../../data/mobilityData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#introduction' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Tour India', href: '#incredible-india' },
    { name: 'Rajasthan', href: '#rajasthan' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism border-b border-slate-200/50 shadow-md py-3'
          : 'bg-white/80 border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gsm-blue to-gsm-green text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="font-heading font-extrabold text-sm tracking-tighter">GSM</span>
              {/* Subtle green car light dot */}
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <div className="font-heading font-black text-lg tracking-tight flex leading-none">
                <span className="text-gsm-blue">GoSmart</span>
                <span className="text-gsm-green ml-1">Mobility</span>
              </div>
              <span className="text-[9px] text-slate-500 font-medium tracking-wider uppercase leading-none mt-1">
                Your own fleet. Everywhere
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-gsm-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${siteContacts.phone}`}
              className="flex items-center gap-2 bg-gradient-to-r from-gsm-blue to-gsm-darkgreen hover:from-gsm-darkgreen hover:to-gsm-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call: {siteContacts.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-gsm-blue p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden glassmorphism border-t border-slate-200/50 absolute top-full left-0 right-0 py-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gsm-blue transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200/50 px-4">
              <a
                href={`tel:${siteContacts.phone}`}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-gsm-blue to-gsm-green text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteContacts.phone} (24*7 Support)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
