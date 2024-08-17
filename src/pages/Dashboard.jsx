import React from "react";
import DailyActions from "../components/DailyActions";
import EnterNewMax from "../components/EnterNewMax";
import TodaysLift from "../components/TodaysLift";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Dashboard = () => {
  return (
    <div className="DashboardPage">
      <Navbar/>
        <DailyActions />
        <EnterNewMax />
        <TodaysLift />
      <Footer/>
    </div>
  );
};

export default Dashboard;
