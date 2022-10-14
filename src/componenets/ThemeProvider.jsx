
import {
  createTheme,
  CssBaseline,
  ThemeProvider as Provider,
} from "@mui/material";
import {
  useSelector,
} from "react-redux";

// background-color: #e5e5f7;
// opacity: 0.8;
// background: repeating-linear-gradient( -45deg, #444cf7, #444cf7 5px, #e5e5f7 5px, #e5e5f7 25px );
const darkTheme = createTheme({
  palette:{
    mode:"dark"
  }
});
const lightTheme = createTheme({
  palette:{
    mode:"light"
  }
});

// const BodyBackground = styled(Box)(({theme})=>({
//   background:"repeating-linear-gradient( -45deg, #1976d2, transparent 1px,  transparent 30px )",
// }))


export default function ThemeProvider({children}) {
  const themeMode = useSelector(s=>s.theme);
  return (
    <Provider theme={themeMode==="light"?lightTheme:darkTheme}>
      <CssBaseline/>
      {/* <BodyBackground> */}
        {children}
      {/* </BodyBackground> */}
    </Provider>
  )
}