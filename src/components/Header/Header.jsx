import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Header.module.css'

const Header = (props) => {
    return(
        <header className={c.header}>
            <img src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png" alt="logo"/>
            <div>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
        
    );
}

export default Header;