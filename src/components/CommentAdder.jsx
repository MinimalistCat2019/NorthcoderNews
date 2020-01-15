import React, { Component } from 'react';
import axios from 'axios';

class CommentAdder extends Component {
    state = { request: {
        username: '', 
        body: ''
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Comment as {this.props.logged_in_user}
                <input onChange={this.handleChange} value={this.state.body} />
            </label>
            <button type="submit">Add Comment</button>
        </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.body) {
          return;
        }

        const newComment = {
          body: this.state.body,
          username: this.props.logged_in_user,
        };

        this.setState(state => ({
          body: state.body.concat(newComment)
        }));

        axios.post(`/api/articles/${this.props.id}/comments`, {
            username: `${this.props.logged_in_user}`,
            body: `${this.state.body}`
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.setState(state => ({
            body: '', username: ''
        }))
      }

    handleChange = (event) => {
        this.setState({body: event.target.value })
    }
}


export default CommentAdder;

