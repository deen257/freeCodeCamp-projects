import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  console.log(bcg)
  const handleClick =() => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
    setTimeout(() =>{
      setAlert(false)
    },3000)
  }
  return (
    <article onClick={handleClick} className={`color ${index} > 10 && 'color-light' `} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'> copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
