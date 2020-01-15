import React, { Component } from 'react';
import axios from 'axios';
// import CommentsList from '../components/CommentsList';

class SingleArticle extends Component {
    state = { article:  [] };

    componentDidMount() {
        this.getSingleArticle()
    }

    render() {
        const { article } = this.state;
        return (
            <main className="SingleArticle">
                <h2>{`${article.title}`}</h2>
                <p>{`Author: ${article.author}`}</p>
                <p> {`Votes: ${article.votes}`}</p>
                <p>{`${article.body}`}</p>
                {/* <p><CommentsList /></p> */}
            </main>
        );
    }


    getSingleArticle = () => {
        return axios.get(`https://paula-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then(({data}) => {
            this.setState({article: data.article});
        });
    };
    
}

export default SingleArticle;


