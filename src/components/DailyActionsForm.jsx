import React, { useState } from "react";

export const DailyActionsForm = ({setActions}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setActions((prev)=>[
      ...prev,
      {title: value, completed: false}
    ])
  };

  return (
    <form className="DailyActionsForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="DailyActions-input"
        placeholder="New Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="DailyActionsBtn">
        Add
      </button>
    </form>
  );
};
