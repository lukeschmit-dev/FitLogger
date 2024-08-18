import React from 'react'

let MyExercisesList = [
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
]

export const MyExercises = () => {
  return (
    <div className="MyExercises">
        <h3>My Exercises: </h3>
        <ul>
      {MyExercisesList.map((exercise, index) => (
        <li key={index}>
          {exercise.Title} | {exercise.Reps} Reps | {exercise.Sets} Sets | Weight: {exercise.Weight}
        </li>
      ))}
    </ul>
    </div>
  )
}
