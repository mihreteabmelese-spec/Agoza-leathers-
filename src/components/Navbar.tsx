import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-sand-100/95 backdrop-blur-md py-4 shadow-sm text-leather-900 border-b border-leather-900/10' : 'bg-transparent py-6 text-sand-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="w-1/3 flex items-center">
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="font-serif text-3xl font-bold tracking-tight hidden lg:block">
              Agoza
            </a>
          </div>

          <div className="w-1/3 flex justify-center">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight lg:hidden">
              Agoza
            </a>
            <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-sans font-bold tracking-widest uppercase">
              <a href="#showroom" className="hover:text-leather-500 transition-colors">Showroom</a>
              <a href="#process" className="hover:text-leather-500 transition-colors">Craftsmanship</a>
              <a href="#contact" className="hover:text-leather-500 transition-colors">Contact</a>
            </nav>
          </div>

          <div className="w-1/3 flex items-center justify-end space-x-6">
            <a 
              href="tel:+251922453237"
              className="hidden sm:flex items-center space-x-2 text-[11px] font-sans font-bold tracking-widest uppercase border border-current px-4 py-2 hover:bg-leather-900 hover:text-sand-100 hover:border-leather-900 transition-all duration-300"
            >
              <Phone className="w-3 h-3" />
              <span>Inquire</span>
            </a>
            <a 
              href="tel:+251922453237" 
              className="sm:hidden text-current hover:text-leather-500 transition-colors"
              aria-label="Call Workshop"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-leather-900/60 z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-4/5 max-w-sm h-full bg-sand-100 p-6 flex flex-col text-leather-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl font-bold">Agoza</span>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6 flex-grow">
                <a href="#showroom" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-leather-900/10 pb-4">Showroom</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-leather-900/10 pb-4">Craftsmanship</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif border-b border-leather-900/10 pb-4">Contact</a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
