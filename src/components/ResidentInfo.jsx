  import React from 'react'
import useResidentInfoAPI from '../hooks/useResidentInfoAPI'
  
  const ResidentInfo = ({residentUrl}) => {

    const residentInfo = useResidentInfoAPI(residentUrl)
    return (
      <article className='residentInfo'>
        <img src={residentInfo?.image} alt="" />
        <ul>
          <li><b>Name: </b>{residentInfo?.name}</li>
          <li><b>Status: </b>{residentInfo?.status}</li>
          <li><b>Origin: </b>{residentInfo?.origin.name}</li>
          <li><b>Episode Where Appear: </b>{residentInfo?.episode.length}</li>
        </ul>
      </article>
    )
  }
  
  export default ResidentInfo