import React from 'react'
import './CardProduct2.css'

export default function CardProduct2(props) {
    return (
        <div className='CardProduct2'>
            <img src={props.src} alt="" />
            <div>
                <h3>{props.name}</h3>
                <br />
                <p>{props.desc}</p>
                <br />
                <button onClick={() => props.removeFromCart(props.id)}>Remove from Cart</button>
            </div>
        </div>
    )
}
