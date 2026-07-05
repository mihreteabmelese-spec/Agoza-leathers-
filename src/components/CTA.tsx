import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-24 bg-leather-900 text-sand-100 relative overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-widest uppercase font-bold text-leather-400 mb-4 block"
        >
          Discover Agoza
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl italic mb-6 text-sand-100 leading-tight"
        >
          Experience the Quality for Yourself
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-lg text-sand-100/70 max-w-xl mx-auto mb-10 font-serif italic font-light leading-relaxed"
        >
          Join our satisfied customers and discover handcrafted leather products designed to last.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-10 py-4 border border-sand-100 text-xs uppercase tracking-widest font-semibold hover:bg-sand-100 hover:text-leather-900 transition-all duration-500 rounded-sm shadow-md hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
