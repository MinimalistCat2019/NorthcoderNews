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
import LoggedInUser from './components/LoggedInUser';

class App extends Component {
  state = {logged_in_user: 'grumpy19' }
  
  render() {
    if(this.state.isLoading) {
      return <p>Loading page...</p>
    }
    return (
      <div className="container" >
          <header className="page-header" >
              <nav>
              <Header />
              <DesktopNavBar path='/' className="desktop" />
              <LoggedInUser logged_in_user={this.state.logged_in_user} />
              </nav>
          </header>
          <aside className="sidebar">
              <NavBar path='/' />
          </aside>
          <main className="page-main">
          <Router>
              <Homepage path='/' logged_in_user={this.state.logged_in_user} />
              <SingleArticle path='/articles/:article_id' logged_in_user={this.state.logged_in_user} />
              <TopicPage path='/:topic'/ >
          </Router>
          </main>
          <ErrorDisplay default/>
          <footer className="page-footer">
            <p>Website designed and created by Paula Wilson</p>
          </footer>
      </div>
    );
    }
  }

export default App;
