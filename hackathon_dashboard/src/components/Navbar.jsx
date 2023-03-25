import React from 'react';
import classes from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = props => {
    return(
        <div className={classes.navbar}>
            <img src={logo} alt="" />
        </div>
    );
};

export default Navbar;