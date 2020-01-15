import React from 'react';
import { Link } from '@reach/router';

function ArticleCard(props) {
    const handleClick = (event) => {
        props.manageClick(props.article_id)
    }
    return (
        <div>
        <button onClick={handleClick}> 
            <li>
                <p>Topic: {props.topic}</p>
                <Link to={`/articles/${props.article_id}`}>
                <h3>{props.articleTitle}</h3>
                </Link>
                <p>Posted by: {props.author} at {props.time}</p>
                <p>{props.commentCount} comments</p>
            </li>
        </button>
        </div>
    );
};

export default ArticleCard;

 