import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
// import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
