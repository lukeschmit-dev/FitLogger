// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
