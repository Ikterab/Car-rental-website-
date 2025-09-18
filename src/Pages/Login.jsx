import React, { useContext } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'
import carpic from '../assets/photo-1565043666747-69f6646db940.avif'
import carpic1 from'../assets/pngtree-beautiful-background-for-car-rental-advertising-image_16188411.jpg'

function Loginpage() {
  const navigate = useNavigate()
  const location=useLocation()
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [show, setShow] = useState({ password: false })

  const {setUser}=useContext(SubmissionContext)
  // const [error, setError] = useState({ name:false, email:false, password:false,})
  //  const [error, setError] = useState({ name:'', email:'', password:'',})
   const [error, setError] = useState({ })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue((prev) => ({ ...prev, [name]: value }))

    setError((prev) => ({ ...prev, [name]: '' }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const admindata = {
      name: 'Ton',
      email: 'ton@gmail.com',
      password:'admin1234'
      
    }
    if (value.name === admindata.name && value.email===admindata.email &&  value.password===admindata.password) {
      alert('Welcome to admin pannel')
      navigate('/Adminpanel')   
      setValue({ name: '', email: '', password: '' })
return      
    }





    const storedUser = JSON.parse(localStorage.getItem('signupuser'))
    if (!storedUser)
    {
      alert('No accounts found')
      navigate('/Signup')
      return
    }
    // let haserror = false
    // const newError = {name:'', email:'', password:''}
    const newError={}
    if (value.name.length < 3) {
      newError.name = 'Invalied name'
      // haserror = true
    }
    if (!value.email.includes('@')) {
      newError.email = 'Please enter valied email'
      // haserror = true
    }
    if (value.password.length < 6) {
      newError.password = 'Please enter valied password'
      // haserror = true
    }

    setError(newError)



    if (Object.keys(newError).length === 0) {
      if (  storedUser &&  storedUser.name===value.name && storedUser.email === value.email && storedUser.password === value.password) {
             console.log('✅ Login successful!')

        alert("Login successfull!")
        // localStorage.setItem('loggedinuser', JSON.stringify(storedUser))
        setUser(storedUser)
        
        if (location.state?.from) {
          navigate(location?.state?.from, { state: { cars: location.state.cars } })
        }

// if (location.state?.submissiondata) {
//   const pending = location.state.submissiondata
//   navigate(location.state.from || '/', { state: { autoSubmit: pending } })
// }
else {
  navigate('/')
}
       
      
      }
      else {
        console.log('❌ Invalid credentials:', value)
        alert('Invalied email or password')
          navigate('/Signup')
      }
    }
    setValue({ name: '', email: '', password: '' })

  }
  //#FFFDD0
  // #edf2f8
  return (
    <>
      <div>
        <div className='mt-15 m-auto  flex flex-col justify-center items-center gap-10  bg-[#ffffff] py-10 sm:px-5 sm:py-20  sm:w-md w-xs rounded-xl shadow-[0_1px_10px_rgba(15,30,104,0.2)]'>
          <h1 className='text-[24px]'>Log in Here </h1>
          <input
            placeholder='Name*'
            name='name'
            value={value.name}
            onChange={handleChange}
            className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.name
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
          />
          {error.name && <p>{error.name}</p>}
          <input
            placeholder='Eamil*'
            name='email'
            value={value.email}
            onChange={handleChange}
            className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.email
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
          />
          {error.email && <p>{error.email}</p>}
          <div className='relative'>
            <input
              placeholder='Password*'
              name='password'
              type={show.password ? 'text' : 'password'}
              value={value.password}
              onChange={handleChange}
              className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
                error.password
                  ? 'border-red-500'
                  : 'border-[#bfb9cf]  focus:border-[#9984de] '
              } `}
            />
            <button
              type='button'
              onClick={() =>
                setShow((prev) => ({ ...prev, password: !prev.password }))
              }
              className='absolute right-4 bottom-1/5 text-[#9e9a9a]'
            >
              {show.password ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
          {error.password && <p>{error.password}</p>}
          <button
            type='button'
            onClick={handleSubmit}
            className='sm:w-[350px]  w-[250px] rounded-md h-13 t-[14px] text-white cursor-pointer font-semibold bg-[#1572D3]'
          >
            Login
          </button>
          <p>
            Don't have any account ?{' '}
            <span className='text-blue-500 border-b-1 hover:text-red-500'>
              <Link to='/Signup'>Create account</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
export default Loginpage