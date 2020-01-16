import React, { Component } from 'react';
import CommentCard from './CommentCard';
import axios from 'axios';
import CommentAdder from './CommentAdder';
import * as api from '../api';

class Comments extends Component {
    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount() {
        this.getComments()
    }

    componentDidUpdate() {
      this.getComments()
    }
    render() {
        const { comments } = this.state
        if (comments.isLoading) return <p>Fetching comments...</p>
        return (
            <main className="Comments">
              <h3>Comments</h3>
              <CommentAdder logged_in_user={this.props.logged_in_user} article_id={this.props.id} addNewComment={this.addNewComment}/>
              <ul>
                  {this.state.comments.map((comment) => {
                     return <CommentCard key={comment.comment_id} logged_in_user={this.props.logged_in_user} comment_id={comment.comment_id} author={comment.author} votes={comment.votes} body={comment.body} created_at={comment.created_at} removeComment={this.removeComment}/>
                  })} 
              </ul>
            </main>
        );
    }
      
    addNewComment = newComment => {
        this.setState(currentState => {
          return { comments: [newComment, ...currentState.comments] };
        });
      };

    getComments = () => {
        // console.log(this.props)
        return axios.get(`https://paula-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`).then(({data}) => {
            this.setState({comments: data.comments, isLoading: false})
        });
    }

    removeComment = comment_id => {
      api.removeCommentById(comment_id).then(() => {
        this.getComments();
      });
    };
// NB Need to change the key on the json file of endpoints from "articles" to "comments"
}

export default Comments;