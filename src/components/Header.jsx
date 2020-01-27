import React from 'react';
// import LoggedInUser from './LoggedInUser';
import chinatown from '../images/chinatown.jpg'


const Header = () => {
    return (
    <div  styles={{ backgroundImage:`url(${chinatown})` }}>
        <header>
            <h1 className="logo">NORTHCODER NEWS</h1>
            {/* <LoggedInUser logged_in_user={props.logged_in_user} /> */}
        </header>
    </div>
       
        
    );
};

export default Header;