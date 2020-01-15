
import React, { Component } from 'react';
import axios from 'axios';
import ArticlesList from './ArticlesList';

class Homepage extends Component {
    state = {
        articles: [], 
        isLoading: true, 
        selectedArticle: "this will be the selected article"
    };

    componentDidMount() {
        axios.get(`https://paula-nc-news.herokuapp.com/api/articles`).then(data => {
            const articlesArray = data.data;
            this.setState({ articles: articlesArray, isLoading: false });
        });
    }; 

    render() {
        if (this.state.isLoading) return <p>Fetching list of articles...</p>
        return (
            <main className="main">
                <h2>Welcome to Northcoders News!</h2>
                <ArticlesList articlesData={this.state.articles} manageClick={this.manageClick}/>
            </main>
        );
    }

    manageClick = (newArticle) => {
        this.setState({selectedArticle: newArticle})
    }
}

export default Homepage;

