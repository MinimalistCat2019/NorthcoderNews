import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = (props) => {
    return (
        <main className="article-card" > 
            <Link to={`/articles/${props.article.article_id}`} className="text-link">
            <h3 className="article-title">{props.article.title}</h3>
            </Link>
            <p>{props.article.votes} votes | {props.article.comment_count} comments</p>
            <p>Posted by: {props.article.author} at {props.article.created_at}</p>
        </main>
    );
};

export default ArticleCard;
