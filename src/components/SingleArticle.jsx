import React, { Component } from 'react';
import * as api from '../api';
import Comments from './Comments';
import VoteUpdater from './VoteUpdater';


class SingleArticle extends Component {
    state = { article:  {}, isLoading: true}

    componentDidMount() {
        this.displaySingleArticle()
    }

    componentDidUpdate() {
        this.displaySingleArticle()
    }
    
    render() {
        const { author, votes, comment_count, article_id, body, title } = this.state.article;
        if (this.state.isLoading) {
            return <p>Fetching article...</p>
        }
        return (
            <main className="SingleArticle">
                <h2>{`${title}`}</h2>
                <p>{`Author: ${author}`} | {`${votes} votes`}  |  {`${comment_count} comments`}</p>
                <VoteUpdater article_id={article_id}votes={votes}/>
                <p>{`${body}`}</p>
                <Comments id={article_id}  logged_in_user={this.props.logged_in_user}/> 
            </main>
        );
    }


    displaySingleArticle = () => {
        const {article_id} = this.props;
        return api.getSingleArticle(article_id)
        .then(({data}) => {
            this.setState({article: data.article, isLoading: false});
        });
    };
    
}

export default SingleArticle;


