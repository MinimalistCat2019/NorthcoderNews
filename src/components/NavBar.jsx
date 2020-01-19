import React from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => {
    const topicsArray = props.topics;
    
    return (
        <div>
            <nav className="NavBar">
            <Link to={`/`}><h4>Home</h4></Link>
            {topicsArray.map(topic => (
            <Link to={`/${topic}`} key={topic}>{topic}</Link>
            ))}
            </nav>
        </div>
    );
};




export default NavBar;