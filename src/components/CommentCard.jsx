import React from 'react';
import RemoveCommentButton from './RemoveCommentButton';

const CommentCard = (props) => {
    return (
        <main>
            <li>
                <p>{props.author}  |  {props.votes} votes  |  created at {props.created_at}</p>
                <main>{props.body}</main>
                <p>Reply as {props.logged_in_user}</p>
                <RemoveCommentButton removeComment={props.removeComment} comment_id={props.comment_id}/>
            </li>
        </main>
        
    );
};

export default CommentCard;