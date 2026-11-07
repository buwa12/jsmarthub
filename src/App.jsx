import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Solutions from "./Pages/Solutions";
import Academy from "./Pages/Academy";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
