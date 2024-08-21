import React, {createContext, useState} from 'react';

export const WorkoutsByDayContext = createContext();

export const WorkoutsByDayProvider = ({children}) => {
    const [workoutsByDay, setWorkoutsByDay] = useState({
            "monday": "push",
            "tuesday": "pull",
            "wednesday": "legs",
            "thursday": "rest",
            "friday": "cardio",
            "saturday": "HITT",
            "sunday": "rest"
    })
}
