import { Routes, Route } from "react-router-dom";
import NewsDetail from "../sections/NewsDetail";
import Home from "../sections/Home";
import About from "../sections/About";
import PlazaDetail from "../sections/PlazaDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/plaza/:id" element={<PlazaDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
