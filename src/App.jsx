
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
import { MeasurementProvider } from "../src/components/context/Measurements"
import { ListProvider } from "./components/context/ListContext";
import { WorkoutsByDayProvider } from "./components/context/WorkoutsByDayContext";

function App() {
  return (
    <MeasurementProvider>
      <ListProvider>
      <WorkoutsByDayProvider>
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Results" element={<Results />} />
          {/* <Route path="/Settings" element={<Settings />} /> */}
          <Route path="/Planner" element={<Planner />} />
        </Routes>
      </div>
      </WorkoutsByDayProvider>
    </ListProvider>
    </MeasurementProvider>
  );
}

export default App;

