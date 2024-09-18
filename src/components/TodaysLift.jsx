import React, {useContext, useState} from "react";
import { ListContext } from './context/ListContext'
import styles from './TodaysLift.module.css'





const TodaysLift = () => {

  const { days } = useContext(ListContext)
  const { workoutsList } = useContext(ListContext)
  const { exercises } = useContext(ListContext)

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  let dayOfWeek = daysOfWeek[today.getDay()];

  // getting the workoutID for today
  const dayEntry = days.find(function(entry) {
    return entry.day === dayOfWeek;
  })
  const todaysWorkoutID = dayEntry ? dayEntry.workoutID : 'no workout found';
  console.log("todaysWorkoutID: ", todaysWorkoutID)



  // getting the id arrays for warmup, core work, and misc for todays workoutID
  const workoutEntry = workoutsList.find(function(entry) {
    return entry.id === todaysWorkoutID
  })
  const todaysWarmupIds = workoutEntry.warmup
  const todaysCoreWorkIds = workoutEntry.coreWork
  const todaysAccessoryMovementsIds = workoutEntry.accessoryMovements

  console.log("todaysWarmupIds: ", todaysWarmupIds)
  console.log("todaysCoreWorkIds: ", todaysCoreWorkIds)
  console.log("todaysAccessoryMovementsIds: ", todaysAccessoryMovementsIds)

  // getting the exercises for warmup section
  const todaysWarmupEntries = exercises.filter(function(entry) {
    return todaysWarmupIds.includes(entry.id)
  })
  // array of warmup exercise objects
  const todaysWarmup = todaysWarmupEntries.length > 0 ? todaysWarmupEntries : "No warmup exercises added";

  // getting the exercises for core work section
  const todaysCoreWorkEntries = exercises.filter(function(entry) {
    return todaysCoreWorkIds.includes(entry.id)
  })
  // array of core work exercise objects
  const todaysCoreWork = todaysCoreWorkEntries.length > 0 ? todaysCoreWorkEntries : "No core work entries"

  // getting the exercises for accessory movements section
  const todaysAccessoryMovementEntries = exercises.filter(function(entry) {
    return todaysAccessoryMovementsIds.includes(entry.id)
  })
  // array of accessory movement objects
  const todaysAccessoryMovements = todaysAccessoryMovementEntries.length > 0 ? todaysAccessoryMovementEntries : "No acc movement entries"


  console.log("todaysWarmup: ", todaysWarmup)
  console.log("todaysCoreWork: ", todaysCoreWork)
  console.log("todaysAccessoryMovements: ", todaysAccessoryMovements)


  return (
    <div className={styles.TodaysLift}>
      <div className={styles.Today}>{dayOfWeek}</div>
      <h1>Todays Lift: {workoutEntry.name}</h1>

      <div className={styles.TodaysLiftSection1}>
        <h3>Warmup: </h3>
        <ul className={styles.ul}>
          
          {todaysWarmup.map(exercise => (
            <li key={exercise.id} className={styles.li}>
              <h4 >
              {exercise.title}
              </h4>
              {exercise.exercise && <p>Exercise: {exercise.exercise}</p>}
              {exercise.minutes && <p>Time: {exercise.minutes} minutes</p>}
              {exercise.level && <p>Level: {exercise.level}</p>}
              {exercise.setting && <p>Setting: {exercise.setting}</p>}
              {exercise.sets && <p>Sets: {exercise.sets}</p>}
              {exercise.reps && <p>Reps: {exercise.reps}</p>}
              {exercise.weight && <p>Weight: {exercise.weight}</p>}
            </li>
          ))}

        </ul>
      </div>

      <div className={styles.TodaysLiftSection2}>
        <h3>Accessory Movements: </h3>
        <ul className={styles.ul}>
        {todaysAccessoryMovements.map(exercise => (
          <li key={exercise.id} className={styles.li}>
            <h4>
            {exercise.title}
            </h4>
            {exercise.exercise && <p>Exercise: {exercise.exercise}</p>}
            {exercise.minutes && <p>Time: {exercise.minutes} minutes</p>}
            {exercise.level && <p>Level: {exercise.level}</p>}
            {exercise.setting && <p>Setting: {exercise.setting}</p>}
            {exercise.sets && <p>Sets: {exercise.sets}</p>}
            {exercise.reps && <p>Reps: {exercise.reps}</p>}
            {exercise.weight && <p>Weight: {exercise.weight}</p>}
          </li>
        ))}

      </ul>
       
      </div>

      <div className={styles.TodaysLiftSection3}>
        <h3>Core Work: </h3>
        <ul className={styles.ul}>
        {todaysCoreWork.map(exercise => (
          <li key={exercise.id} className={styles.coreworkli}>
            <h4>
            {exercise.title}
            </h4>
            {exercise.exercise && <p>Exercise: {exercise.exercise}</p>}
            {exercise.minutes && <p>Time: {exercise.minutes} minutes</p>}
            {exercise.level && <p>Level: {exercise.level}</p>}
            {exercise.setting && <p>Setting: {exercise.setting}</p>}
            {exercise.sets && <p>Sets: {exercise.sets}</p>}
            {exercise.reps && <p>Reps: {exercise.reps}</p>}
            {exercise.weight && <p>Weight: {exercise.weight}</p>}
          </li>
        ))}

      </ul>
       
      </div>

    </div>
  );
};
export default TodaysLift;
