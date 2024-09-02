import React, { useState }  from 'react'
import {UnitCalc} from '../../utils/unitCalc'
import ContextBar from '../subComponents/ContextBar'

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
  
  return (
    <div className="style-subcomp MyExercises">
      <ContextBar />
        <h3>My Exercises: </h3>
        <ul>
      {exerList.map((exercise, index) => (
        <li key={index}>
          <button>Edit</button><button>Remove</button>
          <div>{exercise.Title} | 
          {exercise.Reps? `${exercise.Reps} Reps | ` : "" }
          {exercise.Times? `${exercise.Times} Tries | ` : "" }
          {exercise.Sets? `${exercise.Sets} Sets | ` : "" }
          {exercise.Minutes? `${exercise.Minutes} Minutes | ` : "" }
          {exercise["Reps/Minutes"]? `${exercise["Reps/Minutes"]} Minutes | ` : "" }
          {exercise.Level? `Level ${exercise.Level} | ` : "" }
          {exercise.Weight? `Weight: ${exercise.Weight} ${UnitCalc("weight")} | ` : "" }
          {exercise["Weight(Optional)"]? `Weight(Optional): ${exercise["Weight(Optional)"]} ${UnitCalc("weight")} | ` : "" }
          {exercise.Settings? `${exercise.Settings} | ` : "" }
          </div> {/* Need to rebuild to accomodate alternative vals! */}
          {/* test */}
        </li>
      ))}
    </ul>
    </div>
  )
}

/* 
        "Cardio": ["Minutes", "Level", "Settings"],
        "Weights": ["Reps", "Sets", "Weight"],
        "HIIT": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "Warmup": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "PR": ["Maximum Attempt", "Times"],
        "Misc": ["Sets", "Reps", "Minutes", "Level", "Settings"],
*/