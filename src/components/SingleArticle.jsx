import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';


class SingleArticle extends Component {
    state = { article:  {}, isLoading: true}

    componentDidMount() {
        this.getSingleArticle()
    }

    render() {
        const { article } = this.state;
        if (this.state.isLoading) {
            return <p>Fetching article...</p>
        }
        return (

            <main className="SingleArticle">
                <h2>{`${article.title}`}</h2>
                <p>{`Author: ${article.author}`} | {`${article.votes} votes`}  |  {`${article.comment_count} comments`}</p>
                <p>{`${article.body}`}</p>
                <Comments id={this.state.article.article_id}  logged_in_user={this.props.logged_in_user}/> 
              
            </main>
        );
    }

    getSingleArticle = () => {
        return axios.get(`https://paula-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then(({data}) => {
            this.setState({article: data.article, isLoading: false});
        });
    };
    
}

export default SingleArticle;


