// src/pages/Dashboard.js
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const todayWorkout = useSelector((state) => state.user.todayWorkout);
  const dailyTasks = useSelector((state) => state.user.dailyTasks);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Today's Workout</h2>
        <ul>
          {todayWorkout.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Daily Tasks</h2>
        <ul>
          {dailyTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
