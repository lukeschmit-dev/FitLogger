// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define Header component
const Header = () => {
  return (
    <header>
      <h1>My Fitness App</h1>
    </header>
  );
};

// Define Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Fitness App</p>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Results" component={Results} />
          <Route path="/Settings" component={Settings} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
