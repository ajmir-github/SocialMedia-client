import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import { countReducer } from "./countState";
import { themeReducer } from "./themeState";


const mainReducer = combineReducers({
  count:countReducer,
  theme:themeReducer
})

export const store = configureStore({
  reducer:mainReducer
});


// debugding log
store.subscribe(()=>{
  console.log(store.getState())
})

