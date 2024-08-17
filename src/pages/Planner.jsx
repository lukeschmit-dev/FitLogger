import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { MyWeek } from "../components/Planner-components/MyWeek";
import { NewExercise } from "../components/Planner-components/NewExercise";

export default function Planner(){
    return (
        <div className="Planner">
            <Navbar/>
            <NewExercise/>
            <MyWeek/>
            <Footer/>
        </div>
    )
}
