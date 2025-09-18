import React from "react";
import iphon from '../assets/iPhone 14 Pro Space Black Mockup.png'
// import App from '../assets/Frame 2.svg'
import Appleapp from '../assets/AppleAPPstore.svg'
import Googleplay from '../assets/Google Play.png' 
import frame from '../assets/UP.svg'
export function DownloadeApp() {
    return (
      <>
        <div className='flex flex-wrap  md:flex-nowrap  justify-between w-full mt-2 whitespace-none font-[Poppins]'>
          <div className='relative w-full '>
            <img src={frame} />
          </div>
          <div className='absolute ml-5 mt-10 sm:mt-35 2xl:ml-30 xl:ml-30 lg:ml-5 md:ml-5 sm:ml-5 '>
            <h3 className='text-[15px] font-medium h-[42px] w-[146px] ml-7 text-[#1572D3]  bg-[#cde2f9] rounded-[8px] py-2.5'>
              DOWNLOAD
            </h3>
            <div className='2xl:leading-15 xl:leading-15 lg:leading-15 md:leading-7 sm:leading-14 leading-10 text-start '>
              <h1 className='text-[35px] font-[600] 2xl:text-[48px] 2xl:font-[600] 2xl:text-[#282828]  2xl:px-5  xl:text-[48px] xl:font-[600] xl:text-[#282828]  xl:px-5 lg:text-[48px] lg:font-[600] lg:text-[#282828]  lg:px-5 md:text-[30px] md:font-[600] md:text-[#282828] md:px-0 sm:text-[48px]  sm:font-[600] sm:text-[#282828] sm:px-4  '>
                Download Rentcars{' '}
              </h1>
              <h1 className='text-[35px] font-[600] 2xl:px-3 2xl:text-[48px] 2xl:font-[600] 2xl:text-[#282828]  xl:px-3 xl:text-[48px] xl:font-[600] xl:text-[#282828] lg:px-3 lg:text-[48px] lg:font-[600] lg:text-[#282828] md:px-3 md:text-[30px] md:font-[600] md:text-[#282828]  sm:text-[48px] sm:font-[600] sm:text-[#282828] sm:px-3 '>
                App for <span className='text-[#1572D3]'>FREE</span>
              </h1>
            </div>

            <p className='text-[17px] px-1 sm:text-[17px]  font-normal 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-3 2xl:mt-9 xl:mt-9 lg:mt-9 md:mt-2 pt-1 text-start'>
              For faster,easir booking and exclusive deals.
            </p>
            <div className='flex mt-1 gap-5 ml-3.5 2xl:mt-10 xl:mt-10 lg:mt-5 md:mt-5 sm:mt-5'>
              <img src={Googleplay} className='sm:w-[175px] w-[100px]' />
              <img src={Appleapp} className='sm:w-[175px] w-[100px]' />
            </div>
          </div>
          <div>
            <img
              src={iphon}
              className='2xl:mt-1 xl:mt-1 lg:mt-1 md:mt-1 h-full w-full '
            />
          </div>
        </div>
      </>
    )
}