import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { MyWeek } from "../components/Planner-components/MyWeek";
import { NewExercise } from "../components/Planner-components/NewExercise";
import { MyExercises } from "../components/Planner-components/MyExercises";

export default function Planner(){

    const [nodeSpawnCont, setNodeSpawnCont] = useState([]) // 🚧 unused

    const [exerList, setExerList] = useState([ //moved your external object into a usestate!
        {
            "Title": "Pushups",
            "Reps": 20,
            "Sets": 4,
            "Weight": "none"
        }, 
        {
            "Title": "Bench Press",
            "Reps": 8,
            "Sets": 4,
            "Weight": 165
        }
    ])

    return (
        <div className="Planner">
            <Navbar/>
            <NewExercise nodeSpawnCont={nodeSpawnCont} setNodeSpawnCont={setNodeSpawnCont} exerList={exerList} setExerList={setExerList}/>
            <MyWeek/>
            <MyExercises exerList={exerList} setExerList={setExerList}/>
            <Footer/>
        </div>
    )
}
