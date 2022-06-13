import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useLocationAPI from './hooks/useLocationAPI'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import InputSearch from './components/InputSearch'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  const location = useLocationAPI(searchLocation)

  return (
    <div className="App">
      <InputSearch setSearchLocation={setSearchLocation}/>
      <Location
        location={location}
      />
      <div className='content'>
        {
          location?.residents?.map(resident => (
            <ResidentInfo 
              residentUrl={resident}
              key={resident}
            />))
        }
      </div>
      
    </div>
  )
}

export default App
