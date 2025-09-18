import React, { useContext } from "react";
import {useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import background from '../assets/2022-12-toyota-corolla-sedan-ascent-sport-hybrid-hero-16x9-1.jpg'
import Calander from '../assets/calendar.svg'
import Location from '../assets/location.svg'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import facebook from '../assets/facebook.svg'
import instra from '../assets/instagram.svg'
import Carsdata from '../Reusecode/cardata.json'
import whitearrow from '../assets/whitearrow.svg'
import user from '../assets/user.svg'   
import auto from '../assets/Auto.svg'
import snow from '../assets/snow.svg'
import door from '../assets/Door.svg'
import   DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";
import { da } from "date-fns/locale";


function RentalPage() {
  const locationHook=useLocation()
  
  const fliter = [
    {
      img: Location,
      type: 'Location',
      field: 'location',
      placeholder: 'Search your location',
      inputType: 'text',
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
      placeholder: 'Select return date',
      inputType: 'date',
    },
  ]
  
  
  
  const [cars, setCars] = useState([])
  const [selection, setSelection] = useState({ location: '', pickupDate:null, returnDate:null, brand: null, model: [], search: false })
  const { submission } = useContext(SubmissionContext)
  
  const acceptRental=submission.filter(s=>s.status==='accepted')
  // const carbrand=['Toyota', 'Honda' , 'BMW', 'Tesla', 'Hyundai']
  
  
  useEffect(() => {
    setCars([...Carsdata, ...acceptRental])
  }, [submission])
  
  useEffect(() => {
    const params = new URLSearchParams(locationHook.search)
    const loc=params.get('location') || ''
    const pickupdate=params.get('pickupDate') || ''
    const returndate = params.get('returnDate') || ''
    setSelection((prev) => ({
      ...prev,
      location: loc,
      pickupDate: pickupdate ? new Date(pickupdate) : null,
    returnDate: returndate ? new Date(returndate) : null,
    }))
  
},[locationHook.search])

  
  // const cardata = {
  //   Toyota: ['Corolla', 'Camry', 'RAV4'],
  //   Honda: ['Civic', 'Accord', 'CR-V'],
  //   BMW: ['X5', 'X3', 'M3'],
  //   Tesla: ['Model S', 'Model 3', 'Model X'],
  //   Hyundai: ['Elantra', 'Sonata', 'Tucson'],
  // }


 
  // const carbrand = Object.keys(cardata)
  const brandchange = (value) => {
    setSelection((prev) => ({
      ...prev,
      brand: prev?.brand === value ? null : value,
      model: []
      
    }))
  }

const modelChange = (modelItem) => {
  setSelection((prev) => ({
    ...prev,
    model: prev.model.includes(modelItem)
      ? prev.model.filter((m) => m !== modelItem) // remove if selected
      : [...prev.model, modelItem], // add if not selected
  }))
}
  const brands = [...new Set(cars.map((prev) => prev.brand))] 
const models=[...new Set(cars.filter((m)=>m.brand===selection.brand).map((c)=>c.model))] 

  
  
  // const getCarsToDisplay = () => {
  //   if (!selection.brand) return rental
  //   if (!selection.model) { return Object.values(cardata[selection.brand].flat()) }
 
  // return cardata[selection.brand][selection.model]
 
  // }


  


  
  let displayCars = []
  const lc = (v) => (v ?? '').toString().toLowerCase()


   if (selection.search && selection.location) {
      displayCars = cars.filter((c) =>
        lc(c?.location).includes(lc(selection.location))
      )
     if (selection.brand) {
       displayCars=displayCars.filter((dc)=>dc?.brand===selection.brand)
       
     }
     else if (selection.model.length > 0)
     {
       displayCars=displayCars.filter((dc)=>selection.model.includes(dc?.model))
     }
     
    }


    else{  if (selection.model.length > 0) {
    displayCars = cars.filter((c) => selection.model.includes(c?.model))

   } 
  else if (selection.brand) {
    displayCars = cars.filter((c) => c?.brand === selection.brand)
  }   
  else{
    displayCars = [...cars]
  }
}

  
  // let displayCars = cars
  //   .filter((c) =>selection.brand ? c.brand === selection.brand : true)
  //   .filter((c) => selection.model.length > 0 ? selection.model.includes(c.model) : true) 
  // .fiter((c)=>selection.location.length>0 ? selection.location.toLowerCase().includes(c.location):true)





  
  const searchcars = () =>
  {  
    setSelection((prev)=>({...prev,search:true}))
   
  
  }
  

  
    return (
      <div>
        <div className="h-[800px] w-full flex flex-col justify-start items-start  bg-[url('/carsimg/8_s.jpg')]  bg-center bg-cover bg-no-repeat overflow-hidden py-10  ">
          <div className='px-40'>
            <h1 className='text-[#eaf3f3ea] font-semibold text-[50px] font-Poppins text-start flex justify-start  '>
              Find, book and rent a car easily
              {/* <span className='px-4 text-blue-400'>Easily</span> */}
            </h1>
            <p className='flex justify-start text-[20px] text-start  text-[#eaf3f3ea]'>
              Find a wide selection of cars according to your needs.<br></br>
              Book your car anytime you want.<br></br> For more details you can
              conatct with us.
            </p>
            <div className='flex gap-7 py-6'>
              <img
                src={call}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={sms}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={facebook}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={instra}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center mt-3 '>
          <div
            className='flex m-auto text-center justify-center  2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[1px_2px_12px_rgb(19,24,172,0.3)] bg-white    
            xl:gap-6.5  xl:w-[900px] xl:py-4 xl:px-11   lg:gap-6.5  lg:w-[900px] lg:py-4 lg:px-11  md:gap-6.5  md:w-[700px] md:py-4 md:px-3  sm:w-[620px] sm:gap-1 sm:py-3 sm:px-3  sm:flex-nowrap sm:m-0
           flex-wrap w-[100%]  gap-10 py-4 px-4
            '
          >
            {fliter.map((point, index) => (
              <div
                key={index}
                
                className={`flex w-[150px] 2xl:gap-10.5 2xl:flex-nowrap 2xl:h-[50px] 2xl:w-[300px]  xl:flex-nowrap xl:h-[50px] xl:gap-10.5 xl:w-[200px] lg:flex-nowrap lg:h-[50px]  lg:gap-10.5 lg:w-[250px] md:flex-nowrap md:h-[40px]  md:gap-10.5 md:w-[160px] sm:flex-nowrap  sm:h-[50px]  sm:gap-0  sm:w-[160px] sm:border-2 px-0 sm:border-y-0  sm:border-r-0 ${
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
                      selected={selection[point.field]}
                      onChange={(date)=>setSelection((prev)=>({...prev,[point.field]:date}))}
                      placeholderText={point.placeholder}
                      dateFormat='eee , dd MMM yyyy '
                      className="text-[#6e6c6c] flex   lg:  text-[13px] "
                    />
                  
                  
                  ): (<input
                      type={point.inputType}
                      placeholder={point.placeholder}
                      value={selection[point.field]}
                      onChange={(e) => (setSelection((prev) => ({ ...prev, [point.field]: e.target.value })))}
                    //  onChange={LocationInputDate(point.field,point.inputType)}
                  
                  className="text-[13px]"
                    />)}
                </div>
              </div>
            ))}
            <button
              onClick={searchcars}
              className='bg-[#1572D3] 2xl:px-12 xl:px-10 lg:px-8 md:px-7 sm:px-6   px-9 py-3 m-auto rounded-[8px] text-[#FFFFFF] font-[Poppins] cursor-pointer '>
              Search
            </button>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row    gap-[80px]'>
          <div className='flex flex-col gap-5 '>
            {' '}
            <div className=' sm:w-[140px] w-full bg-white shadow-[1px_2px_12px_rgb(0,0,0,0.3)] flex flex-wrap  sm:flex-col  justify-center gap-3 items-start  mt-6 sm:ml-4  px-5 py-5 rounded-sm '>
              <h className='text-[15px] font-semibold'>Car brands</h>

              {brands.map((Brand, index) => (
                <label key={index} className='flex gap-2'>
                  <input
                    type='checkbox'
                    checked={selection.brand === Brand}
                    onClick={() => brandchange(Brand)}
                  />
                  <span>{Brand}</span>
                </label>
              ))}
            </div>
            {selection.brand && (
              <div className='flex flex-wrap sm:flex-col w-full gap-3 sm:w-[140px]   bg-white  shadow-[1px_2px_12px_rgb(0,0,0,0.3)] items-start sm:ml-4 px-4 py-5 rounded-sm'>
                <h2 className='text-[15px] font-semibold'>
                  {selection.brand} Models:
                </h2>
                {models.map((carmodels, index) => (
                  <label key={index} className='flex gap-2'>
                    <input
                      type='checkbox'
                      checked={selection.model.includes(carmodels)}
                      onClick={() => modelChange(carmodels)}
                    />
                    <span>{carmodels}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className=' flex flex-wrap justify-center py-5 items-center gap-8 2xl:gap-15 xl:gap-10 lg:gap-3 md:gap-10 sm:gap-10 text-start'>
            {displayCars.map((car, index) => (
              <div
                key={index}
                className='py-7 flex-wrap   w-[356px] flex  sm:flex-nowrap  md:w-[240px] sm:w-[296px] flex-col gap-1 bg-white rounded-[9px] shadow-[0_12px_24px_rgb(19,24,104,0.2)]'
              >
                <img
                  src={car.img0}
                  className={`px-6 py-4  h-[200px]  ${
                    index % 2 !== 0 ? 'py-5.5' : ''
                  }`}
                />
              {<h3 className='whitespace-nowrap sm:ml-6 ml-15 sm:text-[18px] text-[20px] font-medium'>
                  {car.Name || `${car.brand} ${car.model}`  } 
                </h3>}  
                
                <div className='flex gap-3  px-15 sm:px-5 py-1'>
                  <img src={car.img1} />
                  <div className='flex gap-1'>
                    <h3 className=' sm:text-[13px] text-[15px] font-medium'>
                      {car.rate}
                    </h3>
                    <h3 className='whitespace-nowrap text-[#959595]   text-[15px] sm:text-[12px]'>
                      {car.review}
                    </h3>
                  </div>
                </div>

                <div className='flex flex-wrap m-auto justify-center  gap-1 sm:gap-0 sm:justify-between sm:px-5 sm:py-1 '>
                  <div className='flex justify-between gap-13 '>
                    <div className='flex gap-1 py-1'>
                      <img src={user} />
                      <p className=' text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                        {car?.passengerseat}
                      </p>
                    </div>
                    <div className='flex gap-1 py-1'>
                      <img src={auto} />
                      <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap '>
                        {car?.transmission}
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-between gap-8'>
                    <div className='flex whitespace-nowrap gap-1 py-1'>
                      <img src={snow} />
                      <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                        {car?.aircool}
                      </p>
                    </div>
                    <div className='flex gap-1 py-1'>
                      <img src={door} />
                      <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap  '>
                        {car?.doors}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between px-10 py-3 sm:px-1 mt-2 sm:py-4 border-1 border-b-0 border-x-0 sm:w-[208px] ml-6 border-[#E0E0E0]'>
                  <h3 className='text-[14px] text-[#595959] font-[300]'>
                    Price
                  </h3>
                  <div className='flex text-[14px]'>
                    <h3 className='text-[16px] font-medium'>{car.price}{' '}Taka</h3>
                    <h3 className='text-[#595959] text-[14px]'>{car.day}</h3>
                  </div>
                </div>
                <button className='flex gap-1 sm:ml-5 m-auto   px-14 bg-[#1572D3] items-center w-[208px] h-[40px] rounded-[8px] text-[14px] text-white cursor-pointer'>
                  <Link to={`/car/${car?.id} `} className='flex gap-1'>
                    Rent now <img src={whitearrow} />
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}
export default RentalPage




//  <label className='flex gap-2'>
//             <input type='checkbox' value='Toyota' />
//             <span>Toyota</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Honda' />
//             <span>Honda</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='BMW' />
//             <span>BMW</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Tesla' />
//             <span>Tesla</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Hyundai' />
//             <span>Hyundai</span>
//           </label>