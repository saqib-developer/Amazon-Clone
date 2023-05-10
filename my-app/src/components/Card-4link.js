import React from 'react'
import './Card-4link.css'
import { Link } from "react-router-dom";

export default function Card4link(props) {
    return (
        <div className='card4link'>
            <h2>{props.title}</h2>
            <div className='row'>
                <div className='coloumn'>
                    <img src={`img/gadgets/${props.name1}.jpg`} alt="" />
                    <span>{props.name1}</span>
                </div>
                <div className='coloumn'>
                    <img src={`img/gadgets/${props.name2}.jpg`} alt="" />
                    <span>{props.name2}</span>
                </div>
            </div>
            <div  className='row'>
                <div className='coloumn'>
                    <img src={`img/gadgets/${props.name3}.jpg`} alt="" />
                    <span>{props.name3}</span>
                </div>
                <div className='coloumn'>
                    <img src={`img/gadgets/${props.name4}.jpg`} alt="" />
                    <span>{props.name4}</span>
                </div>
            </div>
            <Link to={props.goto}>See More</Link>
        </div>
    )
}
