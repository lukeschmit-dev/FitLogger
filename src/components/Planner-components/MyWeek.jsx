import React, {useContext, useState} from 'react'
import { WorkoutsDropdown } from './WorkoutsDropdown'
import ContextBar from '../subComponents/ContextBar'
import { WorkoutsByDayContext } from '../context/WorkoutsByDayContext'
import { ListContext } from '../context/ListContext'


export const MyWeek = () => {
  const { workoutsByDay, setWorkoutsByDay } = useContext(WorkoutsByDayContext);
  const { workoutsList } = useContext(ListContext);
  const [selectedWorkouts, setSelectedWorkouts] = useState({ ...workoutsByDay });

  const handleChange = (day, workout) => {
      setSelectedWorkouts((prevWorkouts) => ({
          ...prevWorkouts,
          [day]: workout,
      }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      setWorkoutsByDay(selectedWorkouts);
  };

  return (
      <div className="MyWeek">
          <h3>My Week</h3>
          <ul>
              {Object.keys(workoutsByDay).map((day) => (
                  <li key={day}>
                      <label htmlFor={`${day}-select`}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                      <select
                          id={`${day}-select`}
                          value={selectedWorkouts[day]}
                          onChange={(e) => handleChange(day, e.target.value)}
                      >
                          {Object.keys(workoutsList).map((workout) => (
                              <option key={workout} value={workout}>
                                  {workout.charAt(0).toUpperCase() + workout.slice(1)}
                              </option>
                          ))}
                      </select>
                  </li>
              ))}
          </ul>
          <button onClick={handleSubmit}>Submit</button>
      </div>
  );
};

export default MyWeek;
