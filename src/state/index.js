import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import { countReducer } from "./countState";
import { themeReducer } from "./themeState";
import { Provider } from "react-redux";


const mainReducer = combineReducers({
  count:countReducer,
  theme:themeReducer
})

export const store = configureStore({
  reducer:mainReducer
});


export const StateProvider = ({children})=> <Provider store={store}>{children}</Provider>;

// // debugding log
// store.subscribe(()=>{
//   console.log(store.getState())
// })

