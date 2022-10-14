const themeInitValue = "light";

export const themeActions = {
  darkMode:"THEMEMODE_DARK",
  lightMode:"THEMEMODE_LIGHT"
}
export const themeReducer = (state = themeInitValue, {type})=>{
  switch (type) {
    case themeActions.darkMode: return "dark"
    case themeActions.lightMode: return "light"
    default: return state
  }
}