import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { Home, Quote } from "lucide-react";
import About from "./pages/about";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import SocialProof from "./pages/socialproof";
import TechStack from "./pages/techstack";

function App() {
  return (
    <>
      <Header />
      <div className="mt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/socialproof" element={<SocialProof />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
