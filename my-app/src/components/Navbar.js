import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar(props) {

    const handleHover = () => {
        console.log('Button is hovered!');
        document.getElementById('menu').style.display = 'flex'
    };

    const handleHoverEnd = () => {
        console.log('Hover ended!');
        document.getElementById('menu').style.display = 'none'
    };
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
            <Link onMouseEnter={handleHover} onMouseLeave={handleHoverEnd} to='/signin'>
                Hello, {props.name}<br /><b>Account & Lists</b>
            <div className="menu" id='menu'>
                {
                    props.loggedin ?
                        <>
                            <Link to='/sellsomething'><b>Sell Something</b></Link>
                            <a onClick={props.logout} href='/' ><b>Log out</b></a>
                        </>
                        :
                        <>
                            <Link to='/signin'>Log In</Link>
                        </>
                }
            </div>
            </Link>
            <a href='/'>Returns<br /><b>& Orders</b></a>
            <a href='/' className='cart'>
                <div>
                    <ShoppingCartOutlinedIcon />
                </div>
                <span><b>Cart</b></span>
            </a>
        </header>
    )
}
