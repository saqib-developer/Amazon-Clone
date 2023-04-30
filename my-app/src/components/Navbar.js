import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <a className='top-logo' href="*"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            <a href='/'>Deliver to<br /><b>Pakistan</b></a>
            <div className="input-field">
                <input placeholder={'Search Amazon'} type="search" name="" id="" />
                <button>
                    <img src="img/search_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                </button>
            </div>
            <a href='/'>Hellow, Sign in<br /><b>Account & Lists</b></a>
            <a href='/'>Returns<br /><b>& Orders</b></a>
            <a href='/' className='cart'>
                <div>
                <img src="img/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                </div>
                <span><b>Cart</b></span>
            </a>
        </header>
    )
}
