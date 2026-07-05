import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Craftsmanship() {
  return (
    <section id="process" className="py-24 md:py-32 bg-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="flex-1 flex justify-center sm:justify-start">
                <img 
                  src="/products/branding/logo.jpg"
                  alt="Agoza Leather logo"
                  className="w-full max-w-[240px] sm:max-w-[280px] object-contain"
                />
              </div>
              <div className="flex-1 flex justify-center sm:justify-start">
                <img 
                  src="/products/branding/banner.png"
                  alt="Agoza Leather banner"
                  className="w-full max-w-[320px] sm:max-w-[360px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[11px] tracking-widest uppercase font-bold text-leather-500 mb-6 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-leather-900">
              Crafted for <i className="font-light">Generations</i>
            </h2>
            <div className="space-y-6 text-leather-900/70 md:text-lg font-light leading-relaxed">
              <p>
                At Agoza, we believe that true luxury lies in the details that often go unseen. From the careful selection of full-grain hides to the final burnish of an edge, every step is executed by master artisans.
              </p>
              <p>
                We source our leathers exclusively from tanneries that employ traditional vegetable-tanning methods, ensuring each piece develops a rich, beautiful patina over its lifetime. It is a slow, deliberate process that cannot be rushed by modern machinery.
              </p>
            </div>

            <a href="#about" className="group inline-flex items-center gap-4 mt-10">
              <span className="text-[11px] tracking-widest uppercase font-bold text-leather-900">Discover Our Process</span>
              <div className="relative flex items-center">
                <div className="h-[1px] w-8 bg-leather-900 group-hover:w-16 transition-all duration-500"></div>
                <ArrowRight className="w-4 h-4 text-leather-900 -ml-2" />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
