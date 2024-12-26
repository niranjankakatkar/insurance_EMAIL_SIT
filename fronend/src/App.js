import React from "react";
import Login from './pages/Login_auth'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Dashboard' element={<Home/>}></Route>
      
    </Routes>
    
   </BrowserRouter>
   
  );
}

export default App;
