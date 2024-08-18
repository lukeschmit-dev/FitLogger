import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { MyWeek } from "../components/Planner-components/MyWeek";
import { NewExercise } from "../components/Planner-components/NewExercise";
import { MyExercises } from "../components/Planner-components/MyExercises";

export default function Planner(){
    return (
        <div className="Planner">
            <Navbar/>
            <NewExercise/>
            <MyWeek/>
            <MyExercises/>
            <Footer/>
        </div>
    )
}
