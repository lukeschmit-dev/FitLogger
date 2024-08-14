// src/App.js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import DailyActions from "./components/DailyActions";
// import EnterNewMax from "./components/EnterNewMax";
// import TodaysLift from "./components/TodaysLift";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
