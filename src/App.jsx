import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componetes/Navbar";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Footer from "./componetes/Footer";
import { ProductProvider } from "./Contect/Products/ProductsContext";

const App = () => {
  return (
  <ProductProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
      <Footer />
    </Router>
  </ProductProvider>
  );
};

export default App;
