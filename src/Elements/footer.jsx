import React from "react";
import logo from '../assets/logoforfooter.svg'
import location from '../assets/locationforfo0oter.svg'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import facebook from '../assets/facebook.svg'
import instra from '../assets/instagram.svg'
import youtubr from '../assets/youtube.svg'
import { useLocation } from "react-router-dom";
export function Footer() {
  const pdesign = 'mt-2 font-normal  text-[14px] text-[#D6D6D6] '
  const Location=useLocation()
    return (
      <>
        <div
          className={`flex flex-col w-full  bg-[#051C34] text-white gap-10 items-start font-[Poppins] ${
            Location.pathname === '/' ? '' : 'mt-25  ' }`}
        >
          <div className='flex ml-5 h-[600px] gap-10 justify-self-start  2xl:gap-50 xl:gap-10 lg:gap-10 md:gap-25 sm:gap-20 mt-15  2xl:ml-60 lg:ml-20 xl:ml-30 md:ml-30  sm:ml-10 2xl:w-[1460px]  2xl:h-[250px]  xl:h-[250px] lg:h-[250px]  sm:h-[400px] border-1 border-x-0 border-t-0  border-[#575757]'>
            <div className='flex flex-col gap-2'>
              <img src={logo} class='h-[32px] w-[116px]' />
              <div className='flex gap-1'>
                <img src={location} />
                <p className={pdesign}>
                  25566 Hc 1, Glenallen, Alaska, 99588, USA
                </p>
              </div>
              <div className='flex gap-1'>
                <img src={call} />
                <p className={pdesign}>+603 4784 273 12</p>
              </div>
              <div className='flex gap-2'>
                <img src={sms} />
                <p className={pdesign}>rentcars@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-2 justify-items-start flex-wrap 2xl:gap-40 xl:gap-20 lg:gap-10 md:gap-10 sm:gap-10'>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Our products</h3>
                <p className={pdesign}>Career</p>
                <p className={pdesign}>Car</p>
                <p className={pdesign}>Packages</p>
                <p className={pdesign}>Features</p>
                <p className={pdesign}>Priceline</p>
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Resources</h3>
                {/* <div class='flex flex-col items-start'> */}
                <p className={pdesign}>Download</p>
                <p className={pdesign}>Help Center</p>
                <p className={pdesign}>Guides</p>
                <p className={pdesign}>Partner Network</p>
                <p className={pdesign}>Cruises</p>
                <p className={pdesign}>Developer</p>
                {/* </div> */}
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>About Rentcars</h3>
                {/* <div> */} <p className={pdesign}>Why choose us?</p>
                <p className={pdesign}>Our Story</p>
                <p className={pdesign}>Press center</p>
                <p className={pdesign}>Advertise</p>
                {/* </div> */}
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Follow Us</h3>
                <div className='flex gap-3 mt-2'>
                  <img src={facebook} />
                  <img src={instra} />
                  <img src={youtubr} />
                </div>
              </div>
            </div>
          </div>
          <div class='2xl:ml-60 xl:ml-30 lg:ml-20 md:ml-27 sm:ml-10 ml-10  mb-10'>
            <p className={pdesign}>
              Copyright 2023 ・ Rentcars, All Rights Reserved
            </p>
          </div>
        </div>
      </>
    )
}


          // <div className='flex justify-between 2xl:px-5  mt-15  xl:px-1 lg:px-10 2xl:w-[100%]  h-[250px] border-w border-1 border-x-0 border-t-0  border-[#575757]'>
