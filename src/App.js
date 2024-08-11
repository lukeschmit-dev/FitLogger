// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Results from "./pages/results";
import Settings from "./pages/settings";
import Header from "./components/header";
import Footer from "./components/footer";

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
