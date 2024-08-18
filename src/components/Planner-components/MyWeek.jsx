import React from 'react'
import { WorkoutsDropdown } from './WorkoutsDropdown'

export const MyWeek = () => {
  
  return (
    <div className="MyWeek">
      <h3>My Week: </h3>
        <ul>
          <li>
            MON <WorkoutsDropdown/>
          </li>
          <li>
            TUE <WorkoutsDropdown/>
          </li>
          <li>
            WED <WorkoutsDropdown/>
          </li>
          <li>
            THU <WorkoutsDropdown/>
          </li>
          <li>
            FRI <WorkoutsDropdown/>
          </li>
          <li>
            SAT <WorkoutsDropdown/>
          </li>
          <li>
            SUN <WorkoutsDropdown/>
          </li>
        </ul>
        <button>Submit</button>
    </div>
  )
}
