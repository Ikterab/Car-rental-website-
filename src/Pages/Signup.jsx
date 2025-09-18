import React from "react";
import { useNavigate, Link} from "react-router-dom";
import { AiFillEye , AiFillEyeInvisible} from "react-icons/ai";
import { useState } from "react";
function Signuppage() {
  const navigate=useNavigate()
// const [error, setError] = useState({
//   email: '',
//   phone: '',
//   address: '',
//   password: '',
//   confirmpass: ''})
const [value, setValue] = useState({
  name:'',
  email: '',
  phone: '',
  address: '',
  password: '',
  confirmpassword: '',
})

  const [error, setError] = useState({})
  const [show, setShow]=useState({password:false, confirmpassword:false})
  const handleChange = (e) => {
   let {name,value}=e.target
    setValue((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({...prev,[name]:''}))
 }  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newError = {}
    if (value.name.length < 3)
    {
      newError.name='Name must be minimum 3 words.'
    }
    if (!value.email.includes('@')) {
      newError.email = 'Enter valid email id.'
    }
    if (!/^\d+$/.test(value.phone)) {
      newError.phone = 'Phone must contain only numbers.'
    }

    if (value.phone.length < 10) {
   newError.phone = 'Phone number must be in 10 digits.'
    }
 if (value.address.length < 5) {
   newError.address = 'Address must be at least 5 characters.'
 }
 if (value.password.length < 6) {
   newError.password = 'Password must be at least 5 characters.'
 }
if (value.password !==value.confirmpassword) {
  newError.confirmpassword = 'Password do not match'

    }
  setError(newError)  
   
    if (Object.keys(newError).length === 0) {
      localStorage.setItem('signupuser', JSON.stringify(value))
        console.log('✅ User stored in localStorage:', value)
      alert('Register successfull')
      navigate('/Login')
    } 
    


  setValue({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmpassword: '',
  })  

}
  return (
    <>
      <div className='mt-15 m-auto  flex flex-col justify-center items-center gap-4  bg-[#ffffff]    px-4 py-11 sm:w-md w-xs rounded-xl shadow-[0_1px_10px_rgba(15,30,104,0.2)]'>
        <h1 className='text-[24px]'>Register</h1>
        <input
          name='name'
          value={value.name}
          onChange={handleChange}
          autoComplete="off"
          className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
            error.name
              ? 'border-red-500'
              : 'border-[#bfb9cf]  focus:border-[#9984de] '
          } `}
          placeholder='Name*'
        />
        {error.name && (
          <p className='text-red-500 text-[13px] h-[4px] py-0'>{error.name}</p>
        )}
        <input
          name='email'
          value={value.email}
          onChange={handleChange}
          className={`sm:w-[350px] w-[250px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
            error.email
              ? 'border-red-500'
              : 'border-[#bfb9cf]  focus:border-[#9984de] '
          } `}
          placeholder='Email*'
        />
        {error.email && (
          <p className='text-red-500 text-[13px] h-[4px]'>{error.email}</p>
        )}

        <input
          name='phone'
          value={value.phone}
          onChange={handleChange}
          className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
            error.phone
              ? 'border-red-500'
              : 'border-[#bfb9cf]  focus:border-[#9984de] '
          } `}
          placeholder='Phone*'
        />
        {error.phone && (
          <p className='text-red-500  text-[13px] h-[4px] m-none'>
            {error.phone}
          </p>
        )}

        <input
          name='address'
          value={value.address}
          onChange={handleChange}
          className={`sm:w-[350px] w-[250px] h-[48px] rounded-lg border  px-2 focus:ring-0 ${
            error.address
              ? 'border-red-500'
              : 'border-[#bfb9cf]  focus:border-[#9984de] '
          } `}
          placeholder='Address*'
        />
        {error.address && (
          <p className='text-red-500 text-[13px] h-[4px]'>{error.address}</p>
        )}

        <div className='w-full relative '>
          <input
            type={show.password ? 'text' : 'password'}
            name='password'
            value={value.password}
            onChange={handleChange}
            className={`sm:w-[350px] w-[250px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.password
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
            placeholder='Password*'
          />
          <button
            type='button'
            onClick={() =>
              setShow((prev) => ({ ...prev, password: !prev.password }))
            }
            className='absolute bottom-1/5 right-1/8  -translate-y-1/2 text-gray-400'
          >
            {show.password ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </div>

        {error.password && (
          <p className='text-red-500 text-[13px] h-[4px]'>{error.password}</p>
        )}
        <div className=' w-full relative'>
          <input
            type={show.confirmpassword ? 'text' : 'password'}
            name='confirmpassword'
            value={value.confirmpassword}
            onChange={handleChange}
            className={`sm:w-[350px] w-[250px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.confirmpassword
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
            placeholder='Confirm password*'
          />

          <button
            type='button'
            onClick={() =>
              setShow((prev) => ({
                ...prev,
                confirmpassword: !prev.confirmpassword,
              }))
            }
            className='absolute bottom-1/5 right-1/8  -translate-y-1/2 text-gray-400'
          >
            {show.confirmpassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </div>

        {error.confirmpassword && (
          <p className='text-red-500 text-[13px] h-[4px]'>
            {error.confirmpassword}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className='sm:w-[350px] w-[250px] rounded-md h-13 text-[17px] text-white font-semibold bg-[#1572D3]'
        >
          {' '}
          Sign Up{' '}
        </button>
        <p className=''>
          Already have an account ?{' '}
          <span className='text-blue-600 hover:text-red-500 border-b-1'>
            <Link to='/Login'>Sign in</Link>{' '}
          </span>
        </p>
      </div>
    </>
  )
}
export default Signuppage





//  className={`sm:w-[350px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
//               error.name
//                 ? 'border-red-500'
//                 : 'border-[#bfb9cf]  focus:border-[#9984de] '
//             } `}