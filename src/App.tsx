import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const Themes = React.lazy(() => import("./components/Themes/Themes"));
const Theme = React.lazy(() => import("./components/Theme/Theme"));
const Sale = React.lazy(() => import ("./components/Sale/Sale"));
const Product = React.lazy(() => import("./components/Product/Product"));

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="themes" element={<Themes />} />
          <Route path="themes/:themeId" element={<Theme />} />
          <Route path="sale" element={<Sale />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;