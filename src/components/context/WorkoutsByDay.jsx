import React, { useContext } from 'react'
import { WorkoutsByDayContext } from "./WorkoutsByDayContext"

export const WorkoutsByDay = () => {
    const { workoutsByDay } = useContext(WorkoutsByDayContext);
    return (
        <div>
            <h3>My workouts: </h3>
            {Object.values(workoutsByDay.push.warmup).map((exercise, idx) => (
        <div key={idx}>
          <h4>{exercise.title}</h4>
          <p>{exercise.exercise}</p>
          <p>Duration: {exercise.minutes} minutes</p>
          <p>Level: {exercise.level}</p>
          <p>Setting: {exercise.setting}</p>
        </div>
      ))}
        </div>
    );
};