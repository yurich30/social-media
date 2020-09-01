import React from 'react';
import {Link} from 'react-router-dom'
import c from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}>
                <Link to='/'>Profile</Link>
            </div>
            <div className={c.item}>
                <Link to="/dialogs">Messages</Link>
            </div>
            <div className={c.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={c.item}>
                <Link to="/music">Music</Link>
            </div>
            <div className={c.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    );
}

export default Navbar;