import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import { Router } from '@reach/router';
import SingleArticle from './components/SingleArticle';
import TopicPage from './components/TopicPage';
import ErrorDisplay from './components/ErrorDisplay';

class App extends Component {
  state = {logged_in_user: 'grumpy19'}
  render() {
    if(this.state.isLoading) {
      return <p>Loading page...</p>
    }
    return (
      <div className="App">
      <Header logged_in_user={this.state.logged_in_user}/>
      <NavBar />
      <Router >
        <Homepage path='/' logged_in_user={this.state.logged_in_user} />
        <SingleArticle path='/articles/:article_id' logged_in_user={this.state.logged_in_user} />
        <TopicPage path='/articles/topic/:topic' />
        <ErrorDisplay default err={{status:500, msg: 'Something went wrong'}} />
      </Router>
      </div>
    );
    }
  }

export default App;
