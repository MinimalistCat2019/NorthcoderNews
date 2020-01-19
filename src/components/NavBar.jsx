import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';

class NavBar extends Component {
    
    state = {
        topics: [], isLoading: true
    }

    componentDidMount() {
        api.getAllTopics()
        .then((data) => {

            this.setState({topics: data.topics, isLoading: false})
        })
    }

    render() {
        if (this.state.isLoading === true) return <p>Loading...</p>
        return (
            <div>

            <nav className="NavBar">
            <Link to={`/`}><h4>Home</h4></Link>
            {this.state.topics.map(topic => (
            <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
            ))}
            </nav>
            </div>
        );
    }
}

export default NavBar;




