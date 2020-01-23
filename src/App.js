import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import SingleArticle from './components/SingleArticle';
import TopicPage from './components/TopicPage';
import ErrorDisplay from './components/ErrorDisplay';
import Homepage from './components/Homepage';
import DesktopNavBar from './components/DesktopNavBar';

class App extends Component {
  state = {logged_in_user: 'grumpy19' }
  
  render() {
    if(this.state.isLoading) {
      return <p>Loading page...</p>
    }
    return (
      <main>
          <header>
              <Header logged_in_user={this.state.logged_in_user}/>
              <DesktopNavBar path='/' />
          </header>
          <aside className="sidebar">
              <NavBar path='/' />
          </aside>
          <Router>
              <Homepage path='/' logged_in_user={this.state.logged_in_user} />
              <SingleArticle path='/articles/:article_id' logged_in_user={this.state.logged_in_user} />
              <TopicPage path='/:topic'/ >
          </Router>
          <ErrorDisplay default/>
      </main>
    );
    }
  }

export default App;
