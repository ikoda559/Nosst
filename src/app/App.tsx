import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { CreatePost } from './components/CreatePost';
import { BrowseProjects } from './components/BrowseProjects';
import { ProjectDetail } from './components/ProjectDetail';
import { Navbar } from './components/Navbar';

// Main app router - add new routes here when creating new pages
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/browse" element={<BrowseProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
