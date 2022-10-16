import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from "./state";
import ThemeProvider from "./utils/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
