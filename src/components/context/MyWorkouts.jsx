import React, { useContext, useState } from 'react';
import { ListContext } from './ListContext';

export const MyWorkouts = () => {
    const { workoutsList } = useContext(ListContext);
    const [activeWorkout, setActiveWorkout] = useState(null);

    const handleButtonClick = (workout) => {
      console.log("button clicked: ", workout);
        setActiveWorkout(workout);
    };

    const handleCloseBox = () => {
        setActiveWorkout(null);
    };

    const handleSave = () => {
        console.log("Workout saved, workout: ", activeWorkout);
        setActiveWorkout(null);
    };

    return (
      <>
      <div className="MyWorkouts">
          <ul className="MyWorkoutsUl">
          <h3>My Workouts</h3>  
              {Object.keys(workoutsList).map((workout) => (
                  <li className="MyWorkoutsLi" key={workout}>
                      <p>{workout.charAt(0).toUpperCase() + workout.slice(1)}</p>
                      <button onClick={() => handleButtonClick(workout)}>
                          View 
                      </button>
                  </li>
              ))}
          </ul>
      </div>
          {activeWorkout && (
              <div className="EditWorkout">
                  <div className="workout-box">
                      <div className="workout-box-header">
                          <h3>{activeWorkout.charAt(0).toUpperCase() + activeWorkout.slice(1)}</h3>
                          <button onClick={handleCloseBox}>X</button>
                      </div>
                      <div className="workout-section">
                          <h4>Warmup</h4>
                          {/* Add warmup content here */}
                      </div>
                      <div className="workout-section">
                          <h4>Core Work</h4>
                          {/* Add core work content here */}
                      </div>
                      <div className="workout-section">
                          <h4>Misc</h4>
                          {/* Add misc content here */}
                      </div>
                      <button onClick={handleSave}>Save</button>
                  </div>
              </div>
          )}
      </>

    );
};
