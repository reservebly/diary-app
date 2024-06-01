import './App.css';
import Dlogin from './Dlogin';
import React from 'react';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import Calendar from "./components/Calendar";




 export default function App() {

  return (
   
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Dlogin/>}></Route>
      <Route path="/calendar" exact element={<Calendar/>}></Route>
      
    </Routes>
    </BrowserRouter>

    </>
    
    
  )
}

