import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';

class DesktopNavBar extends Component {
    
    state = {
        topics: [], 
        isLoading: true, 
        err: null
    }

    componentDidMount() {
        api.getAllTopics()
        .then((data) => {
            this.setState({topics: data.topics, isLoading: false})
        })
        .catch(({response}) => {
            this.setState( {
            err: {status: response.status, msg:response.data.msg}})
        })
    }

    render() {
        if (this.state.isLoading === true) return <p>Loading...</p>
        return (
            <nav>
            <Link to={`/`} className="desktop-menu-item"><h4>home</h4></Link>
            {this.state.topics.map(topic => (
            <Link to={`/${topic.slug}`} key={topic.slug} className="desktop-menu-item"><h4>{topic.slug}</h4></Link>
            ))}
            </nav>
        );
    }
}

export default DesktopNavBar;