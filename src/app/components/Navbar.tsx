import { Link, useLocation } from 'react-router-dom';
import { Search, PlusCircle, LogIn } from 'lucide-react';
import { NosstLogo } from './NosstLogo';

export function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      {/* Skinnier/Shorter Container */}
      <div className="bg-gradient-to-r from-gray-200/80 via-slate-100/90 to-gray-200/80 backdrop-blur-2xl border border-gray-300/50 shadow-xl shadow-gray-300/30 p-0.5 pointer-events-auto max-w-md w-[80vw] sm:w-[450px] rounded-xl">
        <div className="flex items-center px-1.5 py-1">
          {/* Nosst Logo - LEFT */}
          <div className="pl-2 pr-1.5 flex-shrink-0">
            <Link to="/" className="flex items-center">
              <NosstLogo className="text-base" />
            </Link>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex-1 flex items-center justify-between px-1">
            {/* Browse - CENTER */}
            <Link 
              to="/browse" 
              className={`flex items-center space-x-1 px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex-grow text-center ${
                isActive('/browse')
                  ? 'bg-gradient-to-r from-emerald-500/15 to-emerald-600/15 text-emerald-800 backdrop-blur-sm shadow-sm hover:shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/70 hover:shadow-sm'
              }`}
            >
              <Search className="w-3 h-3 mx-auto" />
              <span>Browse Projects</span>
            </Link>
            
            {/* Post + Login - RIGHT */}
            <div className="flex items-center space-x-0.5">
              {/* Post */}
              <Link 
                to="/create"
                className="flex items-center space-x-1 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold shadow-md shadow-blue-400/25 hover:shadow-lg hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex-shrink-0"
              >
                <PlusCircle className="w-3 h-3" />
                <span>Post</span>
              </Link>
              
              {/* Login */}
              <button className="flex items-center space-x-1 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ml-0.5">
                <LogIn className="w-3 h-3" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
