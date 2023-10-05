import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Modules/Js/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Modules/Js/Homepage';
import Contact from './Modules/Js/Contact';
import Counter from './Modules/Js/Counter';
import Myaxios from './Modules/Js/Myaxios';
import Myaxdetail from './Modules/Js/Myaxdetail';
import Errorpage from './Modules/Js/Errorpage';
import Sign,{SigningIn} from './Modules/Js/Sign';
import Myservices from './Modules/Js/Myservices';
import Repairmobilepage from './Modules/Js/Subrouting/Repairmobilepage';
import Replacemobile from './Modules/Js/Subrouting/Replacemobile';
import Buymobilepage from './Modules/Js/Subrouting/Buymobilepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header></Header>}></Route>
      <Route path='homepage' element={<Homepage/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='State' element={<Counter></Counter>}></Route>
      <Route path='Myax' element={<Myaxios></Myaxios>}/>
      <Route path='Myax/data/:id' element={<Myaxdetail/>}/>
      <Route path='Signup' element={<Sign/>}/>
      <Route path='Signin' element={<SigningIn/>}/>
      <Route path='myservice' element={<Myservices/>}>
        <Route path='repairmob' element={<Repairmobilepage/>}></Route>
        <Route path='replacemob' element={<Replacemobile/>}></Route>
        <Route path='buymob' element={<Buymobilepage/>}></Route>
        <Route path='*' element={<Errorpage/>}></Route>
      </Route>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

