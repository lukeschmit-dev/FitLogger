import React from 'react'

export const Today = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
let dayOfWeek = daysOfWeek[today.getDay()];
dayOfWeek = dayOfWeek.toUpperCase();

console.log(dayOfWeek);

  return (
    <div className='Today'>{dayOfWeek}</div>
  )
}
