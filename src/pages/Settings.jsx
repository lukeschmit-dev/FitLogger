import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useContext } from 'react';
import { measurementContext } from '../context/Measurements'

const Settings = () => {
  const {measurement, setMeasurement} = useContext(measurementContext);
  function handleClick(){
    setMeasurement(measurement=="Imperial"?"Metric":"Imperial")
    console.log("switched to: ", measurement)
  }

  return (
    <div className="style-subcomp SettingsPage">
      <Navbar/>
      <button onClick={handleClick}>Unit System: {measurement}</button>
      <Footer/>
    </div>
  )
};
export default Settings;
