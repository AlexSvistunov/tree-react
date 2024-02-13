import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <button className='button btn-reset'>{text}</button>
  )
}

export default Button