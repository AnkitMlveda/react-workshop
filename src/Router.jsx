import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<h2>Not Found!</h2>} />
    </Routes>
  );
}