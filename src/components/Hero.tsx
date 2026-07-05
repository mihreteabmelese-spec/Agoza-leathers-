import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-leather-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Leather" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-leather-900/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sand-100 text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6 font-bold"
        >
          Uncompromising Quality
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-sand-100 mb-10 leading-[1.1]"
        >
          The Art of <br/><i className="font-light">Fine Leather</i>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#collections" 
            className="inline-block border border-sand-100 text-sand-100 px-10 py-4 text-[11px] tracking-widest uppercase font-bold hover:bg-sand-100 hover:text-leather-900 transition-colors duration-300"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>
    </section>
  );
}
