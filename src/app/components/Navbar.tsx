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
    <nav className="bg-white/60 backdrop-blur-lg top-0 left-0 right-0 z-50 border-b border-gray-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-0">
          <Link to="/" className="flex items-center shrink-0 -ml-4">
            <img 
              src="/nosst.svg" 
              alt="Nosst" 
              className="h-16 w-50 object-contain rounded-lg"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <form onSubmit={handleSearch} className="w-full">
              <div className="w-full max-w-none bg-white/80 backdrop-blur-md border-[0.5px] border-gray-200 rounded-full px-0 py-0 flex items-center">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 px-6"
                />
                <div className="flex items-center space-x-3 bg-slate-800 rounded-r-full px-4 py-3">
                  <Search 
                    className="w-5 h-5 text-white cursor-pointer hover:text-gray-200 transition-colors" 
                    onClick={handleSearch}
                  />
                </div>
              </div>
            </form>
          </div>
          
          <div className="flex items-center space-x-3 shrink-0 pl-8 -mr-10">
            <Link 
              to="/browse" 
              className={`flex items-center space-x-1 px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all ${
                isActive('/browse') 
                  ? 'ring-2 ring-slate-600' 
                  : ''
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Browse Projects</span>
            </Link>

            <Link 
              to="/create" 
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post Project</span>
            </Link>
            
            <button className="flex items-center space-x-2 px-4 py-2 border border-slate-800 text-slate-800 rounded-full hover:bg-slate-50 transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}