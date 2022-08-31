import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation"
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Themes } from "./components/Themes/Themes";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="themes" element={<Themes />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;