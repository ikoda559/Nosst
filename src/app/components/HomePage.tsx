import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, TrendingUp, Clock, Award, Sparkles, Palette, Code, Layout, Smartphone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HomePage() {
  // Track scroll position for icon animation
  const [scrollY, setScrollY] = useState(0);
  // Track which icon is currently displayed (for rotation effect)
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  // Calculate scroll progress from 0 to 1 (complete at 400px scroll)
  const scrollProgress = Math.min(scrollY / 400, 1);

  // Defines the icons that will float and spread in a circle
  const floatingIcons = [
    { Icon: Palette, color: 'text-pink-500' },
    { Icon: Code, color: 'text-blue-500' },
    { Icon: Layout, color: 'text-purple-500' },
    { Icon: Smartphone, color: 'text-green-500' },
    { Icon: Globe, color: 'text-yellow-500' },
    { Icon: Sparkles, color: 'text-indigo-500' },
  ];

  // Listen to scroll events and update scrollY state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate through icons every 1600ms when centered
  useEffect(() => {
    if (scrollProgress < 0.1) {
      const interval = setInterval(() => {
        setCurrentIconIndex((prev) => (prev + 1) % floatingIcons.length);
      }, 1850); // Icon change speed
      
      return () => clearInterval(interval);
    }
  }, [scrollProgress, floatingIcons.length]);

  // Calculate each icon's position in a circular formation
  const getIconPosition = (index: number, total: number) => {
    // Calculate angle for even distribution around circle (starts from top)
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    // Radius grows from 0 to 135px based on scroll progress
    const radius = 135 * scrollProgress;
    // Calculate x and y coordinates using trigonometry
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    // Icons scale from 0.5 to 1 as they spread
    const scale = 0.5 + (scrollProgress * 0.5);
    // Icons become more opaque as they spread (0.3 to 1)
    const opacity = 0.4 + (scrollProgress * 0.6);

    return {
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      opacity,
    };
  };

  // Interpolate color from pure black to pure white based on scroll
  const getHeadingColor = () => {
    const v = Math.round(255 * scrollProgress);
    return `rgb(${v}, ${v}, ${v})`;
  };

  // Interpolate tagline color from light gray to pure white as user scrolls
  const getTaglineColor = () => {
    // RGB values: gray-200 (229,231,235) to white (255,255,255)
    const r = Math.round(229 + (255 - 229) * scrollProgress);
    const g = Math.round(231 + (255 - 231) * scrollProgress);
    const b = Math.round(235 + (255 - 235) * scrollProgress);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with floating icons */}
      <div className="bg-gradient-to-b from-white to-slate-800 min-h-screen flex items-start justify-center pt-32 relative overflow-hidden">
        {/* Main heading and tagline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative z-10">
          <div className="text-center animate-fadeIn">
            {/* Custom styles for Playfair Display font and fade-in animation */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-fadeIn {
                  animation: fadeIn 1s ease-out;
                }
              `}
            </style>
            {/* Main headline with custom serif font */}
            <h1 
              className="text-7xl sm:text-8xl font-normal"
              style={{ 
                fontFamily: '"Playfair Display", Georgia, serif',
                color: getHeadingColor()
              }}
            >
              Your Ideas Can Become Reality.
            </h1>
            {/* Tagline - gray, larger text, spaced below headline */}
            <p className="text-xl text-white mt-16">
              Simply post what application you want created, then a developer will take it from there...
            </p>

            {/* Floating Icons Container - positioned below text */}
            <div className="relative flex items-center justify-center pointer-events-none h-64 mt-28">
              {floatingIcons.map((item, index) => {
                const { Icon, color } = item;
                const position = getIconPosition(index, floatingIcons.length);
                const isCenter = scrollProgress < 0.1;
                const isCenterIcon = index === currentIconIndex;
                
                // For center state: only show the current rotating icon
                // For spread state: show all icons
                const shouldRender = !isCenter || isCenterIcon;
                
                // Fade out non-center icons when returning to center
                const iconOpacity = isCenter && !isCenterIcon ? 0 : position.opacity;

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      transform: position.transform,
                      opacity: shouldRender ? iconOpacity : 0,
                      transition: isCenter 
                        ? 'opacity 0.3s ease-out' // Only transition opacity when centering
                        : 'all 0.3s ease-out', // Transition everything when spreading
                      pointerEvents: 'none',
                    }}
                  >
                    <div className={`
                      ${isCenter ? 'w-42 h-42' : 'w-14 h-14'} 
                      ${isCenter ? 'bg-gradient-to-br from-gray-400 via-white to-gray-200' : 'bg-white'}
                      rounded-2xl 
                      shadow-lg
                      flex items-center justify-center 
                      ${color} 
                      border border-gray-100
                      ${isCenter && isCenterIcon ? 'animate-pulse' : ''}
                    `}>
                      <Icon className={`${isCenter ? 'w-24 h-24' : 'w-9 h-9'}`} strokeWidth={1.1} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900 font-bold">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, fast, and secure project collaboration</p>
        </div>

        {/* 3-column grid on medium+ screens */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 font-semibold">Post Your Idea</h3>
            <p className="text-gray-600">
              Describe your application idea, upload designs, set your timeline and budget range. 
              Make it easy for designers to understand your vision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 font-semibold">Find Perfect Matches</h3>
            <p className="text-gray-600">
              Designers browse available projects and reach out if they are interested. 
              Review their portfolios and choose who you would like to work with.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 font-semibold">Collaborate & Deliver</h3>
            <p className="text-gray-600">
              Work together to bring your idea to life. Track progress, share feedback, 
              and get your application designed within your timeline.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section*/}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900 font-bold">Why Choose nosst?</h2>
            <p className="text-xl text-gray-600">The platform built for modern app development</p>
          </div>

          {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Quality Talent Pool</h3>
              <p className="text-gray-600 text-sm">
                Access to vetted designers with proven track records in app design
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">
                Get matched with designers quickly and start your project within days
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Clear budget ranges, no hidden fees, pay only when you are satisfied
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                Your project data and payments are protected with enterprise-grade security
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">
                Our team is here to help you every step of the way
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-semibold">Modern Workflow</h3>
              <p className="text-gray-600 text-sm">
                Streamlined tools for communication, feedback, and project management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 3 Fake reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900 font-bold">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Real feedback from real projects</p>
        </div>

        {/* 3-column grid on medium+ screens */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-500">Startup Founder</div>
              </div>
            </div>
            <p className="text-gray-600">
              "Found an amazing designer for my fitness app in just 2 days. The quality exceeded my expectations!"
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                <div className="text-sm text-gray-500">Product Manager</div>
              </div>
            </div>
            <p className="text-gray-600">
              "The platform made it so easy to find the right talent. Communication was smooth throughout the project."
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Emily Zhang</div>
                <div className="text-sm text-gray-500">Entrepreneur</div>
              </div>
            </div>
            <p className="text-gray-600">
              "Best decision for my SaaS project. The designer understood my vision perfectly and delivered on time."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section - Call to action with dark gradient background */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl mb-4 font-bold">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of clients and designers already using nosst
            </p>
            {/* Primary CTA button linking to project creation */}
            <Link 
              to="/create" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors space-x-2 font-semibold"
            >
              <span>Post Your First Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}