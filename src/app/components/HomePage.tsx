import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, TrendingUp, Clock, Award } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fadeIn">
            <h1 className="text-7xl sm:text-8xl text-black font-bold">
              Your Ideas Can Become Reality.
            </h1>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900 font-bold">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, fast, and secure project collaboration</p>
        </div>

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

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900 font-bold">Why Choose nosst?</h2>
            <p className="text-xl text-gray-600">The platform built for modern app development</p>
          </div>

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

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900 font-bold">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Real feedback from real projects</p>
        </div>

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

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl mb-4 font-bold">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of clients and designers already using nosst
            </p>
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