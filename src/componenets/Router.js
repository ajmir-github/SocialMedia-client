import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export { Route };
export function Router({children}) {
  return (
    <BrowserRouter>
      <Routes>
        {children}
      </Routes>
    </BrowserRouter>
  )
}