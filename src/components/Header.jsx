import React from 'react';


const Header = (props) => {
    return (
       
        <header>
            <h1>Northcoder News</h1>
            <p>Welcome, {props.logged_in_user}</p>
        </header>
       
        
    );
};

export default Header;