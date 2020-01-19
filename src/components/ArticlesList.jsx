import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import ErrorDisplay from "./ErrorDisplay";
import Sorter from "./Sorter";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: null,
    err: null
  };

  componentDidMount() {
    const { sort_by } = this.state;
    const { topic } = this.props;
    this.displayArticles(topic, sort_by);
  }

  componentDidUpdate(prevProps, prevState) {
   
    const { topic } = this.props;
    const { sort_by } = this.state;

    if (prevProps.topic !== topic) {
      this.displayArticles(topic);
    }
    if (prevState.sort_by !== sort_by) {
      this.displayArticles(topic, sort_by);
    }
  }

  render() {
    const { err, articles } = this.state;

    if (articles.isLoading) return <p>Fetching articles...</p>;
    if (err) return <ErrorDisplay {...err} />;
    return (
      <main className="articles-list">
        <Sorter selectSortBy={this.selectSortBy} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    );
  }

  selectSortBy = sortby => {
    this.setState({ sort_by: sortby });
  };

  displayArticles = (topic, sort_by) => {
    api
      .getArticles(topic, sort_by)
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(({ status, msg }) => {
        this.setState({
          err: { status: status, msg: msg },
          isLoading: false
        });
      });
  };
}

export default ArticlesList;
