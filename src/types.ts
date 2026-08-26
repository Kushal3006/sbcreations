export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // Optional: for showing strikethrough price
  description: string;
  image?: string; // deprecated, use media
  media?: Array<{ type: 'image' | 'video', src: string }>;
  category: 'resin-frames' | 'keychains' | 'gift-hampers' | 'cards' | 'phone-cases' | 'wallClocks';
  isCustomizable: boolean;
  tags: string[];
  sizeInches?: number; // Add size in inches for wall clocks
  resinFrameType?: 'wedding' | 'anniversary' | 'navkar' | 'custom-photo' | 'company-name' | 'Photo' | 'Mantra'; // Add for resin frames subcategories
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  image: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}