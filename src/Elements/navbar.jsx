import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import hamburger from '../assets/menu-burger-horizontal-svgrepo-com.svg' 
import Logo from '../assets/Frame 993.svg'
import close from '../assets/closeicon.svg' 
import Frame from '../assets/Frame.png'
import { Carbrand } from "./companies";
import { Offers } from "./whochoose";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";

export function Navbar() {
  // const navigate = useNavigate()
  const {user,setUser}=useContext(SubmissionContext)
  const location = useLocation()
  const home=location.pathname==='/'
  const notHome=location.pathname!=='/'
  const [open, setOpen] = useState(null)
  const [menu,setMenu]=useState(false)
  // const [user,setUser]=useState(null)
  // const whochooseRef = useRef(null)
  // const howitworkRef = useRef(null)
  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' })
  //   setOpen(false)
  // }
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }
  const handlelogout = () => {
    setUser(null)
    setMenu(false)
  }
//   useEffect(() => {
//     const loggedinUser = JSON.parse(localStorage.getItem('loggedinuser'))
// setUser(loggedinUser)
//   }, [])
//   const handleLogout = () => {
//     localStorage.removeItem('loggedinUser')
//     setUser(null)
//     setOpen(null)
//     navigate('/')
  //   }
  
  return (
    <>
      <div className='flex justify-between w-full  font-Poppins text-[#484848]  font-[500] text-[16px] z-10  bg-transparent    xl:px-20    lg:px-3 md:whitespace-nowrap'>
        <ul
          className={`flex flex-col gap-7 items-start w-[300px] fixed z-100 h-[100%] bg-[#c6dcf1] px-7 py-9 transition-all duration-300 ${
            open === 'sidebar' ? 'left-0' : '-left-[300px]'
          }`}
        >
          <li className='flex justify-center gap-12 px-'>
            <Link to='/'>
              {' '}
              <img src={Logo} />
            </Link>
            <img
              src={close}
              className='cursor-pointer'
              onClick={() => setOpen(null)}
            />
          </li>
          {notHome && (
            <>
              <li className='sideitem'>
                <Link to='/'>Home</Link>
              </li>
            </>
          )}
          <li className='sideitem'>
            <Link to='/Renter'>Become a renter</Link>
          </li>
          <li className='sideitem'>
            <Link to='/Rental'>Rental deals</Link>
          </li>
          {home && (
            <>
              <li
                className='sideitem'
                onClick={() => scrollToSection('howitwork')}
              >
                How it work
              </li>
              <li
                className='sideitem'
                onClick={() => scrollToSection('whochoose')}
              >
                Why choose us
              </li>{' '}
            </>
          )}
        </ul>
        {open === 'sidebar' && (
          <div
            className='colordrop'
            onClick={() => {
              setOpen(null)
            }}
          ></div>
        )}
        <div className='flex px-3 py-3 justify-between w-[100%] 2xl:py-5 xl:py-3 lg:py-3 md:py-5 md:px-5 sm:px-5 sm:py-5 z-60'>
          <div className='logocontainer' class='items-start flex gap-2  '>
            <img
              src={hamburger}
              className='w-[20px]  lg:hidden md:w-[20px] sm:w-[20px] cursor-pointer'
              onClick={() => setOpen('sidebar')}
            />
            <Link to='/'>
              <img
                src={Logo}
                className='2xl:h-[25.25px] 2xl:w-[116px]  xl:h-[25.25px] xl:w-[116px] lg:h-[25.25px] lg:w-[116px]'
              />
            </Link>
          </div>
          <div className='flex 2xl:gap-10 xl:gap-10 lg:gap-5'>
            <ul className=' hidden   lg:flex   xl:gap-20 lg:gap-10 md:hidden sm:hidden list-none  '>
              {notHome && (
                <>
                  <li className='cursor-pointer'>
                    <Link
                      to='/'
                      className={`hover:text-blue-400 ${
                        location.pathname === '/' ? 'text-blue-600' : ''
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                </>
              )}

              <li className='cursor-pointer hover:text-blue-400'>
                <Link
                  to='/Renter'
                  className={`${
                    location.pathname === '/Renter' ? 'text-blue-600' : ''
                  }`}
                >
                  Become a renter
                </Link>
              </li>
              <li className='cursor-pointer'>
                <Link
                  to='/Rental'
                  className={` hover:text-blue-400 ${
                    location.pathname === '/Rental' ? 'text-blue-600' : ''
                  }`}
                >
                  Rental deals
                </Link>
              </li>
              {home && (
                <>
                  <li
                    className='cursor-pointer hover:text-blue-400'
                    onClick={() => scrollToSection('howitwork')}
                  >
                    How it work
                  </li>
                  <li
                    className='cursor-pointer hover:text-blue-400'
                    onClick={() => scrollToSection('whochoose')}
                  >
                    Why choose us
                  </li>
                </>
              )}
            </ul>

            {user ? (
              <div className='relative'>
                <div
                  // onClick={() => {
                  //   setOpen(open === 'menu' ? null : 'menu')
                  // }}
                  onClick={() => {
                    setMenu((prev)=>!prev)
                  }}
                  className={`w-11  h-11 rounded-[50%] bg-blue-500    text-white  text-[23px] border-2 border-red-500     py-1  font-semibold `}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {menu && (
                  <div className='absolute lg:left-0  right-0  mt-2 bg-white shadow-md rounded-md w-[150px]'>
                    <h3>Hello ,{user.name.toUpperCase()}</h3>

                    <button
                      onClick={handlelogout}
                      className='w-full text-left px-4 py-2 text-red-400 hover:bg-gray-100'
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <ul className='flex gap-[10px] 2xl:gap-[55px] xl:gap-[55px] lg:gap-[55px] md:gap-[55px] sm:gap-[55px] '>
                <li className='cursor-pointer'>
                  <Link
                    to='/Login'
                    className={`hover:text-blue-400 ${
                      location.pathname === '/Login' ? 'text-blue-600' : ''
                    }`}
                  >
                    Sign in
                  </Link>
                </li>
                <div>
                  <Link
                    to='/Signup'
                    className={`hover:text-blue-400 ${
                      location.pathname === '/Signup' ? 'text-blue-600' : ''
                    }`}
                  >
                    <li className='cursor-pointer sm:h-[43px] sm:w-[125px] relative bottom-2 sm:px-[32px] sm:py-[9px] px-[20px] py-[6px] text-white bg-[#1572D3] rounded-[8px]'>
                      Sign up
                    </li>
                  </Link>
                </div>{' '}
              </ul>
            )}
          </div>
        </div>

        {/* <div>
          <div ref={howitworkRef}>
            <Carbrand />
          </div>
          <div ref={whochooseRef}>
            <Offers />
          </div>
        </div> */}
      </div>
    </>
  )   
    
}




//  <ul className='flex gap-[10px] 2xl:gap-[55px] xl:gap-[55px] lg:gap-[55px] md:gap-[55px] sm:gap-[55px] '>
//    <li className='cursor-pointer'>
//      <Link to='/Login'>Sign in</Link>
//    </li>
//    <li className='cursor-pointer sm:h-[43px] sm:w-[125px] relative bottom-2 sm:px-[32px] sm:py-[9px] px-[20px] py-[6px] bg-[#1572D3] rounded-[8px]'>
//      <Link to='/Signup'>Sign up</Link>
//    </li>
//  </ul>