import React from "react";

let currentSplit = "Legs";

const TodaysLift = () => {
  return (
    <div className="TodaysLift">
      <h1>Todays Lift: {currentSplit}</h1>

      <div className="WarmupSection">
        <h3>Warmup: </h3>
        <ul>
          <li>Hip Circles</li>
          <li>Bike 10 min</li>
          <li>Stretch ankles and hips</li>
        </ul>
      </div>

      <div className="CoreWorkSection">
        <h3>Core Work: </h3>
        <ul>
          <li>
            <h4>Squats: </h4>
            <ul>
              <li>Bar x 15</li>
              <li>135 x 6</li>
              <li>185 x 4</li>
              <li>225 x 4</li>
              <li>275 x 1</li>
              <li>275 x 1</li>
            </ul>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="AccessorySection">
        <h3>Accessory Movements: </h3>
      </div>
    </div>
  );
};
export default TodaysLift;
