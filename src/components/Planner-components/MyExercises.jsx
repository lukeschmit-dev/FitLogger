import React, { useState }  from 'react'

/* let MyExercisesList = [
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
]  */
//⚠️ moved your external object into a usestate, at higher order! (Planner.jsx)

export const MyExercises = ({exerList, setExerList}) => {
  
  console.log("EXERLIST IN MYEXERCISES", exerList)

  return (
    <div className="style-subcomp MyExercises">
        <h3>My Exercises: </h3>
        <ul>
      {exerList.map((exercise, index) => (
        <li key={index}>
          <button>Edit</button><button>Remove</button>
          <div>{exercise.Title} | {exercise.Reps} Reps | {exercise.Sets} Sets | Weight: {exercise.Weight}</div> {/* Need to rebuild to accomodate alternative vals! */}
        </li>
      ))}
    </ul>
    </div>
  )
}
