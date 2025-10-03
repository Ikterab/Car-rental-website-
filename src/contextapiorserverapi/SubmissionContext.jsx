import { createContext, useState, useEffect } from 'react'
import { TbSquareRoundedLetterJFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
export const SubmissionContext = createContext()

export function SubmissionProvider({ children }) {
  // const navigate =useNavigate()
  // const [submission, setAllSubmission] = useState([])
  // const addSubmission = (newData) => {
  //   setAllSubmission((prev) => [...prev, newData])
  // }
 


  const storedowneresdata = JSON.parse(localStorage.getItem('submission')) || []
  const [submission, setAllSubmission] = useState(storedowneresdata)
  
   const storedAccepted = JSON.parse(localStorage.getItem('acceptedCars')) || []
  const [acceptedCars, setAcceptedCars] = useState(storedAccepted)

 
  const addrentersubmission=JSON.parse(localStorage.getItem('renter')) || []
const [renter, setRenter]=useState(addrentersubmission)

const storedAcceptedRentals = JSON.parse(localStorage.getItem("acceptedRentals")) || []
const [acceptedRentals, setAcceptedRentals] = useState(storedAcceptedRentals)


const storedNotification=JSON.parse(localStorage.getItem('notification'))
const [notification,setNotification]=useState(storedNotification) || []

  const addSubmission = (newData) => {
    setAllSubmission((prev) => {
      
      const totalsubmission = [...prev, newData]
      try {
        localStorage.setItem('submission',JSON.stringify(totalsubmission))
      } catch(error) {
        console.error('Failed to save submission to localstorage',error)
}
return totalsubmission
    })
    
  }

  const updateSubmission = (index, updatedData) => {
    setAllSubmission((prev) => {
      const newSubmission=[...prev]
      if (!newSubmission[index]) return prev
      newSubmission[index] = { ...newSubmission[index], ...updatedData }
       try {
         localStorage.setItem('submission', JSON.stringify(newSubmission))
       } catch (error) {
         console.error('Failed to update submission in localStorage', error)
       }
       return newSubmission
    })
  
}

const acceptOwnerCar = (index) => {
    setAllSubmission((prev) => {
      const selectedCar = prev[index]
      if (!selectedCar) return prev

      // Move to acceptedCars
      const updatedAccepted = [...acceptedCars, { ...selectedCar, status: 'accepted' }]
      setAcceptedCars(updatedAccepted)
      localStorage.setItem('acceptedCars', JSON.stringify(updatedAccepted))

      // Remove from pending
      const updatedSubmissions = prev.filter((_, i) => i !== index)
      localStorage.setItem('submission', JSON.stringify(updatedSubmissions))

      return updatedSubmissions
    })
  }



//Renter data

const Aplliedrenters=(renterdata)=>{
  setRenter((prev)=>{
    const Renterdata=[...prev,renterdata]
localStorage.setItem('renter',JSON.stringify(Renterdata))

return Renterdata
})

}

const acceptRenters=(index)=>{
  setRenter((prev)=>{
    const selected=prev[index]
    if(!selected) return prev
    const updateAccepted=[...acceptedRentals,{...selected,status:'accepted'}]
setAcceptedRentals(updateAccepted)
localStorage.setItem("acceptedRentals",JSON.stringify(updateAccepted))
addNotification(`Your request for ${selected?.car?.Name} has been accepted`)
const updatedRenter = prev.filter((i) => i !== index)
    localStorage.setItem("renter", JSON.stringify(updatedRenter))

    return updatedRenter


  }) 

}


const addNotification=(message,userid)=>{
const newNotification={
  id:Date.now(),
  message,
  userid,
  read:false
}
const updated=[...notification, newNotification]
setNotification(updated)
localStorage.setItem('notification',JSON.stringify(updated))



}


const markAsRead = (id) => {
  const updated = notification.map(n =>
    n.id === id ? { ...n, read: true } : n
  )
  setNotification(updated)
  localStorage.setItem("notification", JSON.stringify(updated))
}

 const loggedinUser=JSON.parse(localStorage.getItem('loggedinuser'))  || null
  const [user, setUser] = useState(loggedinUser)
 
  useEffect(() => { 
    if (user) {
      localStorage.setItem('loggedinuser', JSON.stringify(user)) 
      
    }
    else {
      localStorage.removeItem('loggedinuser')
    }

    }, [user])
    
  
  
  return (
    <SubmissionContext.Provider value={{ submission, addSubmission, updateSubmission,acceptedCars,acceptOwnerCar, renter, Aplliedrenters,acceptRenters, user , setUser,notification, addNotification, markAsRead }}>
      {children}
    </SubmissionContext.Provider>
  )
}
