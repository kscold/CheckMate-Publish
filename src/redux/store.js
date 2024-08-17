import { configureStore } from "@reduxjs/toolkit"
import selectedSectionReducer from "./main"
import routineReducer from "./routine"
import communityReducer from "./communitySlice"

const store = configureStore({
  reducer: {
    selectedSection: selectedSectionReducer,
    community: communityReducer,
    routine: routineReducer,
  },
})

export default store
