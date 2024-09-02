import React, { useContext, useState }  from 'react'
import {UnitCalc} from '../../utils/unitCalc'
import ContextBar from '../subComponents/ContextBar'
import { ListContext } from '../context/ListContext'

export const MyExercises = () => {
  const { workoutsList } = useContext(ListContext)
  console.log("workoutslist: ", workoutsList)

  return (
    <div className="style-subcomp MyExercises">
      <ContextBar />
      <h3>My Exercises: </h3>
      {Object.keys(workoutsList).map((category) => (
        Object.keys(workoutsList[category]).map((subcategory) => (
          Object.keys(workoutsList[category][subcategory]).map((exerciseKey) => {
            const exercise = workoutsList[category][subcategory][exerciseKey];
            return (
              <li key={exerciseKey}>
                <button>Edit</button><button>Remove</button>
                <div>
                  {exercise.title} | 
                  {exercise.reps ? `${exercise.reps} Reps | ` : ""}
                  {exercise.sets ? `${exercise.sets} Sets | ` : ""}
                  {exercise.minutes ? `${exercise.minutes} Minutes | ` : ""}
                  {exercise.level ? `Level ${exercise.level} | ` : ""}
                  {exercise.weight ? `Weight: ${exercise.weight} ${UnitCalc("weight")} | ` : ""}
                  {exercise.setting ? `${exercise.setting} | ` : ""}
                </div>
              </li>
            );
          })
        ))
      ))}
    </div>
  );
}

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