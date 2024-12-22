import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer';
import SignUp from './Login/SignUp';
import Login from './Login/Login';
import Home1 from "./Login/Home1"
import Men1 from './Men1';
ReactDOM.render(
  <>
  <BrowserRouter>
  <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Men" element={<Men/>}></Route>
      <Route path="/Women" element={<Women/>}></Route>
      <Route path="/Kids" element={<Kids/>}></Route>
      <Route path="/Login/SignUp" element={<SignUp/>}></Route>
      <Route path="/Login/Login" element={<Login/>}></Route>
      <Route path="/Login/Home1" element={<Home1/>}></Route>
      <Route path="/Men1" element={<Men1/>}></Route>
      </Routes>
   <Footer/>
  </BrowserRouter>
  </>,document.getElementById("root")
);
