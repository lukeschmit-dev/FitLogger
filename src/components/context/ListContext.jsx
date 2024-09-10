import React, { createContext, useState } from 'react';

export const ListContext = createContext();

// provider
export const ListProvider = ({ children }) => {

  // individual exercises
  const [exercises, setExercises] = useState([
    { id: 1, title: "Run", exercise: "Use incline treadmill", minutes: 30, level: "medium", setting: "none" },
    { id: 2, title: "Stretch", exercise: "Hamstrings, hips", minutes: 5, level: "Easy", setting: "None" },
    { id: 3, title: "Pushups" },
    { id: 4, title: "Bench Press" },
    { id: 5, title: "Handstand Balance" }
    // { id: 6, title: "Handstand Balance" },
    // { id: 7, title: "Handstand Balance" },
    // { id: 8, title: "Handstand Balance" },
    // { id: 9, title: "Handstand Balance" },
    // { id: 10, title: "Handstand Balance" },
    // { id: 11, title: "Handstand Balance" },
    // { id: 12, title: "Handstand Balance" },
    // { id: 13, title: "Handstand Balance" }
  
  ]);

// workouts (categorized lists of workouts)
  const [workouts, setWorkouts] = useState([
    {
      id: 'push',
      warmup: [1, 2],
      coreWork: [3, 4],
      accessoryMovements: [5]
    },
    {
      id: 'pull',
      warmup: [1, 2],
      coreWork: [3, 4],
      accessoryMovements: [5]
    },
    {
      id: 'legs',
      warmup: [1, 2],
      coreWork: [3, 4],
      accessoryMovements: [5]
    }
  ]);

  const [days, setDays] = useState([
    {day: 'Monday', workoutID: 'push'},
    {day: 'Tuesday', workoutID: 'pull'},
    {day: 'Wednesday', workoutID: 'legs'},
  ])


  return (
    <ListContext.Provider value={{ exercises, setExercises, workouts, setWorkouts, days, setDays}}>
      {children}
    </ListContext.Provider>
  );
};
