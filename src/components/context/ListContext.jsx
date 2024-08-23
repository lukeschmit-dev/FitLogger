import React, { createContext, useState } from 'react';

export const ListContext = createContext();

// provider
export const ListProvider = ({ children }) => {
  const [workoutsList, setWorkoutsList] = useState({
    "push": {
      "warmup": {
        "run": {
          "title": "Run",
          "exercise": "Use incline treadmill",
          "minutes": 30,
          "level": "Medium",
          "setting": "None"
        },
        "stretch": {
          "title": "Stretch",
          "exercise": "Hamstrings, hips",
          "minutes": 5,
          "level": "Easy",
          "setting": "None"
        }
      },
      "core work": {},
      "accessory movements": {}
    },
    "pull": {},
    "legs": {},
    "rest": {},
    "cardio": {},
    "HITTT": {}
  });

  const addExercise = (category, subcategory, exercise) => {
    setWorkoutsList((prevWorkouts) => ({
      ...prevWorkouts,
      [category]: {
        ...prevWorkouts[category],
        [subcategory]: {
          ...prevWorkouts[category][subcategory],
          [exercise.title.toLowerCase().replace(/ /g, "_")]: exercise
        }
      }
    }));
  };

  return (
    <ListContext.Provider value={{ workoutsList, setWorkoutsList, addExercise }}>
      {children}
    </ListContext.Provider>
  );
};
