// Navbar.tsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PlusCircle, Search, LayoutGrid, Home, LogIn } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  
  const isActive = (path: string) => location.pathname === path;
  
  // Handle search submission
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (searchInput.trim()) {
      // Navigate to browse page with search query parameter
      navigate(`/browse?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <nav className="bg-white top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 -ml-25">
            <img 
              src="/nosst.svg" 
              alt="Nosst" 
              className="w-58 h-20 object-contain rounded-lg"
            />
          </Link>
        
          <div className="absolute left-[30%] transform -translate-x-1/4 w-full max-w-xl px-4">
            <form onSubmit={handleSearch}>
              <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow- px-6 py-3 flex items-center space-x-3">
                <Search 
                  className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" 
                  onClick={handleSearch}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </form>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/browse" 
              className={`flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm ${
                isActive('/browse') 
                  ? 'ring-2 ring-blue-400/50 shadow-md shadow-blue-300/30' 
                  : ''
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Browse Projects</span>
            </Link>

            <Link 
              to="/create" 
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
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