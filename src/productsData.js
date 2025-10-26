export const products = [
  {
    id: 1,
    name: 'Palestine Oversized Tee',
    price: 599,
    image: '/regalProducts/palestine.png',
    images: ['/regalProducts/palestine.png', '/regalProducts/Screenshot 2025-10-16 024345.png', '/regalProducts/palestineHammer.png'],
    rating: 4.8,
    category: 'Oversized Tees',
    description: 'Classic oversized fit crafted from premium Terry cotton. Perfect for everyday elegance.',
    detailedDescription: 'Experience unparalleled comfort with our Palestine Oversized Tee. Crafted from premium Terry cotton, this piece combines contemporary streetwear aesthetics with timeless design. The oversized fit provides a relaxed silhouette while maintaining a refined appearance. Perfect for layering or wearing solo, this tee is designed to be your go-to piece for any occasion.',
    brand: 'Regal',
    stock: 15,
    colors: ['#2C2416', '#F5F1E8', '#8B7355'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: true,
    features: ['Premium Terry Cotton', 'Oversized Fit', 'Breathable Fabric', 'Pre-shrunk', 'Machine Washable']
  },
  {
    id: 2,
    name: 'Porsche Cream Oversized',
    price: 649,
    image: '/regalProducts/PorscheLuxury.png',
    images: ['/regalProducts/PorscheLuxury.png', '/regalProducts/CaremelporscheBackmock.jpg', '/regalProducts/CaremelgirlporscheBackmock.jpg', '/regalProducts/Caremel porsche.jpg'],
    rating: 4.9,
    category: 'Oversized Tees',
    description: 'Timeless cream oversized tee with a relaxed fit. Embodies understated luxury.',
    detailedDescription: 'Elevate your wardrobe with the Porsche Cream Oversized tee. This luxurious piece features a sophisticated cream tone that pairs effortlessly with any outfit. Made from high-quality Terry cotton, it offers exceptional comfort and durability. The oversized silhouette provides a modern, relaxed fit that\'s perfect for the contemporary fashion enthusiast.',
    brand: 'Regal',
    stock: 8,
    colors: ['#F5F1E8', '#ffff'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: true,
    features: ['Luxury Terry Cotton', 'Relaxed Oversized Fit', 'Soft Hand Feel', 'Colorfast Dye', 'Easy Care']
  },
  {
    id: 3,
    name: 'Black Classic Regal Oversized',
    price: 699,
    image: '/regalProducts/rFront.png',
    images: ['/regalProducts/rFront.png', '/regalProducts/RWhite.png', '/regalProducts/Rbeige.png'],
    rating: 4.7,
    category: 'Oversized Tees',
    description: 'Deep charcoal oversized tee for the modern gentleman. Refined and versatile.',
    detailedDescription: 'The Black Classic Regal Oversized tee is a wardrobe essential for the discerning individual. Its deep black color provides endless styling possibilities, while the premium Terry cotton ensures all-day comfort. The refined oversized cut strikes the perfect balance between contemporary streetwear and classic elegance.',
    brand: 'Regal',
    stock: 12,
    colors: ['#2C2416', '#3D3020'],
    sizes: ['M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: false,
    features: ['Premium Black Dye', 'Oversized Silhouette', 'Durable Construction', 'Fade Resistant', 'Versatile Styling']
  },
  {
    id: 4,
    name: 'Winter is Coming Oversized',
    price: 749,
    image: '/regalProducts/gotGirl.jpg',
    images: ['/regalProducts/gotGirl.jpg', '/regalProducts/gotFront.png', '/regalProducts/gotfront.jpg', '/regalProducts/gotBack.jpg'],
    rating: 4.6,
    category: 'Oversized Tees',
    description: 'Sophisticated olive tone with premium finish. A wardrobe essential.',
    detailedDescription: 'Embrace the spirit of the North with our Winter is Coming Oversized tee. This sophisticated piece features premium Terry cotton construction and a unique design that makes a statement. The oversized fit provides comfort without compromising style, making it perfect for fans of epic storytelling and quality fashion.',
    brand: 'Regal',
    stock: 20,
    colors: ['#5C4A3A', '#8B7355'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: false,
    features: ['Unique Design', 'Premium Terry Cotton', 'Comfortable Fit', 'Statement Piece', 'High-Quality Print']
  },
  {
    id: 5,
    name: 'Palestine Watermelon Oversized',
    price: 799,
    image: '/regalProducts/plainPalestineGirl.png',
    images: ['/regalProducts/plainPalestineGirl.png', '/regalProducts/plainPalestineBoy.png', '/regalProducts/plainPalestineGirl.png'],
    rating: 5.0,
    category: 'Oversized Tees',
    description: 'Pure black oversized perfection. Timeless elegance in every thread.',
    detailedDescription: 'The Palestine Watermelon Oversized tee represents solidarity and style in perfect harmony. Crafted from the finest Terry cotton, this piece features a meaningful design that speaks volumes. The oversized fit ensures maximum comfort while the premium construction guarantees longevity. A must-have for those who wear their values with pride.',
    brand: 'Regal',
    stock: 5,
    colors: ['#000000'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: true,
    features: ['Meaningful Design', 'Premium Quality', 'Limited Stock', 'Oversized Comfort', 'Statement Wear']
  },
  {
    id: 6,
    name: 'Regal Classic Oversized',
    price: 629,
    image: '/regalProducts/RMid.png',
    images: ['/regalProducts/RMid.png', '/regalProducts/RMid.png', '/regalProducts/RMid.png'],
    rating: 4.8,
    category: 'Oversized Tees',
    description: 'Warm sand tone oversized tee. Effortlessly sophisticated.',
    detailedDescription: 'The Regal Classic Oversized tee embodies timeless sophistication. Its warm sand tone offers versatility for any wardrobe, while the premium Terry cotton ensures lasting comfort. The classic oversized fit provides a relaxed yet refined silhouette that works for any occasion. An essential piece for the modern wardrobe.',
    brand: 'Regal',
    stock: 18,
    colors: ['#D4C4B0', '#E8E2D5'],
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Terry Cotton',
    gsm: 240,
    featured: false,
    features: ['Classic Design', 'Versatile Color', 'Premium Terry Cotton', 'All-Day Comfort', 'Easy to Style']
  },
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to get low stock products
export const getLowStockProducts = () => {
  return products.filter(product => product.stock < 10);
};