import React, { Component } from 'react';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import * as api from '../api';

class Comments extends Component {
    state = {
        comments: [],
        isLoading: true,
        err: null,
        numOfComments: 0
    }

    componentDidMount() {
        this.displayComments()
    }

    // componentDidUpdate() {
    //   this.displayComments()
    // }
    render() {
        const { comments } = this.state
        if (comments.isLoading) return (<p className="isLoading">Fetching comments...</p>)
        return (
            <main className="Comments">
              <h3>Comments: {comments.length}</h3>
              <CommentAdder logged_in_user={this.props.logged_in_user} article_id={this.props.id} addNewComment={this.addNewComment}/>
              <section>
                  {this.state.comments.map((comment) => {
                     return <CommentCard key={comment.comment_id} logged_in_user={this.props.logged_in_user} comment_id={comment.comment_id} author={comment.author} votes={comment.votes} body={comment.body} created_at={comment.created_at} removeComment={this.removeComment}/>
                  })} 
              </section>
            </main>
        );
    }
      
    addNewComment = newComment => {
        this.setState(currentState => {
          return { comments: [newComment, ...currentState.comments] };
        });
      };

    displayComments = () => {
        api.getComments(this.props.id)
        .then(({data}) => {
            this.setState({comments: data.comments, isLoading: false})
        });
    }

    removeComment = comment_id => {
      api.removeCommentById(comment_id).then(() => {
        this.displayComments();
      });
    };
}

export default Comments;