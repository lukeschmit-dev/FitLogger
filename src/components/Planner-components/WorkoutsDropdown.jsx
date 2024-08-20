import React from 'react'

let MyWorkoutsList = [
    "Push", "Pull", "Legs", "Cardio", "Rest"
]


export const WorkoutsDropdown = () => {
  return (
    <div>
        <select>
      {MyWorkoutsList.map((workout, index) => (
        <option key={index} value={workout}>
          {workout}
        </option>
      ))}
    </select>
    </div>
  )
}

