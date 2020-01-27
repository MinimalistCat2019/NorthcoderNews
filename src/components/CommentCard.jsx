import React from 'react';
import RemoveCommentButton from './RemoveCommentButton';
import VoteUpdater from './VoteUpdater';

const CommentCard = (props) => {
    return (
        <main>
            <section className="comment-card">
                <p className="submittedBy">{props.author}  posted at {props.created_at}</p>
                <VoteUpdater comment_id={props.comment_id} votes={props.votes}/>
                <main className="comment-body">{props.body}</main>
               {props.logged_in_user === props.author && 
                <RemoveCommentButton removeComment={props.removeComment} comment_id={props.comment_id} comment_author={props.author} logged_in_user={props.logged_in_user}/>
               }
            </section>
        </main>
        
    );
};

export default CommentCard;