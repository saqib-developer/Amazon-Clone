import React from 'react'
import './Card-4link.css'

export default function Card4link(props) {
    return (
        <div className='card4link'>
            <h2>{props.title}</h2>
            <div className='row'>
                <a href='*' className='coloumn'>
                    <img src={props.src1} alt="" />
                    <span>Headsets</span>
                </a>
                <a href='*' className='coloumn'>
                    <img src={props.src2} alt="" />
                    <span>Keyboards</span>
                </a>
            </div>
            <div  className='row'>
                <a href='*' className='coloumn'>
                    <img src={props.src3} alt="" />
                    <span>Chairs</span>
                </a>
                <a href='*' className='coloumn'>
                    <img src={props.src4} alt="" />
                    <span>CPU</span>
                </a>
            </div>
            <a href="*">See More</a>
        </div>
    )
}
