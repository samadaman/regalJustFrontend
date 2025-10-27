import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export const metadata = {
  title: "Home - Premium Fashion Collection",
  description: "Explore our curated collection of timeless fashion pieces. From elegant apparel to sophisticated accessories, discover the perfect pieces for your wardrobe.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}
