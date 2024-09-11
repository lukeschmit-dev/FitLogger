import React, { createContext, useState } from 'react';

export const ListContext = createContext();

// provider
export const ListProvider = ({ children }) => {

  // individual exercises
  const [exercises, setExercises] = useState([
    { id: 1, title: "Run", exercise: "Incline Treadmill", minutes: 30, level: "Medium", setting: null },
    { id: 2, title: "Stretch", exercise: "Hamstrings, Hips", minutes: 5, level: "Easy", setting: null },
    { id: 3, title: "Pushups", exercise: "Cobra Pushups", reps: 12, sets: 3, setting: null},
    { id: 4, title: "Bench Press", exercise: "Bench Press", reps: 10, sets: 4, weight: 65},
    { id: 5, title: "Handstand Balance" },
    { id: 6, title: "Kettlebell", exercise: "Kettlebell Swing", minutes: 4, level: "Easy", setting: null  },
    // { id: 7, title: "Handstand Balance" },
    // { id: 8, title: "Handstand Balance" },
    // { id: 9, title: "Handstand Balance" },
    // { id: 10, title: "Handstand Balance" },
    // { id: 11, title: "Handstand Balance" },
    // { id: 12, title: "Handstand Balance" },
    // { id: 13, title: "Handstand Balance" }
  
  ]);

// workouts (categorized lists of workouts)
  const [workoutsList, setWorkoutsList] = useState([
    {
      id: 'push',
      name: 'Push',
      warmup: [0, 1],
      coreWork: [3, 4],
      accessoryMovements: [5]
    },
    {
      id: 'pull',
      name: 'Pull',
      warmup: [1, 2],
      coreWork: [3, 4],
      accessoryMovements: [5]
    },
    {
      id: 'legs',
      name: 'Legs',
      warmup: [1, 2],
      coreWork: [3, 4],
      accessoryMovements: [5]
    }
  ]);

  const [days, setDays] = useState([
    {day: 'Monday', workoutID: 'push'},
    {day: 'Tuesday', workoutID: 'pull'},
    {day: 'Wednesday', workoutID: 'legs'},
    {day: 'Thursday', workoutID: 'legs'},
    {day: 'Friday', workoutID: 'legs'},
    {day: 'Saturday', workoutID: 'legs'},
    {day: 'Sunday', workoutID: 'legs'} //5 leg days. this must be Tom Platz's workout plan
  ])
  });


  return (
    <ListContext.Provider value={{ exercises, setExercises, workoutsList, setWorkoutsList, days, setDays}}>
      {children}
    </ListContext.Provider>
  );
};
