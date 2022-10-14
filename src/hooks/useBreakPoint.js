import {
  useTheme,
  useMediaQuery
} from "@mui/material";

export function useBreakPoint(cb) {
  const { breakpoints } = useTheme();
  return useMediaQuery(
    cb(breakpoints)
  );
}

// Example
// const onlyMobile = useBreakPoint(bp=> bp.up("md"))
