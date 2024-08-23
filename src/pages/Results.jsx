import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MyWorkouts } from "../components/context/MyWorkouts";
// import { WorkoutsByDay } from "../components/context/WorkoutsByDay";

const Results = () => {
  return (
    <div className="ResultsPage">
      <Navbar/>
      <h1>Results page</h1>
      {/* <WorkoutsByDay/> */}
      <MyWorkouts/>
      <Footer/>
    </div>
  );
};
export default Results;