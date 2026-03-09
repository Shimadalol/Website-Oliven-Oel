export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  size: string;
  image: string;
  category: 'canister' | 'bottle' | 'set' | 'bundle';
  isSubscriptionOnly?: boolean;
  stockLevel?: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}
