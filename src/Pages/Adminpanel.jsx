import React, { useContext, useEffect } from "react";
import cardata from '../Reusecode/cardata.json'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { LuUser } from 'react-icons/lu'
import Logo from '../assets/Frame 993.svg'
import { TbReport } from 'react-icons/tb'
import hamburger from '../assets/menu-burger-horizontal-svgrepo-com.svg'
import close from '../assets/closeicon.svg'
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";



export function AdminPannel() {
const { submission, updateSubmission,acceptedCars,renter,acceptRenters } = useContext(SubmissionContext)
  console.log(submission)
  const navigate = useNavigate()
  const [open, setOpen] = useState(null)

  const totalcars=cardata.length + acceptedCars.length
//   const acceptOwnercars = (index) => {
//     const carupdated = [...submission]
//     carupdated[index].status = 'accepted'
//     addSubmission(carupdated)
//     localStorage.setItem('submission',JSON.stringify(carupdated))
// }
  
  const acceptOwnercars = (index) => {
   
   try{ 
    updateSubmission(index,{status:'accepted'})

   }
   catch(err){
    console.error('Errors:',err)
   }
  }



  const acceptRequest=(index)=>{
    acceptRenters(index)
  }

  
  
  
  
  
  const logout = () => {
  navigate('/Login')
}
  
  
  const handledeals = (p) => {
    setOpen((prev) =>( prev===p ? null : p))
 }
  
  return (
    <>
      <div className='flex'>
        <div className={`flex h-[1000px] fixed lg:relative  lg:left-0 w-[300px]  bg-blue-50 transition-all duration-300 px-4 ${open==='sidebar' ? "left-0 " :"-left-[300px] "} `} >
          <ul className='flex flex-col gap-4 px-2 py-15 font-semibold font-[poppins] '>
            <li className="flex gap-3">
              <img src={Logo} className='h-[50px] w-[200px]' />
              <img className={`lg:hidden `} 
              onClick={()=>{setOpen(null)}}
              src={close} />
            </li>

            <li className='flex gap-2 text-[20px]'>
              <MdDashboard size={25} style={{ height: '35px' }} />
              Dahboard
            </li>
            <li
              onClick={() => handledeals('owner')}
              className='flex gap-2 text-[20px]'
            >
              <LuUser size={25} style={{ height: '35px' }} />
              Rentar Deals
            </li>
            <li
              onClick={() => handledeals('rental')}
              className='flex gap-2 text-[20px]'
            >
              <LuUser size={25} style={{ height: '35px' }} />
              Rental Deals
            </li>
            <li className='flex gap-2 text-[20px]'>
              <TbReport style={{ height: '35px' }} />
              Reports
            </li>
            <li onClick={logout} className='flex gap-2 text-[20px] '>
              <TbLogout style={{ height: '35px' }} />
              Logout
            </li>
          </ul>
        </div>

        <div>
          <div className="flex gap-4 ">
            <img  className="w-5  lg:hidden flex"
            onClick={()=>setOpen('sidebar')}
            src={hamburger}  />
          <h1 className='flex justify-center  text-2xl py-10'>
            Reservation List
          </h1>
          </div>
          
          <div className='flex justify-center gap-10 2xl:ml-20 px-10 '>
            <div className='displayNumbers'>
              <h3>Pending</h3>
            </div>
            <div className='displayNumbers'>
              <h3 className="text-[20px]" >Total cars</h3>
              <p className="text-[20px] font-bold text-[blue] py-7">{totalcars}</p>
            </div>
            <div className='displayNumbers'>
              <h3>Rent cars</h3>
            </div>
          </div>
          {open === 'rental' && (
            <div>
              <div className='grid grid-cols-5 py-8 px-4 gap-4 text-[17px] font-semibold'>
                <div className="">No.</div>
                {/* <div>Pickup</div>
                <div>Return</div> */}
                <div>location</div>
                <div>Name</div>
                <div>Price</div>
                <div>Action</div>
              </div>
              {renter.map((customer,index)=>(
                <div key={index} className="grid grid-cols-5 px-4 gap-10 text-[17px] font-semibold items-center">
                  <div>{index+1}</div>
                  <div>{customer.location}</div>
                  <div>{customer.name}</div>
                  <div>{customer?.car?.price}taka</div>
                  {/* <div>{index+1}</div>
                  <div>{index+1}</div>
                  <div>{index+1}</div> */}
                <div><button onClick={()=>acceptRequest(index)} className="py-1 px-4 bg-blue-500 hover:bg-blue-400 text-white rounded-md cursor-pointer">Action</button></div>
                </div>
              ))

              }
            </div>
          )}  


{open==='owner' &&  (

<div>

<div className="grid grid-cols-9 gap-4 px-10 py-6 text-[17px] font-semibold border-b">
  <div>No.</div>
  <div>Name</div>
  <div>Date</div>
  <div>Brand</div>
  <div>Model</div>
  <div>Contact</div>
  <div>Email</div>
  <div>Price</div>
  <div>Action</div>
</div>

{submission.map((renter, index) => (
  <div
    key={index}
    className="grid grid-cols-9 gap-4 px-10 py-4 border-b items-center text-[15px]"
  >
    <div>{index + 1}</div>
    <div>{renter?.fname} {renter?.lname}</div>
    <div>{renter?.date}</div>
    <div>{renter?.brand}</div>
    <div>{renter?.model}</div>
    <div>{renter?.phone}</div>
    <div>{renter?.email}</div>
    <div>{renter?.price}</div>
    <div>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        onClick={() => acceptOwnercars(index)}
      >
        Accept
      </button>
    </div>
  </div>
))}



</div>)}

 </div>
      </div>
    </>
  )
}







        //  {open === 'owner' && (
        //     <div className="">
        //       <ul className='flex py-8 px-10   ext-[17px] font-'>
        //         <li className="px-6">No.</li>
        //         <li className="px-6">Name</li>
        //         <li className="px-6" >Date</li>
        //         {/* <li>location</li> */}
        //         <li className="px-15">Brand</li>
        //         <li className="px-15">Model</li>
        //         <li className="px-15">Contact</li>
        //         <li className="px-15">Email</li>
        //         <li className="px-10">Price</li>
        //       </ul>
        //       {submission.map((renter, index) => (
        //         <div className="flex">
        //           <ul
        //             key={index}
        //             className='flex py-8 px-10  text-[17px] '
        //           >
        //             <li className="px-4">{index + 1}</li>
        //             <li  className="px-4">
                      
        //               {renter?.fname}
        //               {renter?.lname}
        //             </li>
        //             <li className="px-4">{renter?.date}</li>
        //             {/* <li>{renter?.location}</li> */}
        //             <li className="px-4">{renter?.brand}</li>
        //             <li className="px-4">{renter?.model}</li>
        //             <li className="px-4">{renter.phone}</li>
        //             <li className="px-4">{renter?.email}</li>
        //             <li className="px-4">{renter?.price}</li>
        //           </ul>
        //           <button  className="cursor-pointer" onClick={() => acceptOwnercars(index)}>Accept</button>
        //         </div>
        //       ))}
        //     </div>
        //   )}
