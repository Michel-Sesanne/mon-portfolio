import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Error from './pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/mon-portfolio/" element={<Home />} />
           <Route path="/mon-portfolio/about" element={<About />} />
           <Route path="/mon-portfolio/project/:id" element={<Project />} />
           <Route path="/mon-portfolio/error" element={<Error />} />
        </Routes>
    )
}