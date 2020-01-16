import React from 'react';
import { Link } from '@reach/router';
import VoteUpdater from './VoteUpdater';

function ArticleCard(props) {
    const handleClick = (event) => {
        props.manageClick(props.article_id)
    }
    return (
        <div>
        <button onClick={handleClick}> 
            <li className="articleCard">
                <p>Topic: {props.topic}</p>
                <Link to={`/articles/${props.article_id}`}>
                <h3>{props.articleTitle}</h3>
                </Link>
                <p>{props.votes} votes</p>
                <VoteUpdater article_id={props.article_id} votes={props.votes} />
                <p>Posted by: {props.author} at {props.time}</p>
                <p>{props.commentCount} comments</p>
            </li>
        </button>
        </div>
    );
};

export default ArticleCard;

 