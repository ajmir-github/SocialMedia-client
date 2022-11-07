import { useState } from "react";

export default function useCounter(init = 0, minLimit = 0, maxLimit = 10, incrementBy = 1) {
  const[state, setState] = useState(init);
  return [
    state,
    {
      increment(){
        if(state < maxLimit) setState(state + incrementBy)
      },
      decrement(){
        if(state > minLimit) setState(state - incrementBy)
      },
      reset(){
        setState(init)
      }
    }
  ]
}