import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar(props) {
    return (
        <header>
            <a className='top-logo' href="/"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            <a href='/' style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnOutlinedIcon />
                <div>Deliver to<br /><b>Pakistan</b></div>
            </a>
            <div className="input-field">
                <input placeholder={'Search Amazon'} type="search" name="" id="" />
                <button>
                    <SearchOutlinedIcon style={{ fontSize: '2.32em' }} />
                </button>
            </div>
            <Link to='/signin'>Hello, {props.name}<br /><b>Account & Lists</b></Link>
            <a href='/'>Returns<br /><b>& Orders</b></a>
            <a onClick={props.logout} href='/'><b>Log out</b></a>
            <Link  to='/sellsomething'><b>Sell Something</b></Link>
            <a href='/' className='cart'>
                <div>
                    <ShoppingCartOutlinedIcon />
                </div>
                <span><b>Cart</b></span>
            </a>
        </header>
    )
}
