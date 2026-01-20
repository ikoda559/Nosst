// BrowseProjects.tsx
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';
import { ProjectCard } from './ProjectCard';

export function BrowseProjects() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedTimeline, setSelectedTimeline] = useState('All');
  const [selectedCreated, setSelectedCreated] = useState('All');

  const platforms = ['All', 'Website', 'Mobile App', 'Desktop App'];
  const priceRanges = ['All', 'Under $3k', '$3k - $5k', '$5k - $7k', 'Over $7k'];
  const timelines = ['All', 'Under 4 weeks', '4-6 weeks', '6-8 weeks', 'Over 8 weeks'];
  const createdDates = ['All', 'Last 24 hours', 'Last 3 days', 'Last week', 'Last month'];

  // Helper function to check if project matches price filter
  const matchesPriceFilter = (project, filter) => {
    if (filter === 'All') return true;
    const maxPrice = project.priceRange.max;
    
    if (filter === 'Under $3k') return maxPrice < 3000;
    if (filter === '$3k - $5k') return maxPrice >= 3000 && maxPrice <= 5000;
    if (filter === '$5k - $7k') return maxPrice > 5000 && maxPrice <= 7000;
    if (filter === 'Over $7k') return maxPrice > 7000;
    return true;
  };

  // Helper function to check if project matches timeline filter
  const matchesTimelineFilter = (project, filter) => {
    if (filter === 'All') return true;
    const timeline = project.timeline.toLowerCase();
    
    if (filter === 'Under 4 weeks') return timeline.includes('3-4');
    if (filter === '4-6 weeks') return timeline.includes('4-6') || timeline.includes('4-5') || timeline.includes('5-7');
    if (filter === '6-8 weeks') return timeline.includes('6-8');
    if (filter === 'Over 8 weeks') return parseInt(timeline) > 8;
    return true;
  };

  // Helper function to check if project matches created date filter
  const matchesCreatedFilter = (project, filter) => {
    if (filter === 'All') return true;
    const projectDate = new Date(project.createdAt);
    const now = new Date();
    const diffInMs = now - projectDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInDays = diffInHours / 24;
    
    if (filter === 'Last 24 hours') return diffInHours <= 24;
    if (filter === 'Last 3 days') return diffInDays <= 3;
    if (filter === 'Last week') return diffInDays <= 7;
    if (filter === 'Last month') return diffInDays <= 30;
    return true;
  };

  const filteredProjects = mockProjects.filter(project => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesPlatform = selectedPlatform === 'All' || project.category === selectedPlatform;
    const matchesPrice = matchesPriceFilter(project, selectedPrice);
    const matchesTimeline = matchesTimelineFilter(project, selectedTimeline);
    const matchesCreated = matchesCreatedFilter(project, selectedCreated);
    
    return matchesSearch && matchesPlatform && matchesPrice && matchesTimeline && matchesCreated;
  });

  // Dropdown component
  function FilterDropdown({ label, value, options, onChange }) {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dynamic heading based on search */}
      <div className="mb-8">
        {searchQuery ? (
          <h1 className="text-4xl mb-2 text-gray-900">
            Results for "{searchQuery}"
          </h1>
        ) : (
          <h1 className="text-4xl mb-2 text-gray-900 text-center">Browse Projects</h1>
        )}
      </div>

      {/* Filter Dropdowns */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FilterDropdown
          label="Platform"
          value={selectedPlatform}
          options={platforms}
          onChange={setSelectedPlatform}
        />
        <FilterDropdown
          label="Price Range"
          value={selectedPrice}
          options={priceRanges}
          onChange={setSelectedPrice}
        />
        <FilterDropdown
          label="Timeline"
          value={selectedTimeline}
          options={timelines}
          onChange={setSelectedTimeline}
        />
        <FilterDropdown
          label="Created"
          value={selectedCreated}
          options={createdDates}
          onChange={setSelectedCreated}
        />
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found matching your criteria</p>
        </div>
      )}
    </div>
  );
}