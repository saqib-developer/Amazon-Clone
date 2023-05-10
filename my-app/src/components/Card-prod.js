import React from 'react'
import './Card-prod.css'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <span>stars</span>
        </div>
    )
}
