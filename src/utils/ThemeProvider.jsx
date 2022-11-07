import {
  createTheme,
  CssBaseline,
  ThemeProvider as Provider,
} from "@mui/material";
import {
  useSelector,
} from "react-redux";

import Scrollbar from "./Scrollbar";
import { colors } from "@mui/material"

const darkTheme = createTheme({
  palette:{
    mode:"dark",
    primary:colors.lightBlue,
    background:{
      default:colors.grey[800]
    }
  }
});
const lightTheme = createTheme({
  palette:{
    mode:"light",
    primary:colors.deepPurple,
    secondary:colors.red,
    background:{
      default:colors.grey[300]
    }
  }
});


export default function ThemeProvider({children}) {
  const themeMode = useSelector(s=>s.theme);
  return (
    <Provider theme={themeMode==="light"?lightTheme:darkTheme}>
      <CssBaseline/>
      <Scrollbar/>
      {children}
    </Provider>
  )
}