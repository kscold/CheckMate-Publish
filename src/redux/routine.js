// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   routines: [],
//   newRoutine: {
//     time: "",
//     title: "",
//     recurringDays: [],
//   },
// }

// const routineSlice = createSlice({
//   name: "routine",
//   initialState,
//   reducers: {
//     addRoutine: (state, action) => {
//       state.routines.push(action.payload)
//     },
//     updateRoutine: (state, action) => {
//       const { title, success } = action.payload
//       const routine = state.routines.find((routine) => routine.title === title)
//       if (routine) {
//         routine.success = success
//       }
//     },
//     deleteRoutine: (state, action) => {
//       state.routines = state.routines.filter(
//         (routine) => routine.title !== action.payload
//       )
//     },
//     setNewRoutine: (state, action) => {
//       state.newRoutine = action.payload
//     },
//   },
// })

// export const { addRoutine, updateRoutine, deleteRoutine, setNewRoutine } =
//   routineSlice.actions
// export default routineSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routines: [], // Store all personal routines here
  newRoutine: {
    time: '',
    title: '',
    recurringDays: [],
  },
};

const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {
    addRoutine: (state, action) => {
      state.routines.push(action.payload); // Add the new routine to the list
    },
    updateRoutine: (state, action) => {
      const { title, success } = action.payload;
      const routine = state.routines.find((routine) => routine.title === title);
      if (routine) {
        routine.success = success;
      }
    },
    deleteRoutine: (state, action) => {
      state.routines = state.routines.filter(
        (routine) => routine.title !== action.payload
      );
    },
    setNewRoutine: (state, action) => {
      state.newRoutine = action.payload;
    },
  },
});

export const { addRoutine, updateRoutine, deleteRoutine, setNewRoutine } =
  routineSlice.actions;
export default routineSlice.reducer;
