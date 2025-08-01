
import './App.css'
import {Dashboard }from './pages/Dashboard'
import Footer from './pages/Footer'
import Questions from './pages/Questions'

function App() {
 
  return (
    <>
     <div className='bg-gradient-to-br from-black to-[#0d1b3d] min-h-screen'>
      <Dashboard/>
      <Questions/>
      <Footer/>
     </div>
    </>
  )
}

export default App
