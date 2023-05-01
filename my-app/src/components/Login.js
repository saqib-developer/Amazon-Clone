import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <form onSubmit={props.account} id='login'>
            <Link className='signin-logo' to={'/'}><img src="img/amazon-logo-black.png" alt="" /></Link>
            <div className="signin">
                <h1>{props.purpose}</h1>

                {
                    props.purpose === 'Sign in' ?
                        <></>
                        :
                        <>
                            <b><label htmlFor="name">Name:</label></b>
                            <input id='loginname' required type="text" />
                            <br />
                        </>
                }

                <b><label htmlFor="email">Mobile phone number or email:</label></b>
                <input id='loginemail' required autoComplete='username' type="email" />
                <br />

                <b><label htmlFor="password">Password:</label></b>
                <input id='loginpassword' required autoComplete='current-password' type="password" />

                <span style={{ color: 'red' }} id="showError"></span>

                <button type='submit'>Continue</button>
                <p>This is an Amazon Clone made for Practice and <br />Fun purposes only!</p>
            </div>
            {
                props.purpose === 'Sign in' ?
                    <Link className='create-button' to="/signup">Create your Amazon account</Link> :
                    <Link className='create-button' to="/signin">Already have an account! Sign in</Link>
            }
            <div className="footer">
                <span>&copy; This is an Amazon Clone made for Practice and Fun purposes only!</span>
            </div>
        </form>
    )
}
