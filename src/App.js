import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/HomePage/Home";
import Footer from "./Component/Pages/Footer/Footer";
import Services from "./Component/Pages/Services/Services";
import SignUp from './Component/Pages/SignUp';
import Products from "./Component/Pages/Products";

const App = () => {
     return ( 
      <>
      <Router> 
        <Navbar/>
       <Routes>
        <Route path='/'  element={ <Home/> }/>
        <Route path='/services'  element={ <Services/> }/>
        <Route path='/sign-up'  element={ <SignUp/> }/>
        <Route path='/products'  element={ <Products/> }/>  
      </Routes> 
      <Footer/>
      </Router>
      </>
     )
}
export default App;