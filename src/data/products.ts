export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  category: 'Electronics' | 'Clothing' | 'Home';
  brand: string;
  image: string;
  additionalImages?: string[];
  features?: string[];
  reviews?: Review[];
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    rating: 4.7,
    reviewCount: 84,
    description: 'Lightweight performance running shoes designed for ultimate comfort and breathability during daily miles.',
    category: 'Clothing',
    brand: 'SportFlex',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['Mesh breathable upper', 'Shock-absorbing foam midsole', 'Durable rubber outsole'],
    reviews: [
      { id: 'r1', userName: 'Alex M.', rating: 5, date: '2024-05-10', comment: 'Extremely comfortable for my long morning runs!' },
      { id: 'r2', userName: 'Sarah P.', rating: 4, date: '2024-04-22', comment: 'Fits true to size. Great cushion.' }
    ]
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 129,
    rating: 4.8,
    reviewCount: 156,
    description: 'Over-ear active noise-canceling wireless headphones delivering crystal-clear acoustic precision and 40-hour battery life.',
    category: 'Electronics',
    brand: 'AudioMax',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['Active Noise Cancellation', 'Bluetooth 5.3 Quick Connect', '40-Hour Battery Life', 'Built-in HD Mic'],
    reviews: [
      { id: 'r3', userName: 'David K.', rating: 5, date: '2024-06-01', comment: 'Sound quality is unreal for this price range!' }
    ]
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    rating: 4.6,
    reviewCount: 92,
    description: 'Water-resistant minimalist commuter backpack with dedicated 15.6" laptop sleeve and anti-theft hidden pockets.',
    category: 'Clothing',
    brand: 'UrbanGear',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['Padded 15.6" laptop compartment', 'Water-repellent Oxford fabric', 'Ergonomic shoulder straps'],
    reviews: [
      { id: 'r4', userName: 'Emma T.', rating: 5, date: '2024-05-18', comment: 'Perfect backpack for university and daily work travel.' }
    ]
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    rating: 4.9,
    reviewCount: 210,
    description: 'Next-gen fitness & health tracker smartwatch with AMOLED touchscreen display, heart rate monitor, and GPS tracking.',
    category: 'Electronics',
    brand: 'TechPulse',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['AMOLED Always-On display', 'Heart rate & SpO2 monitoring', '50m Water Resistance', '7-Day Battery'],
    reviews: [
      { id: 'r5', userName: 'Jason B.', rating: 5, date: '2024-06-12', comment: 'Sleek design, accurate step counter and sleep tracking!' }
    ]
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    rating: 4.5,
    reviewCount: 67,
    description: 'Classic polarized UV400 protective sunglasses crafted with premium alloy frame for modern outdoor style.',
    category: 'Clothing',
    brand: 'LuxeVision',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['100% UV400 Polarized Lenses', 'Anti-glare coating', 'Lightweight aluminum frame'],
    reviews: [
      { id: 'r6', userName: 'Chris R.', rating: 4, date: '2024-03-14', comment: 'Very stylish and reduces sun glare effectively.' }
    ]
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    rating: 4.8,
    reviewCount: 114,
    description: 'Compact 4K vlogging and photography digital camera featuring fast auto-focus, optical image stabilization, and flip screen.',
    category: 'Electronics',
    brand: 'OpticSnap',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['24.2 MP CMOS Sensor', '4K Ultra HD Video recording', 'Optical SteadyShot Image Stabilization', 'Wi-Fi & Bluetooth instant transfer'],
    reviews: [
      { id: 'r7', userName: 'Elena V.', rating: 5, date: '2024-05-28', comment: 'Fantastic camera for beginner photographers and content creators.' }
    ]
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    rating: 4.4,
    reviewCount: 140,
    description: 'Ultra-soft 100% organic combed cotton crewneck t-shirt. Breathable, durable color fastness, and tailored relaxed fit.',
    category: 'Clothing',
    brand: 'ThreadCraft',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['100% Organic Cotton', 'Pre-shrunk fabric', 'Seamless neck band'],
    reviews: [
      { id: 'r8', userName: 'Mark L.', rating: 4, date: '2024-04-10', comment: 'Super soft material and holds shape after washing.' }
    ]
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    rating: 5.0,
    reviewCount: 320,
    description: 'Lorem ipsum dolor amet, conssectetur euisagend. Flagship smartphone featuring Super Retina XDR OLED display, advanced triple lens camera system, and ultra-fast 5G connectivity.',
    category: 'Electronics',
    brand: 'NovaTech',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['6.7" Super Retina OLED Screen', 'A16 Bionic 4nm Processor', '48MP Pro Camera System', 'All-day 24h battery life'],
    reviews: [
      { id: 'r9', userName: 'Michael R.', rating: 5, date: '2024-06-15', comment: 'Incredible performance, display clarity, and battery life!' },
      { id: 'r10', userName: 'Sophia H.', rating: 5, date: '2024-06-08', comment: 'Best smartphone I have owned.' }
    ],
    isFeatured: true
  },
  {
    id: '9',
    title: 'Modern Floor Lamp',
    price: 89,
    rating: 4.6,
    reviewCount: 45,
    description: 'Minimalist Scandinavian LED standing floor lamp with warm dimmable light control for modern home interiors.',
    category: 'Home',
    brand: 'NordicLiving',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['Dimmable warm LED lighting', 'Solid wood & brushed brass construction', 'Foot pedal touch switch'],
    reviews: [
      { id: 'r11', userName: 'Hannah W.', rating: 5, date: '2024-05-02', comment: 'Adds such cozy aesthetic vibes to my living room.' }
    ]
  },
  {
    id: '10',
    title: 'Ceramic Coffee Mug Set',
    price: 35,
    rating: 4.7,
    reviewCount: 58,
    description: 'Handcrafted matte glaze ceramic coffee mug set of 4. Microwave and dishwasher safe.',
    category: 'Home',
    brand: 'ArtisanClay',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['Set of 4 artisan mugs', '12 oz capacity', 'Dishwasher & Microwave safe'],
    reviews: [
      { id: 'r12', userName: 'Oliver B.', rating: 5, date: '2024-04-19', comment: 'Beautiful texture and feels comfortable in hand.' }
    ]
  }
];
