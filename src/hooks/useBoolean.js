import { useState } from "react";

export default function useBoolean(initState = false) {
  const[state, setState] = useState(initState);
  return [
    state,
    {
      toggle:()=> setState(!state),
      on:()=> setState(true),
      off:()=> setState(false)
    }
  ]
}