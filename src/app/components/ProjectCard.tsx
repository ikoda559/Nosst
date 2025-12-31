import { Project } from '../types';
import { Clock, DollarSign, Tag } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl text-gray-900 line-clamp-2">{project.title}</h3>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex-shrink-0 ml-2">
            {project.status}
          </span>
        </div>
        {project.category && (
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
            {project.category}
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span className="text-sm">
            ${project.priceRange.min.toLocaleString()} - ${project.priceRange.max.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.timeline}</span>
        </div>
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Posted {formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}
