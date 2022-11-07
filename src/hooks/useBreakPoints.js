import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";


export default function useBreakPoints(input = {}) {
  const { breakpoints } = useTheme();
  const [state, setState] = useState();
  const breaks = {
    "xs":useMediaQuery(breakpoints.only("xs")),
    "sm":useMediaQuery(breakpoints.only("sm")),
    "md":useMediaQuery(breakpoints.only("md")),
    "lg":useMediaQuery(breakpoints.only("lg")),
    "xl":useMediaQuery(breakpoints.only("xl"))
  };

  const getCurrentPoint = ()=> Object
    .entries(breaks)
    .filter(a=> a[1])[0][0];

  const getReactiveState = point =>{
    switch (point) {
      case "xs":
        return setState(input.xs||input.sm||input.md||input.lg||input.xl)
      case "sm":
        return setState(input.sm||input.xs||input.md||input.lg||input.xl) 
      case "md":
        return setState(input.md||input.sm||input.xs||input.lg||input.xl) 
      case "lg":
        return setState(input.lg||input.md||input.sm||input.xs||input.xl) 
      case "xl":
        return setState(input.xl||input.lg||input.md||input.sm||input.xs)
      default:
        return setState(input.xs||input.sm||input.md||input.lg||input.xl)
    }
  }

  useEffect(()=>{ // if changes
    getReactiveState(
      getCurrentPoint()
    );
  }, [breaks, input])
  
 

  return state;
}