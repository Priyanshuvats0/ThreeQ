
import './App.css'
import {Dashboard }from './pages/Dashboard'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
  
      <Route path="/profile" element={<Profile/>}/>
   
  
    </Routes>
    </Router>
  )
}

export default App
