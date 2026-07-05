/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCollections } from './components/ProductCollections';
import { Craftsmanship } from './components/Craftsmanship';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-100 flex flex-col font-sans text-leather-900 selection:bg-leather-900 selection:text-sand-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductCollections />
        <Craftsmanship />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
