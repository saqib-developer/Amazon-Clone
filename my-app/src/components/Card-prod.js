import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <h3>Airpods 3 pro</h3>
            <p>{props.desc}</p>
            <span>stars</span>
        </div>
    )
}
