import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  bgType?: 'white' | 'slate' | 'gradient-blue' | 'gradient-green' | 'dark' | 'light-green';
  children: React.ReactNode;
}

export default function Section({
  id,
  className = '',
  bgType = 'white',
  children
}: SectionProps) {
  
  const bgStyles = {
    white: 'bg-white',
    slate: 'bg-slate-50 border-y border-slate-100',
    'gradient-blue': 'bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 border-y border-slate-100',
    'gradient-green': 'bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50 border-y border-slate-100',
    'light-green': 'bg-[#eaf9f0] border-y border-[#cbeed7]/50', // Matching the pale green background border of PDF slides
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section
      id={id}
      className={`relative py-20 md:py-24 overflow-hidden transition-colors duration-300 ${bgStyles[bgType]} ${className}`}
    >
      {/* Decorative grid pattern background for premium aesthetic */}
      {bgType !== 'dark' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
