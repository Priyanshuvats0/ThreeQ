
import './App.css'
import {Dashboard }from './pages/Dashboard'
import Footer from './pages/Footer'
import Questions from './pages/Questions'

function App() {
 
  return (
    <>
     <div className='min-h-screen bg-gradient-to-br from-[#020204] to-[#1e1e1e]'>
      <Dashboard/>
      <Questions/>
      <Footer/>

     </div>
    </>
  )
}

export default App
