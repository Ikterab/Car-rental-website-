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
    <SubmissionContext.Provider value={{ submission, addSubmission, updateSubmission,acceptedCars,acceptOwnerCar, user , setUser }}>
      {children}
    </SubmissionContext.Provider>
  )
}
