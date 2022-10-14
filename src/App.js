// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider, colors, Box, styled } from "@mui/material";

// Pages
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

// Componenets


// background-color: #e5e5f7;
// opacity: 0.8;
// background: repeating-linear-gradient( -45deg, #444cf7, #444cf7 5px, #e5e5f7 5px, #e5e5f7 25px );
const theme = createTheme({
  palette:{
    mode:"dark"
  }
 
});

const BodyBackground = styled(Box)(({theme})=>({
  background:"repeating-linear-gradient( -45deg, #1976d2, transparent 1px,  transparent 30px )",
}))



// Main Object
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BodyBackground>
        <BrowserRouter>
          <Routes>
              <Route path="/" index element={<Home/>}/>

              <Route path="/sign_up" element={<SignUp/>}/>

              <Route path="/sign_in" element={<SignIn/>}/>

          </Routes>
        </BrowserRouter>
      </BodyBackground>
    </ThemeProvider>
  )
};