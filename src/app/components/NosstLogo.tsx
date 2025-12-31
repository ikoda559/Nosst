import { Zap } from 'lucide-react';

export function NosstLogo({ className = "text-2xl font-bold" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Icon circle */}
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center p-1">
        <Zap className="w-5 h-5 text-white" />
      </div>
      {/* Gradient text */}
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        nosst
      </span>
    </div>
  );
}
