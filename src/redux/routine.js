import { createSlice } from '@reduxjs/toolkit';
import dayData from '../api/mock/day.json'; // 목업 데이터 가져오기

const initialState = {
  routines: dayData.personal || [], // dayData.personal로 초기화
  newRoutine: {
    time: '',
    title: '',
    recurringDays: [], // 초기값
    notification: false, // 알림 설정 초기값 추가
  },
};

const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {
    addRoutine: (state, action) => {
      console.log('Adding routine:', action.payload);
      state.routines.push(action.payload); // 새 루틴 추가
    },
    updateRoutine: (state, action) => {
      const updatedRoutine = action.payload;
      const routineIndex = state.routines.findIndex(
        (routine) => routine.title === updatedRoutine.title
      );
      if (routineIndex >= 0) {
        state.routines[routineIndex] = updatedRoutine; // 루틴 업데이트
      }
    },
    deleteRoutine: (state, action) => {
      const titleToDelete = action.payload;
      state.routines = state.routines.filter(
        (routine) => routine.title !== titleToDelete // 루틴의 title이 일치하는 것을 필터링
      );
    },
    setNewRoutine: (state, action) => {
      state.newRoutine = action.payload;
    },
    updateRecurringDays: (state, action) => {
      state.newRoutine.recurringDays = action.payload;
    },
  },
});

export const {
  addRoutine,
  updateRoutine,
  deleteRoutine,
  setNewRoutine,
  updateRecurringDays,
} = routineSlice.actions;
export default routineSlice.reducer;
