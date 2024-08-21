import React, {useContext} from 'react'
import { ListContext } from './ListContext'

export const MyWorkouts = () => {
    const { workoutsList } = useContext(ListContext);
  return (
    <div>
      {/* Example: Display warmup exercises for "push" day */}
      <h3>Warmup - Push Day</h3>
      {Object.values(workoutsList.push.warmup).map((exercise, idx) => (
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
