import axios from "axios"
import { useEffect, useState } from "react"

const useResidentInfoAPI = (residentUrl) => {

  const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    
    axios.get(residentUrl)
      .then(res => setResidentInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return residentInfo
}

export default useResidentInfoAPI