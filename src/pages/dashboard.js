import React from "react";
import DailyActions from "../components/DailyActions";
import EnterNewMax from "../components/EnterNewMax";
import TodaysLift from "../components/TodaysLift";
// import Navbar from "../components/Navbar";
// import { useSelector } from "react-redux";

const Dashboard = () => {
  // const todayWorkout = useSelector((state) => state.user.todayWorkout);
  // const dailyTasks = useSelector((state) => state.user.dailyTasks);

  return (
    <div className="DashboardPage">
      this is the dashboard page
      <DailyActions />
      <EnterNewMax />
      <TodaysLift />
    </div>
  );
};

export default Dashboard;
