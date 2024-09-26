import {React, useState, useContext } from "react";
import UnitCalc from '../utils/unitCalc'
import styles from "./EnterNewMax.module.css"
import { ListContext } from './context/ListContext'


const EnterNewMax = () => {

  const { exercises } = useContext(ListContext)

  const [maxValues, setMaxValues] = useState({
    movement: '',
    weight: '',
    reps: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaxValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find the exercise based on the selected movement
    const selectedExercise = exercises.find(
      (exercise) => exercise.title === maxValues.movement
    );

    if (selectedExercise) {
      const updatedMaxes = maxes.map((max) => {
        if (max.id === selectedExercise.id) {
          // Add the new entry to the correct exercise ID
          return {
            ...max,
            entries: [
              ...max.entries,
              { weight: maxValues.weight, reps: maxValues.reps },
            ],
          };
        }
        return max;
      });

      // Update the maxes state
      setMaxes(updatedMaxes);

      // Optionally, reset the form values
      setMaxValues({
        movement: '',
        weight: '',
        reps: '',
      });

      console.log("Maxes updated:", updatedMaxes);
    }
  };

  return (
    <div className={`${ styles.EnterNewMax } style-subcomp`}>

      <h1>Enter New Max</h1>
      <form onSubmit={handleSubmit}>
        <label>Movement: </label>
        <select
        name="movement"
        id="movement"
        value={maxValues.movement}
        onChange={handleInputChange}
        >
          {exercises.map(exercise => (
            <option key={exercise.id} value={exercise.title}>
              {exercise.title}
            </option>
          ))}
        </select>
        
        <br></br>
        
        <label>Weight: </label>
        <input 
        type="number"
        name="weight"
        value={maxValues.weight}
        onChange={handleInputChange}
        />
        <label>{UnitCalc("weight")}</label>
        
        <br></br>

        <label>Reps: </label>
        <input 
        type="number"
        name="reps"
        value={maxValues.reps}
        onChange={handleInputChange}
        />
        
        <br></br>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default EnterNewMax;
