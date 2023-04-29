import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <a className='top-logo' href="*"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            <div className="input-field">
                <input placeholder={'Search Amazon'} type="search" name="" id="" />
                <button>
                    <img src="img/search_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                </button>
            </div>
            <span>Sign in</span>
            <span>Returns & Orders</span>
            <button className='cart'>
                <div>
                    <span style={{color: 'orange', fontSize:17}}>0</span>
                <img src="img/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                </div>
                <span>Cart</span>
            </button>
        </header>
    )
}
