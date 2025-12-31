import { Link, useLocation } from 'react-router-dom';
import { PlusCircle, Search, Home, LogIn } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 -ml-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-2xl font-bold text-gray-900">nosst</span>
          </Link>
          
          {/* Centered Search Bar Style */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg px-6 py-3 flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/browse" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/browse') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Browse Projects</span>
            </Link>
            
            <Link 
              to="/create" 
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post Project</span>
            </Link>
            
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}