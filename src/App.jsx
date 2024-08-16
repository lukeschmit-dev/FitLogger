
import {
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
    </div>
  );
}

export default App;

