
import './App.css'
import {Dashboard }from './pages/Dashboard'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard/>}/>
       <Route path="/SignUp" element={<SignUp/>}/>

   
  
    </Routes>
    </Router>
  )
}

export default App
