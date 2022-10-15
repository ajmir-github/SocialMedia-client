const localStoreName = "APP_THEME_MODE";
// let the browser remember the thememode
const getLocalThemeMode = () => localStorage.getItem(localStoreName) || "light";
const setLocalTHemeMode = themeName => localStorage.setItem(localStoreName, themeName);

export const themeActions = {
  darkMode:"THEMEMODE_DARK",
  lightMode:"THEMEMODE_LIGHT"
}
export const themeReducer = (state = getLocalThemeMode(), {type})=>{
  switch (type) {
    case themeActions.darkMode:
      setLocalTHemeMode("dark");
      return "dark"
    case themeActions.lightMode:
      setLocalTHemeMode("light");
      return "light"
    default: return state
  }
}