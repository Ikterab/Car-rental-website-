import { useState } from 'react'
import { useRef } from 'react'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Elements/navbar'
import { Advertisement } from './Elements/Advertisement'
import { Carbrand } from './Elements/companies'
import { Offers } from './Elements/whochoose'
import { Rentals } from './Elements/rentaldeal'
import { Testimonial } from './Elements/Testimonial'
import { DownloadeApp } from './Elements/downloadeapp'
import { Footer } from './Elements/footer'
import Homepage from './Pages/Home'
import RentalPage from './Pages/Rental'
import Rentarpage from './Pages/Renter'
import  Loginpage from './Pages/Login'
import Signuppage from './Pages/Signup'
import Cardetails from './Pages/CarDetails'
import Authofrenter from './Pages/RentcarAuth'
import { AdminPannel } from './Pages/Adminpanel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //  const howitworkRef = useRef(null);
  // const whochooseRef = useRef(null);
  return (
    <>
      {/* <div>
        
      </div>  */}
      <Router>
        <div className='min-h-screen flex flex-col '>
          <Routes>
            <Route path='/Adminpanel' element={<AdminPannel />} />
            <Route path='/*'
              element={
                <>
                  <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/Renter' element={<Rentarpage />} />
              <Route path='/Rental' element={<RentalPage />} />
              <Route path='/Login' element={<Loginpage />} />
              <Route path='/Signup' element={<Signuppage />} />
              <Route path='/car/:id' element={<Cardetails />} />
              <Route path='/RentcarAuth' element={<Authofrenter />} />
            </Routes>
            <Footer />
             </>
            }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App














{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}