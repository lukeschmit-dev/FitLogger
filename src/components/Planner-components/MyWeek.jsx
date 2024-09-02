import React from 'react'
import { WorkoutsDropdown } from './WorkoutsDropdown'
import ContextBar from '../subComponents/ContextBar'

export const MyWeek = () => {
  
  return (
    <div className="style-subcomp MyWeek">
      <ContextBar />
      <div className="style-bgCompo">
      <h3>My Week: </h3>
        <br></br>
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
    </div>
  )
}
