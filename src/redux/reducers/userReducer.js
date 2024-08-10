// src/redux/reducers/userReducer.js
const initialState = {
  maxLifts: {},
  todayWorkout: [],
  dailyTasks: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAX_LIFTS":
      return { ...state, maxLifts: action.payload };
    case "ADD_TODAY_WORKOUT":
      return {
        ...state,
        todayWorkout: [...state.todayWorkout, action.payload],
      };
    case "SET_DAILY_TASKS":
      return { ...state, dailyTasks: action.payload };
    default:
      return state;
  }
};

export default userReducer;
