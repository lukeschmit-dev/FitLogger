import React, { useState } from "react";
import { DailyActionsForm } from "./DailyActionsForm";

let DailyActionsArray = [
  {title: "Drink Water 2L", completed: true},
  {title: "Get pre-workout from Walmart 🦅🦅🦅", completed: false}
];

function DailyActions() {
  const [actions, setActions] = useState(DailyActionsArray);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {}

  function updateAction(index, changedAction){
    setActions((prev) => 
      prev.map((action, i) => 
        i === index ? { ...action, ...changedAction } : action
      )
    )
  }

  function removeAction(index) {
    setActions((prev) => 
      prev.filter((_, i) => i !== index) // Filter out the item at the specified index
    );
  }

  function addTask(index) {}

  function completeTask(index) {}

  return (
    <div className="DailyActions">
      <DailyActionsForm setActions ={ setActions }/>
      {actions.map((action, index)=>{
        return (<div key={index}>
            {action.title} 
            {action.completed&&<span style={{color: "green"}}> Done</span>} 
            <button>Edit</button> 
            <button onClick={()=>{removeAction(index)}}>Remove</button> 
          </div>) //🚧 placeholder for the "done". we will replace with interactive checkbox.
      })}
    </div>
  );
}
export default DailyActions;
