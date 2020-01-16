import React, { Component } from 'react';
import * as api from '../api';


class VoteUpdater extends Component {
    state = {
        differenceInVotes: 0,
        err: null
    }

    render() {
        const {differenceInVotes} = this.state;
        return (
            <div>
                {differenceInVotes <= 0 &&
                    <button className="upvote"
                    onClick={() => {
                    this.updateVotes(1)
                    }}> Vote Up
                    </button>}
                {differenceInVotes >=0 && 
                    <button className="downvote" onClick={() => {this.updateVotes(-1)}}> Vote Down
                    </button> 
                }
                
            </div>
        );
    }

    updateVotes = voteChange => {
        console.log(this.state.differenceInVotes)
        this.setState(currentState => {
          return {
            differenceInVotes: currentState.differenceInVotes + voteChange,
            err: null
          };
        });
        (this.props.article_id ? this.updateArticleVotes(this.props.article_id, voteChange) : this.updateCommentVotes(this.props.comment_id, voteChange)
        ).catch(err => {
          this.setState(currentState => {
            return {
              err: { status: err.response.status, msg: err.response.data },
              differenceInVotes: currentState.differenceInVotes - voteChange,
              votes: false
            };
          });
        });
      };

      updateCommentVotes = (comment_id, voteChange) => {
          return api.sendCommentVote(comment_id, voteChange)
      }

      updateArticleVotes = (article_id, voteChange) => {
          return api.sendArticleVote(article_id, voteChange)
      }
}

export default VoteUpdater;