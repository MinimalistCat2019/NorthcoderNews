import React from 'react';
import RemoveCommentButton from './RemoveCommentButton';
import VoteUpdater from './VoteUpdater';

const CommentCard = (props) => {
    return (
        <main>
            <li className="commentCard">
                <p>{props.author}  |  {props.votes} votes  |  created at {props.created_at}</p>
                <VoteUpdater comment_id={props.comment_id} votes={props.votes}/>
                <main>{props.body}</main>
               {props.logged_in_user === props.author && 
                <RemoveCommentButton removeComment={props.removeComment} comment_id={props.comment_id} comment_author={props.author} logged_in_user={props.logged_in_user}/>
               }
            </li>
        </main>
        
    );
};

export default CommentCard;