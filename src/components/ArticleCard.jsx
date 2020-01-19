import React from 'react';
import { Link } from '@reach/router';
import VoteUpdater from './VoteUpdater';

function ArticleCard(props) {
    // const handleClick = (event) => {
    //     props.manageClick(props.article_id)
    // }
    return (
        <section className="article-card" > 
            <section className="articleCard">
                <Link to={`/articles/${props.article.article_id}`}>
                <h3>{props.article.title}</h3>
                </Link>
                <p>{props.article.votes} votes</p>
                <VoteUpdater article_id={props.article.article_id} votes={props.article.votes} />
                <p>Posted by: {props.article.author} at {props.article.created_at}</p>
                <p>{props.article.commentCount} comments</p>
            </section>
        </section>
    );
};

export default ArticleCard;

 