import React from "react";
import createRoot from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { AuthProvider } from "./AuthContext";

// Wrap our App in BrowserRouter => in the React Router context....
// const Context = React.createContext(defaultValue);
createRoot.render(
 <BrowserRouter>
   <React.StrictMode>
   <AuthProvider>
		  <App />
	  </AuthProvider>
   </React.StrictMode>
 </BrowserRouter>,
  document.getElementById('root')
);

