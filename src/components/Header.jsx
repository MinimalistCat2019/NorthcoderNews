import React from 'react';
import LoggedInUser from './LoggedInUser';


const Header = (props) => {
    return (
       
        <header>
            <h1>Northcoder News</h1>
            <LoggedInUser logged_in_user={props.logged_in_user} />

        </header>
       
        
    );
};

export default Header;