import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Skills from './component/Skills';

export default function Menu() {
  return (
    <BrowserRouter>
      <div className="menu-container">
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
          >
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
