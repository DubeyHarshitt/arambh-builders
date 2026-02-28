import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Property from "./Pages/Property";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/property" element={<Property/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact />} />
     <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default Routing