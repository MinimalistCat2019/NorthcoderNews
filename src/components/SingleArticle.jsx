import React, { Component } from 'react';
import * as api from '../api';
import Comments from './Comments';
import VoteUpdater from './VoteUpdater';
import ErrorDisplay from './ErrorDisplay';


class SingleArticle extends Component {
    state = { article:  {}, isLoading: true, err: null}

    componentDidMount() {
        this.displaySingleArticle()
    }

    // componentDidUpdate() {
    //     this.displaySingleArticle()
    // }
    
    render() {
        const {author, votes, created_at, article_id, body, title} = this.state.article;
        const {err} = this.state;
        
        if (this.state.isLoading) {
            return <p>Fetching article...</p>
        }
        if (err) return <ErrorDisplay {...err} />
        return (
            <main className="single-article">
                <h2>{`${title}`}</h2>
                <h3>{`Submitted by ${author} on ${created_at}` }</h3>
                <VoteUpdater article_id={article_id} votes={votes}/>
                <p>{`${body}`}</p>
                <Comments id={article_id} logged_in_user={this.props.logged_in_user}/> 
            </main>
        );
    }


    displaySingleArticle = () => {
        const {article_id} = this.props;
        return api.getSingleArticle(article_id)
        .then(({data}) => {
            this.setState({article: data.article, isLoading: false});
        })
        .catch(({response}) => {
            this.setState({
                err: {status: response.status, 
                msg: response.data.msg},
                isLoading: false
            })
        })
    };
    
}

export default SingleArticle;


