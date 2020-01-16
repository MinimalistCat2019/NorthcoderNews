import React from 'react';
import ArticleCard from './ArticleCard';


const ArticlesList = (props) => {
    return (
        <section className="articlesList">
            <h2>Articles</h2>
            <ul>
                {props.articlesData && props.articlesData.articles.map(article => (
                    <ArticleCard key={article.article_id}
                    article_id={article.article_id}
                    articleTitle={article.title}
                    author={article.author} 
                    topic={article.topic}
                    votes={article.votes}
                    time={article.created_at}
                    commentCount={article.comment_count}
                    manageClick={props.manageClick}
                    logged_in_user={props.logged_in_user}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ArticlesList;

    


