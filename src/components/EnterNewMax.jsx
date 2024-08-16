import React from "react";

const EnterNewMax = () => {
  return (
    <div className="EnterNewMax">
      <h1>ENTER NEW MAX</h1>
      <form>
        <label>Movement: </label>
        <select name="cars" id="cars">
          <option>Pull up</option>
          <option>Push up</option>
          <option>1 Mile run</option>
          <option>Max distance run</option>
          <option>Bench press</option>
          <option>Sit ups</option>
        </select>
        <br></br>
        <label>Weight: </label>
        <input />
        <br></br>
        <label>Reps: </label>
        <input />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default EnterNewMax;
