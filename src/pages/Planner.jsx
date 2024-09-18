import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { MyWeek } from "../components/Planner-components/MyWeek";
// import { NewExercise } from "../components/Planner-components/NewExercise";
import { MyExercises } from "../components/Planner-components/MyExercises";
import {measurementContext } from "../components/context/Measurements"
import { MyWorkouts } from "../components/Planner-components/MyWorkouts";
import styles from '../components/Planner.module.css'

// import { WorkoutsByDay } from "../components/context/WorkoutsByDay"

export default function Planner(){

    const {measurement, setMeasurement} = useContext(measurementContext);
  function handleClick(){
    setMeasurement(measurement=="Imperial"?"Metric":"Imperial")
    console.log("switched to: ", measurement)
  }

    const [nodeSpawnCont, setNodeSpawnCont] = useState([]) // 🚧 unused

    let templatePushup = {
        "Title": "Pushups",
        "Reps": 20,
        "Sets": 4,
        "Weight": "none"
    }
    let templateBench = {
        "Title": "Bench Press",
        "Reps": 8,
        "Sets": 4,
        "Weight": 165
    }

    const [exerList, setExerList] = useState([ //moved your external object into a usestate! new format. obj within obj in the array.
        templatePushup,
        templateBench,
    ])

    return (
        <div className="Planner">
            <Navbar/>
            <MyWeek/>
            <MyWorkouts/>
            <button onClick={handleClick}>Unit System: {measurement}</button>
            {/* <NewExercise nodeSpawnCont={nodeSpawnCont} setNodeSpawnCont={setNodeSpawnCont} exerList={exerList} setExerList={setExerList}/> */}
            <MyExercises className = {styles.MyExercises}/>
            <Footer/>
        </div>
    )
}
