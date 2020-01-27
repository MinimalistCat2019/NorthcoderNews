
import React from 'react';
import ArticlesList from './ArticlesList';
function Homepage() {
    return (
        <section className="homepage">
            <h2>Welcome to Northcoder News</h2>
            <p>Here take a look round, read some articles and let us know what you think of them in the comments. You can order the articles by date, number of comments and popularity.</p>

            <h3>All Articles</h3>
            <ArticlesList />
        </section>
    )
}


export default Homepage;

