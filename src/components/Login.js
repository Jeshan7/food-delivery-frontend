import React, { useState } from 'react';
import '../assets/css/Homepage.scss';

const Login = () => {
    return (
        <div className="Login">
            <div className="login-header" >
                <span> Hello There !</span>
            </div>
            <form className="login-form">
                <div>
                    <input type="email" 
                           className="form-control login-email"
                           name="email"
                           placeholder="Enter Your name" />
                </div>
                <div>
                    <input type="password" 
                           className="form-control login-password"
                           name="password"
                           placeholder="Enter Password" />
                </div>
                <div className="button-wrapper">
                    <button type="submit" className="login-btn">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
