import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "The bag looks even better in real life than in photos. Simple, classy, and strong. Love it!",
    author: "Kaleb G"
  },
  {
    id: 2,
    rating: 5,
    text: "I bought a belt and wallet, both are top quality. Durable, stylish, and well-finished. I will order again.",
    author: "Eshu"
  },
  {
    id: 3,
    rating: 5,
    text: "Very professional team. They handled my bulk order smoothly and delivered on time. Reliable manufacturer.",
    author: "John S"
  },
  {
    id: 4,
    rating: 5,
    text: "I requested a custom design and they delivered exactly what I wanted. Very impressed with their work.",
    author: "Mahder Kidane Woldemariam"
  },
  {
    id: 5,
    rating: 5,
    text: "Great craftsmanship and attention to detail. The stitching is clean and the leather quality is premium. Definitely worth it.",
    author: "Aklilu"
  },
  {
    id: 6,
    rating: 5,
    text: "Nice product.",
    author: "Yohanes S"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function Testimonials() {
  return (
    <section className="py-24 bg-sand-200 border-t border-b border-leather-900/5 relative overflow-hidden font-sans">
      {/* Decorative subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.02]">
        <div className="absolute right-10 top-1/4 text-[120px] font-serif italic text-leather-900 select-none">Agoza</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Rating & Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-4 bg-sand-100 px-6 py-3 rounded-full border border-leather-900/5 shadow-sm"
          >
            <div className="flex items-center space-x-1 text-amber-500 mb-1">
              <Star className="w-4 h-4 fill-current text-amber-500" />
              <Star className="w-4 h-4 fill-current text-amber-500" />
              <Star className="w-4 h-4 fill-current text-amber-500" />
              <Star className="w-4 h-4 fill-current text-amber-500" />
              <Star className="w-4 h-4 fill-current text-amber-500" />
            </div>
            <span className="text-xs tracking-wider uppercase font-bold text-leather-800">5.0 Rating</span>
            <span className="text-[10px] text-leather-500 tracking-wide font-medium">Based on Google Reviews</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl text-leather-900 italic mb-4"
          >
            What Our Customers Say
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-[1px] bg-leather-900/20 mb-6"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-leather-500 font-serif text-base md:text-lg italic font-light leading-relaxed"
          >
            Our customers trust Agoza Leather for premium craftsmanship, durability, and exceptional service.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group bg-sand-100 p-8 rounded-lg relative overflow-hidden flex flex-col justify-between border border-leather-900/[0.04] shadow-[0_4px_24px_rgba(44,30,22,0.02)] hover:shadow-[0_12px_32px_rgba(44,30,22,0.06)] hover:border-leather-900/[0.08] transition-all duration-500"
            >
              {/* Subtle Background Quote Icon */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-leather-300/10 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-leather-300/15" />

              <div>
                {/* 5-Star Rating inside Card */}
                <div className="flex items-center space-x-1 mb-6 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-leather-800 text-sm md:text-base font-light italic leading-relaxed mb-6 font-serif">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center pt-4 border-t border-leather-900/5 mt-auto">
                <div className="w-6 h-[1px] bg-leather-500/30 mr-3"></div>
                <span className="text-xs font-semibold tracking-wider uppercase text-leather-500">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
