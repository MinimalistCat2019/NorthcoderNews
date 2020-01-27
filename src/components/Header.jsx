import React from 'react';
import chinatown from '../images/chinatown.jpg'


const Header = () => {
    return (
    <div  styles={{ backgroundImage:`url(${chinatown})` }}>
        <header>
            <h1 className="logo">NORTHCODER NEWS</h1>
        </header>
    </div>
       
        
    );
};

export default Header;