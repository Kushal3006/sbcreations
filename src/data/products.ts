import { Product } from '../types';

export const products: Product[] = [
  // Resin Frames
  {
    id: 'rf1',
    name: 'Wedding Ocean Wave Frame',
    price: 49.99,
    description: 'Beautiful resin frame with ocean wave pattern, perfect for wedding memories.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/01.jpg' },
    ],
    category: 'resin-frames',
    resinFrameType: 'navkar',
    isCustomizable: false,
    tags: ['frame', 'ocean', 'wedding']
  },
  {
    id: 'rf2',
    name: 'Special Anniversary Floral Frame',
    price: 59.99,
    description: 'Elegant resin frame with preserved real flowers for anniversaries.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/04.jpg' },
    ],
    category: 'resin-frames',
    resinFrameType: 'anniversary',
    isCustomizable: false,
    tags: ['frame', 'floral', 'anniversary']
  },
  {
    id: 'rf2',
    name: 'Special Anniversary Floral Frame',
    price: 59.99,
    description: 'Elegant resin frame with preserved real flowers for anniversaries.',
    media: [
      { type: 'video', src: '/assets/Resin Frames/03.mp4' }
    ],
    category: 'resin-frames',
    resinFrameType: 'navkar',
    isCustomizable: false,
    tags: ['frame', 'floral', 'anniversary']
  },
  {
    id: 'rf3',
    name: 'Navkar Mantra Frame',
    price: 54.99,
    description: 'Classic resin frame featuring Navkar Mantra for spiritual decor.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/06.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'wedding',
    isCustomizable: false,
    tags: ['frame', 'navkar', 'spiritual']
  },
  {
    id: 'rf4',
    name: 'Modern Art Frame',
    price: 64.99,
    description: 'Modern resin frame with abstract art design.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/14.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'wedding',
    isCustomizable: false,
    tags: ['frame', 'modern', 'abstract']
  },
  {
    id: 'rf5',
    name: 'Golden Touch Frame',
    price: 69.99,
    description: 'Frame with golden resin accents for a luxurious look.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/07.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'wedding',
    isCustomizable: false,
    tags: ['frame', 'gold', 'luxury']
  },
  {
    id: 'rf6',
    name: 'Minimalist Resin Frame',
    price: 44.99,
    description: 'Minimalist resin frame for a clean, modern aesthetic.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/08.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'wedding',
    isCustomizable: false,
    tags: ['frame', 'minimalist', 'modern']
  },
  {
    id: 'rf7',
    name: 'Nature Inspired Frame',
    price: 57.99,
    description: 'Frame inspired by nature, featuring earthy resin tones.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/09.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'navkar',
    isCustomizable: false,
    tags: ['frame', 'nature', 'earth']
  },
  {
    id: 'rf8',
    name: 'Luxury Resin Frame',
    price: 74.99,
    description: 'Premium resin frame with intricate detailing.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/10.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'anniversary',
    isCustomizable: false,
    tags: ['frame', 'luxury', 'detailed']
  },
  {
    id: 'rf10',
    name: 'Artisan Resin Frame',
    price: 89.99,
    description: 'Handcrafted artisan resin frame, unique in every way.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/12.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'navkar',
    isCustomizable: false,
    tags: ['frame', 'artisan', 'handmade']
  },
  
  {
    id: 'rf12',
    name: 'Elegant Blue Frame',
    price: 59.99,
    description: 'Elegant blue resin frame for a touch of color.',
    media: [
       { type: 'video', src: '/assets/Resin Frames/02.mp4' },
    ],
    category: 'resin-frames',
     resinFrameType: 'navkar',
    isCustomizable: false,
    tags: ['frame', 'blue', 'elegant']
  },
  {
    id: 'rf13',
    name: 'Elegant Blue Frame',
    price: 59.99,
    description: 'Elegant blue resin frame for a touch of color.',
    media: [
       { type: 'video', src: '/assets/Resin Frames/03.mp4' }
    ],
    category: 'resin-frames',
    isCustomizable: false,
    tags: ['frame', 'blue', 'elegant']
  },
  {
    id: 'rf14',
    name: 'Custom Photo Frame',
    price: 84.99,
    description: 'Personalized resin frame for your cherished photos. Perfect for gifting and memories.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/11.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'custom-photo',
    isCustomizable: true,
    tags: ['frame', 'custom', 'photo', 'personalized']
  },
  {
    id: 'rf11',
    name: 'Elegant Blue Frame',
    price: 59.99,
    description: 'Elegant blue resin frame for a touch of color.',
    media: [
      { type: 'image', src: '/assets/Resin Frames/13.jpg' }
    ],
    category: 'resin-frames',
    resinFrameType: 'company-name',
    isCustomizable: false,
    tags: ['frame', 'blue', 'elegant']
  },

  // Keychains
  {
    id: 'k1',
    name: 'Personalized Name Keychain',
    price: 19.99,
    description: 'Custom name keychain with glitter and color options.',
    image: '/assets/p3.jpg',
    category: 'keychains',
    isCustomizable: true,
    tags: ['keychain', 'personalized', 'gift']
  },
  {
    id: 'k2',
    name: 'Ocean Wave Keychain',
    price: 15.99,
    description: 'Beautiful ocean-inspired keychain with blue and white waves.',
    image: '/assets/p4.jpg',
    category: 'keychains',
    isCustomizable: true,
    tags: ['keychain', 'ocean', 'gift']
  },

  // Gift Hampers
  {
    id: 'gh1',
    name: 'Deluxe Resin Gift Set',
    price: 149.99,
    description: 'Complete gift set including frame, keychain, and card.',
    image: '/assets/p1.jpg',
    category: 'gift-hampers',
    isCustomizable: true,
    tags: ['gift-set', 'premium', 'bundle']
  },
  {
    id: 'gh2',
    name: 'Couples Gift Hamper',
    price: 99.99,
    description: 'Perfect gift set for couples with matching keychains and frame.',
    image: '/assets/p2.jpg',
    category: 'gift-hampers',
    isCustomizable: true,
    tags: ['gift-set', 'couples', 'bundle']
  },

  // Cards
  {
    id: 'c1',
    name: 'Resin Anniversary Card',
    price: 24.99,
    description: 'Handmade anniversary card with resin embellishments.',
    image: '/assets/p3.jpg',
    category: 'cards',
    isCustomizable: true,
    tags: ['card', 'anniversary', 'greeting']
  },
  {
    id: 'c2',
    name: 'Birthday Celebration Card',
    price: 22.99,
    description: 'Special birthday card with resin decorations and custom message.',
    image: '/assets/p4.jpg',
    category: 'cards',
    isCustomizable: true,
    tags: ['card', 'birthday', 'greeting']
  },

  // Phone Cases
  {
    id: 'pc1',
    name: 'Marble Effect Phone Case',
    price: 34.99,
    description: 'Elegant marble-look resin phone case, available for various models.',
    image: '/assets/p1.jpg',
    category: 'phone-cases',
    isCustomizable: true,
    tags: ['phone-case', 'marble', 'protection']
  },
  {
    id: 'pc2',
    name: 'Ocean Wave Phone Case',
    price: 39.99,
    description: 'Beautiful ocean-inspired phone case with wave pattern.',
    image: '/assets/p2.jpg',
    category: 'phone-cases',
    isCustomizable: false,
    tags: ['phone-case', 'ocean', 'protection']
  },

  // Wall Clocks
  {
    id: 'wc1',
    name: 'Varmala Preservation Wall Clock',
    price: 3699,
    description: 'You choose to preserve your wedding flowers in a beautiful wall clock. A perfect keepsake for your special day.',
    image: '/assets/Wall Clocks/01.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'classic', 'roman'],
    sizeInches: 14
  },
  {
    id: 'wc2',
    name: 'Wedding Flower Preservation Wall Clock',
    price: 3599,
    description: 'Transform your wedding flowers into a timeless wall clock. A perfect keepsake for your special day.',
    image: '/assets/Wall Clocks/02.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'modern', 'minimalist'],
    sizeInches: 14
  },
  {
    id: 'wc3',
    name: 'Mini Resin Wall Clock',
    price: 2689,
    description: 'Handcrafted resin wall clock with ocean blue waves, perfect for beach lovers.',
    image: '/assets/Wall Clocks/03.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'ocean', 'resin'],
    sizeInches: 11
  },
  {
    id: 'wc4',
    name: 'Customised Photo Wall Clock',
    price: 3599,
    description: 'Luxurious wall clock with golden marble resin art, adds a touch of elegance to any room.',
    image: '/assets/Wall Clocks/04.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'marble', 'gold'],
    sizeInches: 14
  },
  {
    id: 'wc5',
    name: 'Minimalist Wall Clock',
    price: 3399,
    description: 'Beautiful wall clock featuring real pressed flowers in resin, perfect for nature lovers.',
    image: '/assets/Wall Clocks/05.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'floral', 'nature'],
    sizeInches: 14
  },
  {
    id: 'wc6',
    name: 'Marble Effect Resin Wall Clock',
    price: 4599,
    description: 'Unique abstract art wall clock with vibrant resin colors.',
    image: '/assets/Wall Clocks/06.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'abstract', 'art'],
    sizeInches: 16
  },
  {
    id: 'wc7',
    name: 'Modern Brown Wall Clock',
    price: 2999,
    description: 'Luxurious wall clock with golden marble resin art, adds a touch of elegance to any room.',
    image: '/assets/Wall Clocks/07.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'vintage', 'map'],
    sizeInches: 12
  },
  // {
  //   id: 'wc8',
  //   name: 'Galaxy Resin Wall Clock',
  //   price: 3699,
  //   description: 'Stunning galaxy-inspired resin wall clock with shimmering details.',
  //   image: '/assets/Wall Clocks/08.jpg',
  //   category: 'wallClocks',
  //   isCustomizable: true,
  //   tags: ['wall-clock', 'galaxy', 'space'],
  //   sizeInches: 14
  // },
  {
    id: 'wc9',
    name: 'Subtle Wall Clock',
    price: 4499,
    description: 'Warm sunset colors in resin art make this wall clock a cozy addition to any space.',
    image: '/assets/Wall Clocks/09.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'sunset', 'warm'],
    sizeInches: 16
  },
  {
    id: 'wc10',
    name: 'Company Logo Wall Clock',
    price: 2899,
    description: 'Chic black and white resin wall clock for a modern, stylish look.',
    image: '/assets/Wall Clocks/10.jpg',
    category: 'wallClocks',
    isCustomizable: false,
    tags: ['wall-clock', 'monochrome', 'chic'],
    sizeInches: 12
  }
];