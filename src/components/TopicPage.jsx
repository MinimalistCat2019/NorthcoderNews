import React from 'react';
import ArticlesList from './ArticlesList';

function TopicPage(props) {
    return (
        <section className="topic-page">
            <h2>{props.topic}</h2>
            <h3>{props.description}</h3>
            <ArticlesList topic={props.topic}/>
        </section>
    )
}

export default TopicPage;

