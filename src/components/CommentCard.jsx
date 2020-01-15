import React from 'react';

const CommentCard = (props) => {
    return (
        <main>
            <li>
                <p>{props.author}  |  {props.votes} votes  |  created at {props.created_at}</p>
                <main>{props.body}</main>
                <p>Reply as {props.logged_in_user}</p>
            </li>
        </main>
    );
};

export default CommentCard;