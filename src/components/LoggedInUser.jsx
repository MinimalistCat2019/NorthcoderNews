import React from 'react';


const LoggedInUser = (props) => {
    return (
       
        <div className="user-welcome">
            <p>Welcome, {props.logged_in_user}</p>
        </div>
       
        
    );
};

export default LoggedInUser;