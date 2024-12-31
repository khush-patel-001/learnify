import React from 'react'
import loading from '../../../assets/loading.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div>
      <img src={loading} alt="" className='loader'/>
    </div>
  )
}

export default Loader
