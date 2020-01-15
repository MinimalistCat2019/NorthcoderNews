import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import {Router} from '@reach/router';
import SingleArticle from './components/SingleArticle';

class App extends Component {
  state = {logged_in_user: 'lurker'}
  
  render() {
    return (
      <div className="App">
      <Header logged_in_user={this.state.logged_in_user}/>
      <NavBar />
      <Router >
      <Homepage path='/' logged_in_user={this.state.logged_in_user} />
      <SingleArticle path='articles/:article_id' logged_in_user={this.state.logged_in_user} />
      </Router>
      </div>
    );
    }
  }

export default App;
