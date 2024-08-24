import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./product/ProductPage";
import ShopPage from "./product/ShopPage";
import ServicesPage from "./pages/ServicesPage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/shoppage" element={<ShopPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
