import React, { useState } from 'react'
import './ProductDetail.css'

export default function ProductDetail(props) {
  const [src, setSrc] = useState(props.images[0])

  return (
    <div className='productDetail'>
      <div className="image-container">
        <div className="main">
          <img src={src} alt="not Found" />
        </div>
        <div className="secondary">
          <img onMouseEnter={() => { setSrc(props.images[0]); }} src={props.images[0]} alt="" />
          <img onMouseEnter={() => { setSrc(props.images[1]) }} src={props.images[1]} alt="" />
          <img onMouseEnter={() => { setSrc(props.images[2]) }} src={props.images[2]} alt="" />
          <img onMouseEnter={() => { setSrc(props.images[3]) }} src={props.images[3]} alt="" />
          <img onMouseEnter={() => { setSrc(props.images[4]) }} src={props.images[4]} alt="" />
        </div>
      </div>
      <div className="desc">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}
