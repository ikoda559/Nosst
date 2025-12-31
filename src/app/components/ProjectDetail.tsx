import { useParams, useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import { ArrowLeft, Clock, DollarSign, Tag, Calendar, Send } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mockProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500">Project not found</p>
      </div>
    );
  }

  const handleApply = () => {
    alert('Application submitted! (This is a demo - in production, this would send a proposal)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to projects</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl mb-3 text-gray-900">{project.title}</h1>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  {project.status}
                </span>
                {project.category && (
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                    {project.category}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Budget</p>
                <p className="text-gray-900">
                  ${project.priceRange.min.toLocaleString()} - ${project.priceRange.max.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Timeline</p>
                <p className="text-gray-900">{project.timeline}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Posted</p>
                <p className="text-gray-900">
                  {formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          <div>
            <h2 className="text-xl mb-3 text-gray-900">Project Description</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-xl mb-3 text-gray-900">Design Ideas & References</h2>
            <p className="text-gray-600 leading-relaxed">{project.designIdea}</p>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div>
              <h2 className="text-xl mb-3 text-gray-900">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg">
                    <Tag className="w-4 h-4 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleApply}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Apply for This Project</span>
          </button>
          <p className="mt-4 text-sm text-gray-500">
            By applying, you'll be able to send a proposal to the project owner with your portfolio and pricing.
          </p>
        </div>
      </div>
    </div>
  );
}
