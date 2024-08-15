import React, { useState } from "react";
import { DailyActionsWrapper } from "./DailyActionsWrapper";

// let DailyActionsArray = [
//   {
//     "Drink Water": "incomplete",
//     "150g Protein": "incomplete",
//     "Stretch for 15 min": "incomplete",
//     "Read 15 pages": "incomplete",
//   },
// ];

function DailyActions() {
  const [actions, setActions] = useState([]);
  const [newAction, setNewTask] = useState("");

  function handleInputChange(event) {}

  function addTask(index) {}

  function completeTask(index) {}

  return (
    <div className="DailyActions">
      <DailyActionsWrapper />
    </div>
  );
}
export default DailyActions;
