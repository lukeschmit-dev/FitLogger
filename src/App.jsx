
import {
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import Planner from "./pages/Planner"
import { MeasurementProvider } from "./context/Measurements"

function App() {
  return (
    <MeasurementProvider>
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Planner" element={<Planner />} />
        </Routes>
      </div>
    </MeasurementProvider>
  );
}

export default App;

