const countInitValue = 0;
export const countActions = {
  increment:"COUNT_INCREMENT",
  decrement:"COUNT_DECREMENT"
}
export const countReducer = (state = countInitValue, {type})=>{
  switch (type) {
    case countActions.increment: return state + 1
    case countActions.decrement: return state + 1
    default: return state
  }
}