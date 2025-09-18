import React, { useContext } from "react";
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import carData from '../Reusecode/cardata.json'
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";
function Cardetails() {
  const navigate = useNavigate()
  const { submission,user } = useContext(SubmissionContext)
  
    const { id } = useParams()                                           // get the id from url
  // const cars = carData[id]
   let allCars = [...carData, ...submission]
  const cars=allCars.find((c)=>String(c.id)===id)
    if(!cars) return <h2>Car not found</h2>
  const [zoom, setZoom] = useState(false)
   const location = useLocation()
   const params = new URLSearchParams(location.search)

   const pickupDate = params.get('pickupDate')
   const returnDate = params.get('returnDate')
  
    // const [position, setPosition] = useState({ x: 0, y: 0 })
    // const [dragging, setDragging] = useState(false)
    // const [scale, setScale] = useState(1)
    
    // const handleMousedown = (e) => {
    //     setDragging(true)
    //     setPosition({x:e.clientX - position.x,  y:e.clientY - position.y,})
    // }

    // const handleMousemove = (e) => {
    //     if (dragging)
    //     {
    //         setPosition({ x: e.clientX - position.x, y: e.clientY - position.y ,})
    //     }
    // }
    // const handleMouseup = () => setDragging(false)
    // const handlewheel = (e) => {
    //     e.preventDefault()
    //     const zoomIntensity = 0.1
    //     if (e.deltaY < 0) {
    //     setScale((prev)=>Math.min(prev+zoomIntensity,3))
    //     }
    //     else {
    //         setScale((prev)=>Math.min(prev-zoomIntensity,1))
    //     }
    
    
  // }
 

  const forswitch = () => {
    if (user) {
      navigate('/RentcarAuth',{state:{cars}})
      
    }
    else {
      navigate('/Login', { state: { from: '/RentcarAuth',cars } })
    }
  }
  
    return (
      <>
        <div className='font-[Poppins]'>
          <div className="  w-full bg-[url('/carsimg/HeroimgOfDetails.jpg')] bg-center bg-no-repeat bg-cover  h-[700px]">
            <h1 className='text-blue-50 text-start sm:px-25 px-2 py-10 text-[45px] font-semibold '>
              Get details of your choosen car
            </h1>
          </div>

          <div className='flex flex-wrap lg:flex-nowrap gap-10 2xl:px-20 px-10 mt-6'>
            <div>
              <img
                src={cars.img0}
                alt={cars.name}
                className='sm:w-[500px] sm:max-w-[500px] w-full px-10 py-20 shadow-[1px_2px_19px_rgb(0,0,0,0.1)] hover:scale-106 transition-transform  rounded-sm '
                onClick={() => setZoom(true)}
              />
            </div>
            {zoom && (
              <div
                // onMouseMove={handleMousemove}
                // onMouseUp={handleMouseup}
                // onMouseDown={handleMousedown}
                // onWheel={handlewheel}
                className='fixed inset-0 bg-black/40 backdrop:blur-xl  object-cover bg-opacity-75 flex justify-center items-center z-50'
              >
                <img
                  onClick={() => setZoom(false)}
                  src={cars.img0}
                  alt={cars.name}
                  // onMouseDown={handleMousedown}
                  // transition-transform ${dragging ?'cursor-grabbing' :'cursor-grab'}
                  className={`w-[90%] h-[50%] lg:h-[90%]  bg-white shadow-[1px_2px_19px_rgb(0,0,0,0.1)] px-30  py-30 rounded-sm  `}
                  // style={{transform:`translate(${position.x}px, ${position.y}px) scale(${scale}) `}}
                />
              </div>
            )}
            <div className='text-start flex flex-col gap-2'>
              <h1 className='    text-[30px]   sm:text-[45px]'>{cars.Name}</h1>
              <h3 className='text-[25px] text-[#777]'>Staring at</h3>
              <p className='text-[25px]'>
                {cars.price}
                {cars.day}
              </p>
              <p className='text-[17px] text-[#777] '>{cars.message}</p>
              <button
                onClick={forswitch}
                className='text-start w-[150px] text-white bg-[#1572D3] px-8 py-2 rounded-md '
              >
                {/* <Link to='/RentcarAuth' state={{cars}}>Rent now</Link> */}
                Rent now
              </button>
              <h3 className='text-[25px] text-[#40386d] mt-5'>
                Specifictions:
              </h3>
              <div className='flex gap-7 sm:w-[350px] flex-wrap font-medium text-[#5f5f93]'>
                <div className='flex gap-2'>
                  <img src={'/Decorate/user.svg'} />
                  <h3>{cars?.passengerseat}</h3>
                </div>
                <div className='flex gap-2'>
                  <img src={'/Decorate/Auto.svg'} />
                  <h3>{cars?.transmission}</h3>
                </div>
                <div className='flex gap-2'>
                  <img src={'/Decorate/snow.svg'} />
                  <h3>{cars?.aircool}</h3>
                </div>
                <div className='flex gap-2'>
                  <img src={'/Decorate/Door.svg'} />
                  <h3>{cars?.doors}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )



}




export default Cardetails