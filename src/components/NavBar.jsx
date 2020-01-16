import React from 'react';
import { Link } from '@reach/router'

const NavBar = () => {
    return (
        <div>
            <nav className="NavBar">
            <Link to={`/`}>Home </Link>
            </nav>
        </div>
    );
};

export default NavBar;