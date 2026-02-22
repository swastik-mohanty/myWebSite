import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/curriculum/:trackId" element={<CurriculumPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
