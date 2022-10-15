// Imports
import { Router, Route } from "./componenets/Router";
// import "./App.css";
// Pages
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";


// Main Object
export default function App() {
  return (
    <Router>
      
      <Route path="/" index element={<Home/>}/>

      <Route path="/sign_up" element={<SignUp/>}/>

      <Route path="/sign_in" element={<SignIn/>}/>

    </Router>
  )
};