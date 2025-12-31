import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import { ProjectCard } from './ProjectCard';
import { Search, Filter } from 'lucide-react';

export function BrowseProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', 'Mobile App', 'Web & Mobile', 'Desktop App'];

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2 text-gray-900">Browse Projects</h1>
        <p className="text-xl text-gray-600">Find projects that match your expertise</p>
      </div>

      {/* Search Bar - Centered and Prominent */}
      <div className="mb-8 max-w-4xl mx-auto">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by title or description..."
            className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex items-center justify-center space-x-2 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
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