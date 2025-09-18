import React from "react";
import Honda from '../assets/Honda.svg'
import Jaguar from '../assets/Jaguar.svg'
import Nissan from '../assets/Nissan.svg'
import Volve from '../assets/Volve.svg'
import Audi from '../assets/Audi.svg'
import Acura from '../assets/Acura.svg'
import location1 from '../assets/location-tick.svg'
import calander from '../assets/Calendar1.svg'
import car from '../assets/car.svg'
    const steps = [
      {
        img: location1,
        text: 'Choose location',
        description: 'Choose your and find your best car',
      },
      {
        img: calander,
        text: 'Pick-up date',
        description: 'Select your pick up date and time to book your car',
      },
      {
        img: car,
        text: 'Book your car',
        description: 'Book your car and we will deliver it directly to you',
      },
    ]
export function Carbrand() {
      

    return (
      <>
        <div className='Companies' class=' w-full text-center mt-10 font-[Poppins]'>
          <div className='text-center'>
            <h3 class='font-[Poppins] text-[14px]  font-medium px-5 py-3 border-none  bg-[#ECF5FF] text-[#1572D3] w-[150px] m-auto whitespace-nowrap'>
              HOW IT WORK
            </h3>
            <h1 class='sm:text-[40px] text-[36px] px-4 font-[Poppins] font-medium sm:px-0  mt-6'>
              Rent with following 3 working steps
            </h1>
          </div>
          <div className='flex flex-wrap  sm:flex-nowrap sm:justify-center sm:gap-1 2xl:gap-45 xl:gap-20 gap-5 sm:ml-18 mt-26 '>
            {steps.map((steps, index) => (
              <div
                key={index}
                class='flex flex-col justify-center items-center '
              >
                <div class='h-[112px] w-[112px] bg-[#ECF5FF] px-7.5 py-7.5 rounded-[15px]'>
                  <img src={steps.img} class='h-[48px] w-[48px] ' />
                </div>
                <h2 class='text-[20px] whitespace-nowrap font-medium'>
                  {steps.text}
                </h2>
                <p class='2xl:mt-4 2xl:px-auto 2xl:py-auto  xl:mt-4 xl:px-auto xl:py-auto lg:w-[249px]  lg:mt-4 lg:px-5 lg:py-1  md:mt-4 md:px-4 md:py-1 sm:text-[#6D6D6D] sm:text-[14px] sm:mt-4 sm:px-4 sm:py-1 text-[14px] px-35 text-[#6D6D6D]'>
                  {steps.description}
                </p>
              </div>
            ))}
          </div>
          <div
            className='images'
            class='flex flex-wrap m-auto gap-1 w-[150px]  sm:flex-nowrap  2xl:gap-[120px] xl:gap-[60px] lg:gap-[50px] md:gap-[20px] sm:gap-[15px]  2xl:w-[200px] xl:w-[160px] lg:w-[120px] md:w-[100px] sm:w-[90px] mt-40 xl:ml-9 lg:ml-10 md:ml-10 sm:ml-7 '
          >
            <img src={Honda} />
            <img src={Jaguar} />
            <img src={Nissan} className="sm:px-0 px-8"/>
            <img src={Volve} />
            <img src={Audi} />
            <img src={Acura} />
          </div>
        </div>
      </>
    )
    
} 


