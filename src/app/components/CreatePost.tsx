import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

export function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    designIdea: '',
    timeline: '',
    minPrice: '',
    maxPrice: '',
    category: 'Web App'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to browse page
    // In real implementation, this would save to database
    alert('Project posted successfully! (This is a demo - in production, this would save to a database)');
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl mb-2 text-gray-900 font-bold">Post Your Project</h1>
          <p className="text-gray-600 mb-8">
            Tell designers about your application idea and find the perfect match
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block mb-2 text-gray-900 font-semibold">
                Project Title *
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Mobile Fitness Tracking App"
              />
            </div>

            <div>
              <label htmlFor="category" className="block mb-2 text-gray-900 font-semibold">
                Category *
              </label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Web App</option>
                <option>Mobile App</option>
                <option>Web & Mobile</option>
                <option>Desktop App</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-gray-900 font-semibold">
                Project Description *
              </label>
              <textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe what your application does and what you are looking for..."
              />
            </div>

            <div>
              <label htmlFor="designIdea" className="block mb-2 text-gray-900 font-semibold">
                Design Ideas & References *
              </label>
              <textarea
                id="designIdea"
                required
                value={formData.designIdea}
                onChange={(e) => setFormData({ ...formData, designIdea: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Share your design vision, style preferences, or reference apps..."
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block mb-2 text-gray-900 font-semibold">
                Expected Timeline *
              </label>
              <input
                type="text"
                id="timeline"
                required
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 4-6 weeks"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="minPrice" className="block mb-2 text-gray-900 font-semibold">
                  Minimum Budget (USD) *
                </label>
                <input
                  type="number"
                  id="minPrice"
                  required
                  value={formData.minPrice}
                  onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="3000"
                />
              </div>

              <div>
                <label htmlFor="maxPrice" className="block mb-2 text-gray-900 font-semibold">
                  Maximum Budget (USD) *
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  required
                  value={formData.maxPrice}
                  onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5000"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <Send className="w-5 h-5" />
                <span>Post Project</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}