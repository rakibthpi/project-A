import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div className='menu'>
            <div className='container'>
                <div className='Main_menu'>
                    <div className='logo_area'>
                        <a href="/home"><img src={logo} alt="photos" /></a>
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/home">About</a></li>
                        <li><a href="/home">Contact</a></li>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/home">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;