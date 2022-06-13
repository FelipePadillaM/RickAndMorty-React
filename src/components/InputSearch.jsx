import React from 'react'

const InputSearch = ({setSearchLocation}) => {

  const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.firstChild.value)
  }

  return (
    <div>
      <div className='header'>
        <div className='header__form'>
          <form action="" onSubmit={searchLocation}>
            <input className='header__form-input' type="text" />
            <button className='header__form-button'>Search</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default InputSearch