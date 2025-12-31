export interface Project {
  id: string;
  title: string;
  description: string;
  designIdea: string;
  timeline: string;
  priceRange: {
    min: number;
    max: number;
  };
  status: 'open' | 'in-progress' | 'completed';
  createdAt: string;
  category?: string;
  tags?: string[];
}
