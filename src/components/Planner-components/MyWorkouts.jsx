import React, { useContext, useState } from 'react';
import styles from "./MyWorkouts.module.css"
import { ListContext } from '../context/ListContext';
import {measurementContext } from "../context/Measurements"
import UnitCalc from "../../utils/unitCalc"
import ContextBar from '../subComponents/ContextBar'

export const MyWorkouts = () => {
    const { workoutsList, exercises } = useContext(ListContext);
    const {measurement, setMeasurement} = useContext(measurementContext);
    const [activeWorkout, setActiveWorkout] = useState(null);

    const handleButtonClick = (workout) => {
        setActiveWorkout(workout);
    };

    const handleCloseBox = () => {
        setActiveWorkout(null);
    };

    const handleSave = () => {
        setActiveWorkout(null);
    };
    console.log("activeWorkout: ", activeWorkout)

    function ExoTemplate({key, ptr}){
        console.log("ptr: ", ptr)
        console.log("exercises", exercises)

        return (
            <li key={key}>
            <ul  className={styles.workoutListUp}>
                <p>{exercises[ptr].title}</p>
                <li>{exercises[ptr].exercise}</li>
                {exercises[ptr].minutes&&<li>Time: {exercises[ptr].minutes} minutes</li>}
                {exercises[ptr].reps&&<li>Reps: {exercises[ptr].reps}</li>}
                {exercises[ptr].sets&&<li>Sets: {exercises[ptr].sets}</li>}
                {exercises[ptr].weight&&<li>Weight: {exercises[ptr].weight} {UnitCalc("weight")}</li>}
                {exercises[ptr].setting&&<li>{exercises[ptr].setting}</li>}
            </ul>
            </li>
        )
    }

    return (
      <>
      <div className={ styles.MyWorkouts }>
        <ContextBar />
          <ul className={styles.MyWorkoutsUl}>
          <h3>My Workouts</h3>  
              {workoutsList.map((workout, index) => (
                  <li className={styles.MyWorkoutsList} key={index}>
                      <p>{workout.name}</p>
                      <button onClick={() => handleButtonClick(workout)}>
                          View 
                      </button>
                  </li>
              ))}
          </ul>
      </div>

      {/* edit warmup box, only renders if an activeWorkout is set to something */}
          {activeWorkout && (
              <div className={styles.EditWorkout}>
                  <div className={styles.workoutBox}>
                      <div className={styles.workoutBoxHeader}>
                          <h3>{activeWorkout.name}</h3>
                          <button onClick={handleCloseBox} className={styles.closeBtn}>X</button>
                      </div>
                      {/* warmup section */}
                      <div className={styles.warmupSection}>
                          <h4>Warmup</h4>
                            <ul>
                                {activeWorkout.warmup.length > 0 &&(
                                    activeWorkout.warmup.map((ptr, index) => (
                                    <ExoTemplate key={index} ptr={ptr}/>
                                    ))
                                )}
                            </ul>
                            button
                      </div>
                      {/* misc section */}
                      <div className={styles.miscSection}>
                          <h4>Misc</h4> 
                          <ul>
                            {activeWorkout.accessoryMovements.length > 0 &&(
                                activeWorkout.accessoryMovements.map((ptr, index) => (
                                    <ExoTemplate key={index} ptr={ptr}/>
                                ))
                            )}
                            </ul>
                      </div>
                      {/* Core section */}
                      <div className={styles.coreWorkSection}>
                          <h4>Core Work</h4> 
                          <ul>
                            {activeWorkout.coreWork.length > 0 &&(
                                activeWorkout.coreWork.map((ptr, index) => (
                                    <ExoTemplate key={index} ptr={ptr}/>
                                ))
                            )}
                            </ul>
                      </div>
                      <button onClick={handleSave}>Save</button>
                  </div>
              </div>
          )}
      </>

    );
};




