import React from 'react'
import './Card-4link.css'

export default function Card4link(props) {
    return (
        <div className='card4link'>
            <h2>{props.title}</h2>
            <div className='row'>
                <a href='*' className='coloumn'>
                    <img src={props.src1} alt="" />
                    <span>{props.name1}</span>
                </a>
                <a href='*' className='coloumn'>
                    <img src={props.src2} alt="" />
                    <span>{props.name2}</span>
                </a>
            </div>
            <div  className='row'>
                <a href='*' className='coloumn'>
                    <img src={props.src3} alt="" />
                    <span>{props.name3}</span>
                </a>
                <a href='*' className='coloumn'>
                    <img src={props.src4} alt="" />
                    <span>{props.name4}</span>
                </a>
            </div>
            <a href="*">See More</a>
        </div>
    )
}
