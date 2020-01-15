import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import {Router} from '@reach/router';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
    <Header />
    <NavBar />
    <Router>
    <Homepage path='/' />
    <SingleArticle path='articles/:article_id' />
    </Router>
    </div>
  );
}

export default App;
