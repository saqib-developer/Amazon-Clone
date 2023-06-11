import React from 'react'
import './Card-prod.css'
import {Link} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className='container'>
            <Link to={`/${props.id}`}>Learn more</Link>

                <button onClick={() => props.addToCart(props.id)} className="addtocart">
                <ShoppingCartOutlinedIcon />
            </button>
        </div>
        </div >
    )
}
