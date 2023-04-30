import React from 'react'
import './Card-1link.css'

export default function Card1link(props) {
  return (
    <div className='Card1link'>
      <h2>{props.title}</h2>
      <img src={props.src} alt="" />
      <a href="*">Shop Now</a>

    </div>
  )
}
