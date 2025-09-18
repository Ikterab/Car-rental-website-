import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from '../assets/Frame 2.svg'
import Car from '../assets/wholecar.png'
// import Frame from '../assets/Frame.png'
import Location from '../assets/location.svg'
import Calander from '../assets/calendar.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export function Advertisement() {
   const navigate=useNavigate()
  const fliter = [
    {
      img: Location,
      type: 'Location',
      field: 'location',
      inputType: 'text',
      placeholder: 'Search your location',
    },
    {
      img: Calander,
      type: 'Pickup date',
      field: 'pickupDate',
      placeholder: 'Select date',
      inputType: 'date',
    },
    {
      img: Calander,
      type: 'Return date',
      field: 'returnDate',
      placeholder: 'Select date',
      inputType: 'date',
    },
  ]
   
  const [filter, setFilter] = useState({
    location: '',
    pickupDate: null,
    returnDate: null,
  })

  const handleSearch = () => {
    const query = new URLSearchParams({
      location: filter.location,
      pickupDate: filter.pickupDate ? filter.pickupDate.toISOString() : '',
      returnDate: filter.returnDate ? filter.returnDate.toISOString() : '',
    }) 
    navigate(`/Rental?${query}`)
  }


    return (
      <>
        <div
          className='Advertisement'
          class='flex flex-col justify-center align-middle w-full font-Poppins'
        >
          <div
            className='container1'
            class='flex flex-wrap justify-center w-full 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap 2xl:align-middle  '
          >
            <div
              className='subcontainer1 '
              class='w-[250px] h-[103px] flex flex-col gap-[10px] 2xl:mt-30 xl:mt-30 lg:mt-10 2xl:ml-18 xl:ml-18 lg:ml-18 md:ml-12 sm:ml-8 '
            >
              <h1 class=' whitespace-nowrap 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[30px] sm:text-[30px] text-[34px]  text-[#242424] font-[Poppins] break-none font-semibold [word-spacing:3px]'>
                Find, book and<br></br>rent a car{' '}
                <span class='text-[#1572D3] font-semibold'>Easily</span>
              </h1>
              <p class='text-[18px] text-[#272727] 2xl:w-[345px] xl:w-[345px] lg:w-[345px] md:w-[340px] sm:w-[250px] 2xl:h-[103px] xl:h-[103px] lg:h-[103px]  md:h-[99px] sm:h-[99px] 2xl:px-0   font-[500] '>
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <img
                class='relative 2xl:top-6 xl:top-6 lg:top-6 md:top-5 '
                src={App}
              />
            </div>
            <div className='subcontainer2' class=' relative  '>
              {/* <img class='w-[803px] h-[866px] overflow-hidden relative bottom-18 right-[-300px]' src={ Frame} />
                        <img class='overflow-hidden  w-[1048px] h-[537px] relative bottom-170 left-75'src={Car} /> */}
              <img
                className='2xl:h-[866px] 2xl:w-[800px]  xl:w-[600px] xl:h-[600px] lg:w-[450px] lg:h-[500px]          
                xl:relative  xl:bottom-[98px] lg:relative  lg:bottom-[74px] md:w-[400px] md:relative  md:bottom-[80px] sm:w-[350px]  sm:relative  sm:bottom-[80px] sm:mt-auto ml-auto  w-[250px] mt-40                '
                src={Car}
              />
            </div>
          </div>
          <div
            className='container2'
            class='flex 2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[0_6px_12px_rgb(19,24,172,0.2)] bg-white  relative 2xl:bottom-50  2xl:left-80 
            xl:gap-6.5  xl:w-[900px] xl:py-4 xl:px-11 xl:bottom-30  xl:left-30  lg:gap-6.5  lg:w-[900px] lg:py-4 lg:px-11 lg:bottom-18 lg:left-20 md:gap-6.5  md:w-[700px] md:py-4 md:px-3 md:bottom-18 md:left-10 sm:w-[620px] sm:gap-1 sm:py-3 sm:px-3 sm:left-2 sm:bottom-18 sm:flex-nowrap sm:m-0
           flex-wrap w-[100%] m-auto gap-10 py-4 px-4
            '
          >
            {fliter.map((point, index) => (
              <div
                key={index}
                className='Filter'
                class={`flex w-[150px] 2xl:gap-10.5 2xl:flex-nowrap 2xl:h-[50px] 2xl:w-[300px]  xl:flex-nowrap xl:h-[50px] xl:gap-10.5 xl:w-[200px] lg:flex-nowrap lg:h-[50px]  lg:gap-10.5 lg:w-[250px] md:flex-nowrap md:h-[40px]  md:gap-10.5 md:w-[160px] sm:flex-nowrap  sm:h-[50px]  sm:gap-0  sm:w-[160px] sm:border-2 px-0 sm:border-y-0  sm:border-r-0 ${
                  index === 0
                    ? 'sm:border-x-0'
                    : 'border-[#ACACAC] 2xl:px-[39.5px] xl:px-[39.5px] lg:px-[39.5px] md:px-[25.5px] '
                }  
                  xl:w-[200px] xl:gap-10 lg:gap-3`}
              >
                <img src={point.img} className='' />
                <div class='relative  m-auto  2xl:right-10 2xl:w-[200px] xl:w-[100px] lg:w-[100px] md:w-[80px] sm:w-[70px] xl:right-8 md:right-9 sm:right-5'>
                  <h3
                    class={` 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[13px] font-medium text-[#3E3E3E] relative  whitespace-nowrap ${
                      index === 0
                        ? 'relative  2xl:right-10 xl:right-4 lg:right-4 md:right-3 sm:right-2'
                        : 'relative 2xl:right-8 xl:right-1 lg:right-1 md:right-1 sm:right-0'
                    }`}
                  >
                    {point.type}
                  </h3>
                  {point.inputType === 'date' ? (
                    <DatePicker
                      selected={filter[point.field]}
                      onChange={(date) =>
                        setFilter((prev) => ({ ...prev, [point.field]: date }))
                      }
                      placeholderText={point.placeholder}
                      dateFormat='eee , dd MMM yyyy '
                      className=' flex  text-[13px] border-0 outline-0 focus:outline-0 '
                    />
                  ) : (
                    <input
                      type={point.inputType}
                      placeholder={point.placeholder}
                      value={filter[point.field]}
                      onChange={(e) =>
                        setFilter((prev) => ({
                          ...prev,
                          [point.field]: e.target.value,
                        }))
                      }
                      //  onChange={LocationInputDate(point.field,point.inputType)}
                      className='text-[13px] border-0 outline-0 focus:outline-0'
                    />
                  )}
                </div>
              </div>
            ))}
            <button
              className='bg-[#1572D3] 2xl:px-12 xl:px-10 lg:px-8 md:px-7 sm:px-6   px-9 py-3 m-auto rounded-[8px] text-[#FFFFFF] font-[Poppins] cursor-pointer '
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </>
    )
}



// ;<img
//   className='z-60 2xl:relative 2xl:bottom-[98px] 2xl:h-[866px] 2xl:w-[800px] 2xl:-right-195 xl:w-[600px] xl:h-[600px] lg:w-[450px] lg:h-[500px]          
//                 xl:relative xl:-right-85 xl:bottom-[98px] lg:relative lg:-right-60 lg:bottom-[74px] md:w-[400px] md:relative md:-right-18 md:bottom-[80px] sm:w-[350px] sm:relative sm:-right-2 sm:bottom-[80px]
//                 '
//   src={Car}
// />