import React, { useContext, useState } from 'react';
import styles from "./MyWorkouts.module.css"
import { ListContext } from '../context/ListContext';
import ContextBar from '../subComponents/ContextBar'

export const MyWorkouts = () => {
    const { workoutsList } = useContext(ListContext);
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


    return (
      <>
      <div className={ styles.MyWorkouts }>
        <ContextBar />
          <ul className={styles.MyWorkoutsUl}>
          <h3>My Workouts</h3>  
              {Object.keys(workoutsList).map((workout) => (
                  <li className={styles.MyWorkoutsLi} key={workout}>
                      <p>{workout.charAt(0).toUpperCase() + workout.slice(1)}</p>
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
                          <h3>{activeWorkout.charAt(0).toUpperCase() + activeWorkout.slice(1)}</h3>
                          <button onClick={handleCloseBox} className={styles.closeBtn}>X</button>
                      </div>

                      {/* warmup section */}
                      <div className={styles.warmupSection}>
                          <h4>Warmup</h4>
                            <ul>
                                {Object.keys(workoutsList[activeWorkout]['warmup']).length > 0 ? (
                                 Object.keys(workoutsList[activeWorkout]['warmup']).map((exerciseTitle) => (
                                    <li key={exerciseTitle}>
                                        {exerciseTitle}
                                        <button>rem</button>
                                    </li>
                                ))
                                 ) : (
                                    <p>empty</p>
                                 )
                                }
                            </ul>
                            button
                      </div>
                      <div className={styles.miscSection}>
                          <h4>Misc</h4> 
                          <ul>
                                {Object.keys(workoutsList[activeWorkout]['accessory movements']).length > 0 ? (
                                Object.keys(workoutsList[activeWorkout]['accessory movements']).map((exerciseTitle) => (
                                    <li key={exerciseTitle}>
                                        {exerciseTitle}
                                        <button>rem</button>
                                    </li>
                                ))
                                ) : (
                                    <p>empty</p>
                                )
                            }
                            </ul>
                      </div>

                      <div className={styles.coreWorkSection}>
                          <h4>Core Work</h4>
                          <ul>
                          {Object.keys(workoutsList[activeWorkout]['core work']).length > 0 ? (
                                 Object.keys(workoutsList[activeWorkout]['core work']).map((exerciseTitle) => (
                                    <li key={exerciseTitle}>
                                        {exerciseTitle}
                                        <button>rem</button>
                                    </li>
                                ))
                                 ) : (
                                    <p>empty</p>
                                 )
                                }
                          </ul>

                      </div>
                      <button onClick={handleSave}>Save</button>
                  </div>
              </div>
          )}
      </>

    );
};
