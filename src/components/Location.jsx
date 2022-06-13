import React from 'react'

const Location = ({location}) => {
  
  return (
    <article className='location'>
      <h2>{location?.name}</h2>
      <ul className='location__list'>
        <li><b>Type: </b>{location?.type}</li>
        <li><b>Dimension: </b>{location?.dimension}</li>
        <li><b>Population: </b>{location?.residents?.length}</li>
      </ul>

    </article>
  )
}

export default Location