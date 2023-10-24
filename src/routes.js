import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Error from './pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/Project/:id" element={<Project />} />
           <Route path="/error" element={<Error />} />
        </Routes>
    )
}