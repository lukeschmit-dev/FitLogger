import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyWeek from "../components/Planner-components/MyWeek";

import { useContext } from 'react';
import {measurementContext } from "../components/context/Measurements"

const Settings = () => {
  const {measurement, setMeasurement} = useContext(measurementContext);
  function handleClick(){
    setMeasurement(measurement=="Imperial"?"Metric":"Imperial")
    console.log("switched to: ", measurement)
  }

  return (
    <div className="SettingsPage">
      <Navbar/>
      {/* <button onClick={handleClick}>Unit System: {measurement}</button> */}
      {/* <MyWeek/> */}
      <Footer/>
    </div>
  )
};
export default Settings;
