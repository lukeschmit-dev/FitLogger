import React, {useContext, useState} from 'react'
/* import { WorkoutsDropdown } from './WorkoutsDropdown' */
import ContextBar from '../subComponents/ContextBar'
import { WorkoutsByDayContext } from '../context/WorkoutsByDayContext'
import { ListContext } from '../context/ListContext'


export const MyWeek = () => {
  const { workoutsByDay, setWorkoutsByDay } = useContext(WorkoutsByDayContext);
  const { workoutsList, days, setDays } = useContext(ListContext);
  const [selectedWorkouts, setSelectedWorkouts] = useState({ ...workoutsByDay });

  const handleChange = (_day, _val) => {
    setDays((prev)=>{
        const arr = [...prev]
        arr[_day] = {
            ...arr[_day],
            workoutID: _val
        }
        return arr
        }
    )
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      setWorkoutsByDay(selectedWorkouts);
  };
  //<button onClick={handleSubmit}>Submit</button> removed for now
  
  console.log("!!DAYS OBJ", days) //🚧testing. remove after

  return (
      <div className="style-subcomp MyWeek">
        <ContextBar />
          <h3>My Week</h3>
          <ul>
              {Object.entries(days).map(([k, v], index) => (
                
                  <li key={index}>
                      <label htmlFor={`${v.day}-select`}>{v.day}</label>
                      <select
                          id={`${v.day}-select`}
                          name={`${v.day}-select`}
                          //value={selectedWorkouts[v]}
                          value={v.workoutID}
                          onChange={(e) => handleChange(index, e.target.value)}
                      >
                          {Object.entries(workoutsList).map(([k, v], index) => (
                              <option key={index} value={v.id}>
                                  {v.id}
                              </option>
                          ))}
                      </select>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default MyWeek;
