import React, { useContext, useState }  from 'react'
// import {UnitCalc} from '../../utils/unitCalc'
import ContextBar from '../subComponents/ContextBar'
import { ListContext } from '../context/ListContext'


export const MyExercises = (exerList, setExerList) => {
  const { exercises } = useContext(ListContext)


  return (
    <div className="style-subcomp MyExercises">
      <ContextBar />
      <h3>My Exercises: </h3>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <h4>
            {exercise.title}
            </h4>
            <p>
            {exercise.exercise && <p>Exercise: {exercise.exercise}</p>}
            {exercise.minutes && <p>Time: {exercise.minutes} minutes</p>}
            {exercise.level && <p>Level: {exercise.level}</p>}
            {exercise.setting && <p>Setting: {exercise.setting}</p>}
            {exercise.sets && <p>Sets: {exercise.sets}</p>}
            {exercise.reps && <p>Reps: {exercise.reps}</p>}
            {exercise.weight && <p>Weight: {exercise.weight}</p>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
};


// export const MyExercises = ({exerList, setExerList}) => {
  
//   return (
//     <div className="style-subcomp MyExercises">
//         <h3>My Exercises: </h3>
//         <ul>
//       {exerList.map((exercise, index) => (
//         <li key={index}>
//           <button>Edit</button><button>Remove</button>
//           <div>{exercise.Title} | 
//           {exercise.Reps? `${exercise.Reps} Reps | ` : "" }
//           {exercise.Times? `${exercise.Times} Tries | ` : "" }
//           {exercise.Sets? `${exercise.Sets} Sets | ` : "" }
//           {exercise.Minutes? `${exercise.Minutes} Minutes | ` : "" }
//           {exercise["Reps/Minutes"]? `${exercise["Reps/Minutes"]} Minutes | ` : "" }
//           {exercise.Level? `Level ${exercise.Level} | ` : "" }
//           {exercise.Weight? `Weight: ${exercise.Weight} ${UnitCalc("weight")} | ` : "" }
//           {exercise["Weight(Optional)"]? `Weight(Optional): ${exercise["Weight(Optional)"]} ${UnitCalc("weight")} | ` : "" }
//           {exercise.Settings? `${exercise.Settings} | ` : "" }
//           </div> {/* Need to rebuild to accomodate alternative vals! */}
//           {/* test */}
//         </li>
//       ))}
//     </ul>
//     </div>
//   )
// }

/* 
        "Cardio": ["Minutes", "Level", "Settings"],
        "Weights": ["Reps", "Sets", "Weight"],
        "HIIT": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "Warmup": ["Reps/Minutes", "Sets", "Weight(Optional)", "Settings"],
        "PR": ["Maximum Attempt", "Times"],
        "Misc": ["Sets", "Reps", "Minutes", "Level", "Settings"],
*/