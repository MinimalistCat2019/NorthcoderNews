
import React from 'react';
import ArticlesList from './ArticlesList';
function Homepage() {
    return (
        <section className="homepage">
            <h2 className="homepage-title">Welcome to Northcoder News</h2>
            <p className="homepage-body">Take a look round, read some articles and let us know what you think of them in the comments. You can order the articles by date, number of comments and popularity.</p>

            <h3 className="homepage-subtitle">All Articles</h3>
            <ArticlesList />
        </section>
    )
}


export default Homepage;

