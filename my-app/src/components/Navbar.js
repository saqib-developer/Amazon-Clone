import React from 'react'
import './Navbar.css'
import { Search } from '@mui/icons-material';

export default function Navbar() {
    return (
        <header>
            <a className='top-logo' href="*"><img src="img/amazon-logo-wob.png" alt="amazon logo" /></a>
            <div className="input-field">
                <input placeholder={'Search Amazon'} type="search" name="" id="" />
                <button>
                    <svg dataTestid={Search}></svg>
                </button>
            </div>
            <span>Sign in</span>
            <span>Returns & Orders</span>
            <button>
                <img src="img/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" alt="not found" />
                <span>Cart</span>
            </button>
        </header>
    )
}
