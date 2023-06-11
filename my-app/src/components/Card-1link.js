import React from 'react'
import './Card-1link.css'
import { Link } from "react-router-dom";

export default function Card1link(props) {
  return (
    <div className='Card1link'>
      <h2>{props.title}</h2>
      <img src={`img/gadgets/${props.title}.jpg`} alt="" />
      <Link to={'/all'}>Shop Now</Link>

    </div>
  )
}
