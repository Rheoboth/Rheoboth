import React from "react";
import createRoot from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

// Wrap our App in BrowserRouter => in the React Router context....
createRoot.render(
 <BrowserRouter>
   <React.StrictMode>
     <App />
   </React.StrictMode>
 </BrowserRouter>,
  document.getElementById('root')
);

