import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useLocation } from "react-router-dom";
import { useState } from "react";
import cardata from '../Reusecode/cardata.json'
import { useContext } from "react";
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";
function Authofrenter(){
    const location = useLocation()
    const navigate=useNavigate()  
    const { cars} = location.state || {}
    // const car=cardata[id]
    const { addSubmission } = useContext(SubmissionContext)
    const [step, setStep] = useState(1)
    const [formdata, setformData] = useState({
      name: '',
      email: '',
      phone: '',
      nid: '',
      license: '',
      location: '',
      image: null,
      description:''
    })
    const handleChange = (e) =>
    {
        const { name, value, files } = e.target
        setformData((prev) => ({
            ...prev, [name]:files ? files[0] :value
        }))
    }


    const stepAuthentication = () => {
        if (step === 1 && (!formdata.name || !formdata.email || !formdata.phone)) {
            alert('Please fill each point')
            return
        }
        if (step === 2 && (!formdata.nid || !formdata.license))
        {
            alert('Please fill the each point')
               return
        }

    



        setStep(step+1)
    }
    const handleSubmit=() =>
    {
        if (!formdata.location || !formdata.description)
        {
            alert('Please complete all points')
        }
      const submissionData = { ...formdata, car: cars }
      // addSubmission(submissionData)
      
      console.log("Data:", {...formdata, cars })
        alert('Car rent request succeed')
        navigate('/Rental')
    }
    
    return (
      <>
        <div>
          <div className=' w-[90%] m-auto pt-7 pb-7  '>
            <div className='flex justify-center '>
              {[1, 2, 3].map((s, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center ${
                    index === 2 ? '' : 'w-[50%]'
                  } `}
                >
                  <div
                    className={` w-18.5 h-18.5 border-3 rounded-full  py-2 px-2 transition-all duration-1000 ${
                      step >s? 'border-blue-600' : ' border-white'
                    }   `}
                  >
                    <div
                      className={`text-[35px] w-13 h-13  rounded-full font-bold ${
                        step >= s
                          ? 'bg-blue-600 transition-all duration-700 '
                          : 'bg-amber-200'
                      }`}
                    >
                      {s}
                    </div>
                  </div>
                  {index < 2 && (
                    <div
                      className={`  flex-1 h-1  transition-all duration-700
              ${step > s ? 'bg-blue-600' : ''}`}
                    ></div>
                  )}
                </div>
              ))}{' '}
            </div>
          </div>

          {step === 1 && (
            <div className='flex flex-col justify-center  items-start  px-15  w-md bg-[#f9fafb]  shadow-[0px_2px_10px_rgb(0,0,0,0.1)] rounded-sm  m-auto py-8 gap-4 '>
              <input
                name='name'
                value={formdata.name}
                onChange={handleChange}
                type='text'
                placeholder='Enter your name'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <input
                type='email'
                name='email'
                value={formdata.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <input
                type='number'
                name='phone'
                value={formdata.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <button
                onClick={stepAuthentication}
                className=' flex  w-[100px] text-start items-start  bg-[#1572D3] py-2 px-7 text-[17px]  font-semibold text-[white] rounded-md '
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className='flex flex-col justify-center  items-start  px-15  w-md bg-[#f9fafb]  shadow-[0px_2px_10px_rgb(0,0,0,0.1)] rounded-sm  m-auto py-8 gap-4 '>
              <input
                type='number'
                name='nid'
                value={formdata.nid}
                onChange={handleChange}
                placeholder='Enter your nid number'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <input
                type='number'
                name='license'
                value={formdata.license}
                onChange={handleChange}
                placeholder='Enter your license number'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <button
                onClick={stepAuthentication}
                className=' flex  w-[100px] text-start items-start  bg-[#1572D3] py-2 px-7 text-[17px]  font-semibold text-[white] rounded-md '
              >
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div className='flex flex-col justify-center  items-start  px-15  w-md bg-[#f9fafb]  shadow-[0px_2px_10px_rgb(0,0,0,0.1)] rounded-sm  m-auto py-8 gap-4 '>
              <input
                name='location'
                value={formdata.location}
                onChange={handleChange}
                type='text'
                placeholder='Enter your location'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              {/* <input
                type='file'
                name='image'
                onChange={handleChange}
                placeholder='Enter your email'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              /> */}
               <input
                type='text'
                name='description'
                value={formdata.description}
                onChange={handleChange}
                placeholder='Enter the reason of rent it'
                className='h-13 border-[#bfb9cf] border-1 rounded-sm w-[350px] px-4 '
              />
              <button
                onClick={handleSubmit} 
                className=' flex  w-[100px] text-start items-start  bg-[#1572D3] py-2 px-7 text-[17px]  font-semibold text-[white] rounded-md '
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </>
    )
} 

export default Authofrenter