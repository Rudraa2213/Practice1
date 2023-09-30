import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Modules/Js/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Modules/Js/Homepage';
import Contact from './Modules/Js/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header></Header>}></Route>
      <Route path='homepage' element={<Homepage/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

