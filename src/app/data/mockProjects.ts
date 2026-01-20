import { Project } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Mobile Fitness Tracking App',
    description: 'Looking for a designer to create a modern fitness tracking app with clean UI/UX. The app should help users track workouts, nutrition, and progress over time.',
    designIdea: 'Inspired by Apple Health but with more social features. Think Strava meets MyFitnessPal with a minimalist design approach.',
    timeline: '4-6 weeks',
    priceRange: { min: 3000, max: 5000 },
    status: 'open',
    createdAt: '2026-01-19T10:00:00Z',
    category: 'Mobile App',
    tags: ['Fitness', 'Health', 'Social', 'Mobile']
  },
  {
    id: '2',
    title: 'E-commerce Dashboard Redesign',
    description: 'Need a complete redesign of our admin dashboard for our e-commerce platform. Must support analytics, inventory management, and order processing.',
    designIdea: 'Modern, data-driven dashboard with beautiful charts and intuitive navigation. Reference: Shopify admin.',
    timeline: '3-4 weeks',
    priceRange: { min: 2500, max: 4000 },
    status: 'open',
    createdAt: '2024-12-19T14:30:00Z',
    category: 'Website',
    tags: ['Dashboard', 'E-commerce', 'Analytics', 'Admin']
  },
  {
    id: '3',
    title: 'Recipe Sharing Social Platform',
    description: 'Creating a social platform where users can share, discover, and save recipes. Need clean, appetizing design that makes food look amazing.',
    designIdea: 'Pinterest-style grid layout with Instagram-like social features. Focus on beautiful food photography and easy recipe discovery.',
    timeline: '6-8 weeks',
    priceRange: { min: 5000, max: 8000 },
    status: 'open',
    createdAt: '2024-12-18T09:15:00Z',
    category: 'Website',
    tags: ['Social', 'Food', 'Community', 'Mobile', 'Web']
  },
  {
    id: '4',
    title: 'AI Writing Assistant Tool',
    description: 'Building an AI-powered writing assistant. Need UI design for the editor, sidebar tools, and document management system.',
    designIdea: 'Clean, distraction-free writing environment similar to Notion or Bear, but with AI suggestions elegantly integrated.',
    timeline: '4-5 weeks',
    priceRange: { min: 4000, max: 6000 },
    status: 'open',
    createdAt: '2024-12-17T16:45:00Z',
    category: 'Desktop App',
    tags: ['AI', 'Productivity', 'Writing', 'SaaS']
  },
  {
    id: '5',
    title: 'Real Estate Property Finder',
    description: 'Mobile app for finding and touring properties. Need design for property listings, map view, filters, and booking system.',
    designIdea: 'Modern, map-centric design with smooth animations. Think Zillow meets Airbnb with better UX.',
    timeline: '5-7 weeks',
    priceRange: { min: 4500, max: 7000 },
    status: 'open',
    createdAt: '2024-12-16T11:20:00Z',
    category: 'Mobile App',
    tags: ['Real Estate', 'Maps', 'Mobile', 'Booking']
  },
  {
    id: '6',
    title: 'Task Management Team App',
    description: 'Collaborative task management tool for remote teams. Need design for boards, tasks, calendar, and team communication.',
    designIdea: 'Combination of Trello boards and Asana timeline views. Clean, professional, and highly usable.',
    timeline: '6-8 weeks',
    priceRange: { min: 6000, max: 9000 },
    status: 'open',
    createdAt: '2024-12-15T13:00:00Z',
    category: 'Desktop App',
    tags: ['Productivity', 'Collaboration', 'Teams', 'SaaS']
  }
];
