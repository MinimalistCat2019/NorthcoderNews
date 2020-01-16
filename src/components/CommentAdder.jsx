import React, { Component } from 'react';
import * as api from '../api';

class CommentAdder extends Component {
    state = { 
        body: '',
        err: null, 
        username: ''
    }

    render() {
      // const { err } = this.state;
      if(!this.props.logged_in_user) {
        return <p>Please log in to post a comment</p>
      }
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
              Comment as {this.props.logged_in_user}:
              <input 
              onChange={this.handleInput} 
              value={this.state.body} 
              name="body" 
              required={true}>
              </input>
          </label>
          <button className="addCommentButton">Add Comment</button>
        
        </form>
        )
    }

    handleInput = (event) => {
      const {name, value} = event.target;
      this.setState({[name]: value});
    };

    handleSubmit = (event) => {
      event.preventDefault();
      api.postComment(
        this.props.article_id, 
        this.props.logged_in_user, 
        this.state.body
        )
      .then(request => {
        this.setState({body: '', err: null, username: ''});
        this.props.addNewComment(request);
      })
      .catch(err => {
        this.setState({
          err: {status: err.response.status, msg: err.response.data.msg}
        })
        });
      }
}


export default CommentAdder;

