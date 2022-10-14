import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../state/themeState"; 

export function useThemeActions(){
  const themeMode = useSelector(s=>s.theme);
  const dispatch = useDispatch();
  const turnLightMode = ()=>{
    dispatch({type:themeActions.lightMode})
  }
  const turnDarkMode = ()=>{
    dispatch({type:themeActions.darkMode})
  }
  const toggle = ()=>{
    if(themeMode === "light"){
      turnDarkMode()
    } else {
      turnLightMode()
    }
  }
  return {
    themeMode,
    turnLightMode,
    turnDarkMode,
    toggle
  }
}