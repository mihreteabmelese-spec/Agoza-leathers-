import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Mail, Phone, Info } from 'lucide-react';
import { showroomProducts, categories, ShowroomProduct } from '../data';

export function ProductCollections() {
  const [activeCategory, setActiveCategory] = useState<string>('bags');
  const [selectedProduct, setSelectedProduct] = useState<ShowroomProduct | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // References to each category section
  const sectionRefs = {
    bags: useRef<HTMLDivElement>(null),
    gloves: useRef<HTMLDivElement>(null),
    belts: useRef<HTMLDivElement>(null),
  };

  // References to horizontal scroll containers
  const scrollContainers = {
    bags: useRef<HTMLDivElement>(null),
    gloves: useRef<HTMLDivElement>(null),
    belts: useRef<HTMLDivElement>(null),
  };

  // Track dragging state for desktop scroll
  const dragStates = useRef<{ [key: string]: { isDragging: boolean; startX: number; scrollLeft: number; hasMoved: boolean } }>({
    bags: { isDragging: false, startX: 0, scrollLeft: 0, hasMoved: false },
    gloves: { isDragging: false, startX: 0, scrollLeft: 0, hasMoved: false },
    belts: { isDragging: false, startX: 0, scrollLeft: 0, hasMoved: false },
  });

  // Smooth scroll to a category
  const scrollToCategory = (id: string) => {
    const targetRef = sectionRefs[id as keyof typeof sectionRefs];
    if (targetRef.current) {
      // Offset for sticky navbar + header (approx 140px total)
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  // Track scroll position to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for triggers

      for (const [id, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll horizontal gallery
  const scrollGallery = (catId: string, direction: 'left' | 'right') => {
    const container = scrollContainers[catId as keyof typeof scrollContainers].current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers for gallery
  const handleMouseDown = (e: MouseEvent, catId: string) => {
    const container = scrollContainers[catId as keyof typeof scrollContainers].current;
    if (!container) return;
    
    dragStates.current[catId] = {
      isDragging: true,
      startX: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
      hasMoved: false
    };
    container.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: MouseEvent, catId: string) => {
    const state = dragStates.current[catId];
    if (!state || !state.isDragging) return;

    const container = scrollContainers[catId as keyof typeof scrollContainers].current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - state.startX) * 1.5; // Drag speed modifier
    
    if (Math.abs(walk) > 5) {
      state.hasMoved = true;
    }
    
    container.scrollLeft = state.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = (catId: string) => {
    const container = scrollContainers[catId as keyof typeof scrollContainers].current;
    if (container) {
      container.style.cursor = 'grab';
    }
    const state = dragStates.current[catId];
    if (state) {
      state.isDragging = false;
    }
  };

  const handleProductClick = (product: ShowroomProduct, catId: string) => {
    // If user was dragging, don't open lightbox
    if (dragStates.current[catId]?.hasMoved) {
      dragStates.current[catId].hasMoved = false;
      return;
    }
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (!selectedProduct) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverflowX = document.body.style.overflowX;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverflowX = document.documentElement.style.overflowX;
    const previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    const focusTimer = window.setTimeout(() => {
      modalRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overflowX = previousBodyOverflowX;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overflowX = previousHtmlOverflowX;
      previouslyFocusedElement?.focus();
    };
  }, [selectedProduct]);

  return (
    <section id="showroom" className="bg-sand-100 py-12 relative">
      {/* SECTION TITLE */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-12">
        <span className="text-[11px] tracking-widest uppercase font-bold text-leather-500 mb-3 block">
          Digital Showroom
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-leather-900 italic mb-4">
          Our Product Collections
        </h2>
        <div className="w-12 h-[1px] bg-leather-900/30 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-leather-600 font-serif italic text-base leading-relaxed">
          Browse our bespoke leather collections. Every piece is meticulously crafted using elite-grade hides, stitched by hand, and designed to endure.
        </p>
      </div>

      {/* STICKY CATEGORY NAV */}
      <div className="sticky top-[68px] z-40 bg-sand-100/90 backdrop-blur-md border-y border-leather-900/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center space-x-1 md:space-x-4 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`px-5 py-2 text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${
                  activeCategory === cat.id
                    ? 'bg-leather-900 text-sand-100 shadow-md scale-102'
                    : 'text-leather-600 hover:text-leather-900 hover:bg-leather-900/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* INDIVIDUAL CATEGORY GALLERIES */}
      <div className="mt-16 space-y-32">
        {categories.map((cat) => {
          const categoryProducts = showroomProducts.filter((p) => p.category === cat.id);

          return (
            <div
              key={cat.id}
              ref={sectionRefs[cat.id as keyof typeof sectionRefs]}
              className="scroll-mt-36"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-leather-900 italic font-normal mb-2">
                      The {cat.title} Collection
                    </h3>
                    <p className="text-leather-500 text-sm md:text-base max-w-xl font-serif italic font-light">
                      {cat.description}
                    </p>
                  </div>
                  
                  {/* Slider controls */}
                  <div className="flex gap-3 self-end md:self-auto">
                    <button
                      onClick={() => scrollGallery(cat.id, 'left')}
                      className="w-10 h-10 border border-leather-900/20 flex items-center justify-center rounded-full text-leather-900 hover:bg-leather-900 hover:text-sand-100 transition-all duration-300 hover:border-leather-900"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => scrollGallery(cat.id, 'right')}
                      className="w-10 h-10 border border-leather-900/20 flex items-center justify-center rounded-full text-leather-900 hover:bg-leather-900 hover:text-sand-100 transition-all duration-300 hover:border-leather-900"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* HORIZONTAL SWIPE / DRAG AREA */}
              <div className="relative pl-6 lg:pl-12 max-w-7xl mx-auto overflow-hidden">
                <div
                  ref={scrollContainers[cat.id as keyof typeof scrollContainers]}
                  className="flex gap-8 overflow-x-auto snap-x snap-mandatory pr-6 lg:pr-12 pb-6 select-none grab-cursor active:grabbing"
                  style={{ cursor: 'grab' }}
                  onMouseDown={(e) => handleMouseDown(e, cat.id)}
                  onMouseMove={(e) => handleMouseMove(e, cat.id)}
                  onMouseUp={() => handleMouseUpOrLeave(cat.id)}
                  onMouseLeave={() => handleMouseUpOrLeave(cat.id)}
                >
                  {categoryProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => handleProductClick(product, cat.id)}
                      className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] snap-start group cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] bg-sand-200 overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-all duration-700 mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-leather-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                          <span className="text-[10px] tracking-widest uppercase font-bold text-sand-100 bg-leather-900/80 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                            View Showcase
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-serif text-lg text-leather-900 group-hover:text-leather-600 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-leather-500 text-xs mt-1 line-clamp-1 font-serif italic">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODERN LIGHTBOX / SHOWCASE MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[100] bg-leather-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-hidden"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              tabIndex={-1}
              className="bg-sand-100 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative border border-leather-900/10 flex flex-col md:flex-row my-2 md:my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-sand-100/95 hover:bg-leather-900 hover:text-sand-100 text-leather-900 flex items-center justify-center shadow-md transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Image Section */}
              <div className="w-full md:w-1/2 h-[38vh] sm:h-[42vh] md:h-auto md:min-h-[500px] relative bg-sand-200 shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details & Inquire Section */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-sand-100 overflow-y-auto min-h-0">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-extrabold text-leather-500 mb-2 block">
                    {selectedProduct.category} Collection
                  </span>
                  
                  <h3 id="product-modal-title" className="font-serif text-xl sm:text-2xl md:text-3xl text-leather-900 italic font-medium mb-3 sm:mb-4">
                    {selectedProduct.name}
                  </h3>
                  
                  <p className="text-leather-600 text-sm leading-relaxed mb-5 sm:mb-6 font-serif">
                    {selectedProduct.description}
                  </p>

                  {/* Highlights/Features */}
                  <div className="space-y-3 mb-6 sm:mb-8">
                    <h5 className="text-[10px] tracking-widest uppercase font-bold text-leather-800 flex items-center gap-2">
                      <Info className="w-3.5 h-3.5" /> Handcrafted Merits
                    </h5>
                    <ul className="grid grid-cols-1 gap-2 pl-1">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-leather-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-leather-500 rounded-full flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call-to-Action / Contact */}
                <div className="pt-4 sm:pt-6 border-t border-leather-900/10">
                  <p className="text-[11px] text-leather-500 italic mb-3 sm:mb-4 font-serif">
                    Interested in owning a bespoke version of this piece? Inquire with our workshop:
                  </p>
                  
                  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                    <a
                      href={`mailto:agozaleather24@gmail.com?subject=Inquiry: ${selectedProduct.name}`}
                      className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-leather-900 hover:bg-leather-850 text-sand-100 text-xs uppercase tracking-wider font-bold transition-all duration-300 rounded-sm text-center"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                    <a
                      href="tel:+251922453237"
                      className="flex w-full items-center justify-center gap-2 px-4 py-3 border border-leather-900/30 hover:border-leather-900 hover:bg-leather-900/5 text-leather-900 text-xs uppercase tracking-wider font-bold transition-all duration-300 rounded-sm text-center"
                    >
                      <Phone className="w-4 h-4" />
                      Call Atelier
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
