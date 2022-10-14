// Imports
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AppTheme from "./UI-compoments/AppTheme";
import { store } from "./state";
import { Provider as StateProvider} from "react-redux";

// Pages
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

// Componenets





// Main Object
export default function App() {
  return (
    <StateProvider store={store}>
      <AppTheme>
          <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home/>}/>

                <Route path="/sign_up" element={<SignUp/>}/>

                <Route path="/sign_in" element={<SignIn/>}/>

            </Routes>
          </BrowserRouter>
        </AppTheme>
    </StateProvider>
  )
};