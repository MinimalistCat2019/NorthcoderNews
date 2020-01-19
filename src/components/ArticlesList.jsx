import React, { Component } from "react";
import * as api from '../api';
import ArticleCard from "./ArticleCard";
import ErrorDisplay from "./ErrorDisplay";
import Sorter from "./Sorter";


class ArticlesList extends Component {
    state = { 
        articles: [], 
        isLoading: true, 
        order: null,
        sort_by: null,
        err: null
    };

    componentDidMount() {
        const {topic, order, sort_by} = this.state
        this.displayArticles(topic, order, sort_by)
        
    }; 

    componentDidUpdate(prevProps, currentState) {
        const {topic, order, sort_by} = this.props;
        
        prevProps !== currentState &&
        this.displayArticles(topic, order, sort_by)
        
    }

    render() {
        const { err, articles } = this.state;

        if (articles.isLoading) return <p>Fetching articles...</p>;
        if (err) return <ErrorDisplay {...err} />;
        return (
        <main className="articles-list">
            <Sorter selectSortBy={this.selectSortBy}/>
            {articles.map((article) => {
                return <ArticleCard key={article.article_id}article={article} />
            })}
        </main>
        );
    }

    selectSortBy = (key, value) => {
        this.setState({ [key]: value });
    };

    displayArticles = (topic, order, sort_by) => {
         api.getArticles(topic, order, sort_by)
        .then(({data}) => {
            this.setState({articles: data.articles, isLoading: false})
        })
        .catch(({status, msg}) => {
            this.setState({
              err: { status: status, msg: msg },
              isLoading: false
            });
        })
    }
}

export default ArticlesList;


