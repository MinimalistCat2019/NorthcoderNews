import React from 'react';
import { Link } from '@reach/router'
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1>Northcoder News</h1>
             <p>You are logged in as {props.logged_in_user}</p>
        </header>
        
    );
};

export default Header;