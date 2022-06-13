import axios from "axios"
import { useEffect, useState } from "react"


const useLocationAPI = searchLocation => {

  const [location, setLocation] = useState(false)

  useEffect(()=>{
    let locationId
    if (searchLocation) {
      locationId = searchLocation
    } else{
      locationId = Math.ceil(Math.random() * 126)
    }
    const url = `https://rickandmortyapi.com/api/location/${locationId}`
    
    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  },[searchLocation])
  return location
}

export default useLocationAPI