import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";
import car from "../assets/Carstreetpic.png"


function Rentarpage(){
  
  const navigate=useNavigate()
  const [value, setValue] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    img0: [],
    carnumber: '',
    passengerseat: '',
    transmission: '',
    aircool: '',
    doors: '',
    date: null,
    price: '',
    message: '',
  })
  const [error, setError] = useState({})
  const { user, submission, addSubmission } =useContext(SubmissionContext)
    
  
  const filetoBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
    
  }
  
  const handlechange = (e) => {
       
       let {name,value, files}=e.target
      if (name === 'img0') {
        setValue((prev) => ({ ...prev, img0:[...prev.img0, ...Array.from(files)] }))
        setError((prev) => ({ ...prev, img0: '' }))
      }  
       else {
    setValue((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({ ...prev, [name]: '' }))
  }
        
    }

    const handlesubmit = async(e) => {                               // here name is key and value is the input i give here
        e.preventDefault()
        const newerror = {}
        if (value.fname.length < 3)
        {
         newerror.fname='First name must be in 3 words.'
        }
         if (value.lname.length < 3) {
             newerror.lname = 'Last name must be in 3 words.'
        }
        if (!value.email.includes('@'))
        {
            newerror.email = "Please enter valied email"
            
        }
        if (!/^\d+$/.test(value.phone))
        {
            newerror.phone="Phone number must contain number."
        }
        if (value.phone.length < 10)
        {
           newerror.phone='Enter valied phone number'
        }
        if (value.brand.length < 3)
        {
            newerror.brand="Enter car brand name."
        }
        if (value.model.length < 2)
        {
            newerror.model='Select model'
        }
           
      if (value.img0.length===0)
      {
        newerror.img0='Give car images'
      }
      if (value.carnumber.trim().length === 0)
      {
        newerror.carnumber='Enter your car number.'
      }
      if (value.passengerseat.trim().length === 0)
      {newerror.passengerseat='Please select passenger seat number'

      }
       if (value.transmission.trim().length === 0) {
         newerror.transmission = 'Please select transmission system'
       }
if (value.aircool.trim().length === 0) {
         newerror.air = 'Please select a mode'
       }
if (value.doors.trim().length === 0) {
  newerror.doors = 'Please select door number'
}
  if (!value.date) {
  newerror.date = 'Please select a date.'
}

// Price validation
if (!value.price || isNaN(value.price) || Number(value.price) <= 0) {
  newerror.price = 'Please enter a valid price.'
}


        if (value.message.trim().length===0)
        { newerror.message = 'Enter something' }
        setError(newerror)
        if (Object.keys(newerror).length=== 0)
        {
           
          // if (!user)
          // {
          //   navigate('/Login',{state:{submissiondata:value, from: '/Renter'}})
          // }

        
         
          const img0Base64 = await Promise.all(value.img0.map(file => filetoBase64(file)))
          const submissionJSON = {
            ...value,
            img0: img0Base64,
            submittedAt:new Date().toISOString()
          }
          // setAllSubmission(prev=>[...prev,submissionJSON])
          addSubmission(submissionJSON)
            console.log('Submitted JSON:',submission)
          alert('Your car uploded ')
            setValue({
              fname: '',
              lname: '',
              email: '',
              phone: '',
              brand: '',
              model: '',
              img0: [],
              carnumber: '',
              passengerseat: '',
              transmission:'',
              aircool: '',
              doors: '',
              date: null,
              price:'',
              message: '',
            })
          
        }
        else {
            alert('Try again!')
        }
    

    }
  const handleDownload = () => {
    if (submission.length === 0) {
      alert('No data is here')
      return
    }
    const blob=new Blob([JSON.stringify(submission,null,1)], {type:'application/json'})

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download='all_submission.json'
  link.click()
  }

    return (
      <>
        <div>
          <div
            className='w-full justify-center h-150 items-center  bg-center bg-no-repeat   bg-cover bg-black/40 bg-blend-darken py-66'
            style={{ backgroundImage: `url(${car})` }}
          >
            <h1 className='text-blue-100 text-[44px] text-center font-semibold font-Poppins  '>
              Become a renter
            </h1>
            <p className='text-blue-100 text-[20px] font-semibold'>
              Apply to become a renter. Give valid information and become a
              renter.
            </p>
          </div>
          <div className='py-30 w-full sm:w-[620px]  m-auto mt-7    px-3 rounded-[4px] pt-7 mb-3'>
            <h1 className='text-center text-[27px] font-[300]'>
              Give your information
            </h1>

            <div className='flex flex-col gap-10 flex-wrap justify-center text-[14px] align-center py-10 '>
              <div className=' flex sm:flex-row flex-col justify-center gap-7'>
                <input
                  name='fname'
                  value={value.fname}
                  onChange={handlechange}
                  placeholder='First name*'
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] sm:w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.fname ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
                <input
                  placeholder='Last name*'
                  name='lname'
                  value={value.lname}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.lname ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>
              <div className='flex sm:flex-row flex-col justify-center gap-7'>
                <input
                  placeholder='Email*'
                  name='email'
                  value={value.email}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.email ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                />
                <input
                  placeholder='Phone*'
                  name='phone'
                  value={value.phone}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.phone ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>
              <div className='flex sm:flex-row flex-col justify-center gap-7'>
                <select
                  placeholder='Car brand name*'
                  name='brand'
                  value={value.brand}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.brand ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value='' disabled>
                    Select Car Brand *
                  </option>
                  <option value='Toyota'>Toyota</option>
                  <option value='Honda'>Honda</option>
                  <option value='BMW'>BMW</option>
                  <option value='Tesla'>Tesla</option>
                  {/* <option value='Ford'>Ford</option>
                  <option value='Mercedes'>Mercedes</option> */}
                  <option value='Hyundai'>Hyundai</option>
                </select>

                <select
                  placeholder='Model*'
                  name='model'
                  value={value.model}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.model ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value=''>Select model</option>
                  {value.brand === 'Toyota' && (
                    <>
                      <option value='Corolla'>Corolla</option>
                      <option value='Camry'>Camry</option>
                      <option value='Hybrid'>Hybrid</option>
                      <option vlaue='Supra'>Supra</option>
                      <option vlaue='Supra'>Supra</option>
                      <option vlaue='Frotuner'>Frotuner</option>
                    </>
                  )}
                  {value.brand === 'Honda' && (
                    <>
                      <option value='Civic'>Civic</option>
                      <option value='Accord'>Accord</option>
                      <option value='CR-V'>CR-V</option>
                      <option value='City'>City</option>
                    </>
                  )}

                  {value.brand === 'BMW' && (
                    <>
                      <option value='X5'>X5</option>
                      <option value='X7'>X7</option>
                      <option value='M3'>M3</option>
                      <option value='M5'>M5</option>
                    </>
                  )}
                  {value.brand === 'Tesla' && (
                    <>
                      <option value='Model S'>Model S</option>
                      <option value='Model 3'>Model 3</option>
                      <option value='Model X'>Model X</option>
                      <option value='Model Y'>Model Y</option>
                    </>
                  )}
                  {value.brand === 'Hyundai' && (
                    <>
                      <option value='Elantra'>Elantra</option>
                      <option value='Sonata'>Sonata</option>
                      <option value='Tucson'>Tucson</option>
                      <option value='Santa Fe'>Santa Fe</option>
                      <option value='Creta'>Creta</option>
                      <option value='i20'>i20</option>
                    </>
                  )}
                </select>
              </div>
              <div className='flex sm:flex-row flex-col justify-center gap-7'>
                <div className='flex flex-col justify-center '>
                  {' '}
                  <input
                    type='file'
                    accept='image/*'
                    name='img0'
                    multiple
                    // value={value.img0}
                    onChange={handlechange}
                    placeholder='Give Images of your car*'
                    className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] sm:w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                      error.img0 ? 'border-red-500' : 'border-[#f0f0f0]'
                    }`}
                  />
                  {value.img0.length > 0 && (
                    <div className='flex gap-1 flex-wrap mt-1 '>
                      {value.img0.map((file, index) => (
                        <div key={index} className='relative  flex '>
                          {/* Image Preview */}
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview ${index + 1}`}
                            className='w-[120px] h-[100px] object-cover rounded shadow'
                          />

                          {/* Remove Button */}
                          <button
                            type='button'
                            onClick={() => {
                              const updatedimg0s = value.img0.filter(
                                (_, i) => i !== index
                              )
                              setValue({ ...value, img0: updatedimg0s })
                            }}
                            className='absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded'
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}{' '}
                </div>
                <input
                  placeholder='Car number*'
                  name='carnumber'
                  value={value.carnumber}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.carnumber
                      ? 'border-red-500'
                      : 'border-[#f0f0f0] bg-none'
                  }`}
                />
              </div>
              <div className='flex sm:flex-row flex-col justify-center gap-7'>
                <select
                  name='passengerseat'
                  value={value.passengerseat}
                  onChange={handlechange}
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] sm:w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.passengerseat ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value='' disabled>
                    Select seat
                  </option>
                  <option value='2 Passangers'>2 Passangers</option>
                  <option value='4 Passangers'>4 Passangers</option>
                  <option value='6 Passangers'>6 Passangers</option>
                </select>

                <select
                  name='transmission'
                  value={value.transmission}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.transmission ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value='' disabled>
                    Select transmission
                  </option>
                  <option value='Auto'>Auto</option>
                  <option value='Manual'>Manual</option>
                </select>
              </div>
              <div className='flex sm:flex-row flex-col justify-center gap-7'>
                <select
                  name='aircool'
                  value={value.aircool}
                  onChange={handlechange}
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] sm:w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.aircool ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value='' disabled>
                    Select car cooling system
                  </option>
                  <option value='AC'>Air Conditioning </option>
                  <option value='Motorfan'>Blower Motor/Fan</option>
                </select>

                <select
                  name='doors'
                  value={value.doors}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.doors ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value='' disabled>
                    Select door
                  </option>
                  <option value='2 Doors'>2 Doors</option>
                  <option value='4 Doors'>4 Doors</option>
                </select>
              </div>
              <div className=' flex sm:flex-row flex-col justify-center gap-7'>
                <input
                  type="date"
                  name='date'
                  value={value.date}
                  onChange={handlechange}
                  placeholder='Date*'
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] sm:w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.date ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
                <input
                  placeholder='Set your price*'
                  name='price'
                  value={value.price}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] sm:w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.price ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>

              <input
                placeholder='Give more details of your car*'
                name='message'
                value={value.message}
                onChange={handlechange}
                className={`sm:w-[590px] ml-1 border-[1px] rounded-[4px] h-[150px]  border-solid border-[#f0f0f0] pb-20 px-4   placeholder:text-[16px] text-gray-700 ${
                  error.message ? 'border-red-500' : 'border-[#f0f0f0]'
                }`}
              />
            </div>
            <div className='h-[40px] w-[110px] bg-[#1f4e3d] ml-2 font-roboto  px-6 py-2 rounded-[5px]  '>
              <button
                className='tracking-[2px] text-white font-[600]'
                onClick={handlesubmit}
              >
                Apply
              </button>
              {/* <button onClick={handleDownload} className='h-[40px] w-[180px] bg-[#2563eb] text-white font-[600] rounded-[5px]'>
            Download All Submissions
          </button> */}
            </div>
          </div>
        </div>
      </>
    )
}
export default Rentarpage
// bg - [url('/src/assets/Bagroundcar.jpg')] 