import { Mail, Phone, MapPin, Clock, Star, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';

export function Footer() {
  return (
    <footer id="contact" className="bg-leather-900 text-sand-100 pt-24 pb-12 border-t border-leather-900/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand & Ratings */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-[0.3em] font-extralight uppercase mb-4 block">Agoza</span>
              <p className="text-sand-100/70 text-sm leading-relaxed font-serif">
                Purveyors of fine leather goods. Handcrafted with uncompromising quality and timeless design since 2004.
              </p>
            </div>
            
            {/* Google Reviews Badge */}
            <div className="bg-leather-800/50 border border-leather-800/40 p-4 rounded-sm max-w-xs">
              <div className="flex items-center space-x-1 text-amber-500 mb-1">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              </div>
              <p className="text-[11px] font-sans font-medium tracking-wide text-sand-100/90">
                ★★★★★ 5.0/5 based on 9 Google Reviews.
              </p>
            </div>
          </div>

          {/* Column 2: Contact Us & Follow Us */}
          <div className="flex flex-col space-y-8">
            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-sans font-bold uppercase mb-6 text-sand-100/40">Contact Us</h4>
              <ul className="space-y-4 text-xs font-sans tracking-wide text-sand-100/70">
                <li className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 text-sand-100/40 group-hover:text-sand-100 transition-colors" />
                  <a href="tel:+251922453237" className="hover:text-sand-100 transition-colors">+251 92 245 3237</a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 text-sand-100/40 group-hover:text-sand-100 transition-colors" />
                  <a href="tel:+251934154175" className="hover:text-sand-100 transition-colors">+251 93 415 4175</a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 text-sand-100/40 group-hover:text-sand-100 transition-colors" />
                  <a href="mailto:agozaleather24@gmail.com" className="hover:text-sand-100 transition-colors lowercase">agozaleather24@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] tracking-[0.2em] font-sans font-bold uppercase mb-4 text-sand-100/40">Follow Us</h4>
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-xs font-sans text-sand-100/70 hover:text-sand-100 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-sand-100/40 group-hover:text-sand-100 transition-colors" />
                  <span>Facebook (Agoza Leather)</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/agoza-leather" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-xs font-sans text-sand-100/70 hover:text-sand-100 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-sand-100/40 group-hover:text-sand-100 transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Visit Us */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-sans font-bold uppercase mb-6 text-sand-100/40">Visit Us</h4>
            <div className="flex items-start space-x-3 text-xs font-sans tracking-wide text-sand-100/70">
              <MapPin className="w-5 h-5 text-sand-100/40 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-serif italic text-sm text-sand-100">Kaliti Maseltegna Square,</p>
                <p>Addis Ababa 1000,</p>
                <p>Ethiopia.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-sans font-bold uppercase mb-6 text-sand-100/40">Business Hours</h4>
            <div className="flex items-start space-x-3 text-xs font-sans tracking-wide text-sand-100/70">
              <Clock className="w-5 h-5 text-sand-100/40 flex-shrink-0 mt-0.5" />
              <ul className="space-y-3">
                <li className="flex justify-between gap-4">
                  <span className="text-sand-100/50 font-bold">Mon – Fri:</span>
                  <span className="text-sand-100">8:00 AM – 5:30 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-sand-100/50 font-bold">Saturday:</span>
                  <span className="text-sand-100">8:00 AM – 12:30 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-sand-100/50 font-bold">Sunday:</span>
                  <span className="text-sand-100 italic">Closed</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-sand-100/10">
          <div className="flex flex-col items-center text-center text-[10px] font-sans tracking-widest uppercase text-sand-100/40">
            <p className="mb-4">© 2026 Agoza Leather. All Rights Reserved.</p>

            <div className="mb-4 text-[11px] sm:text-[12px] tracking-[0.2em] text-sand-100/70">
              <p className="font-serif italic normal-case tracking-normal text-sm sm:text-base text-sand-100/90">Developed by Mihreteab Melese</p>
              <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-sand-100/50">You can contact the developer:</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://t.me/Mihreteabmelese"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-leather-800/60 text-amber-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-amber-400 hover:text-amber-400"
              >
                <FaTelegramPlane className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1Csa4DN9RX/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-leather-800/60 text-amber-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-amber-400 hover:text-amber-400"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/mihreteabmelese"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-leather-800/60 text-amber-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-amber-400 hover:text-amber-400"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@mihreteab.melese?_r=1&_t=ZS-97mQUoFzLIT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-leather-800/60 text-amber-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-amber-400 hover:text-amber-400"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[10px] font-sans tracking-widest uppercase text-sand-100/40">
              <a href="#" className="hover:text-sand-100 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sand-100 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sand-100 transition-colors">Shipping</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
