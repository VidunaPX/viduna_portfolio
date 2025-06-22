// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
