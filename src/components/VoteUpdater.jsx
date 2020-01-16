import React, { Component } from 'react';
import * as api from '../api';


class VoteUpdater extends Component {
    state = {
        differenceInVotes: 0,
        err: null
    }

    render() {
        const {differenceInVote} = this.state;
        return (
            <div>
                <button className={`${differenceInVote < 0 ? "notActiveButton" : null}`}onClick={() => {
                this.updateVotes(1)
                }}> Vote Up
                </button>
                <button className={`${differenceInVote > 0 ? "notActiveButton" : null}`} onClick={() => {this.updateVotes(-1)}}> Vote Down
                </button>
            </div>
        );
    }

    updateVotes = newVote => {
        this.setState(currentState => {
          return {
            differenceInVotes: currentState.differenceInVotes + newVote,
            err: null
          };
        });
        (this.props.article_id ? this.updateArticleVotes(this.props.article_id, newVote) : this.updateCommentVotes(this.props.comment_id, newVote)
        ).catch(err => {
          this.setState(currentState => {
            return {
              err: { status: err.response.status, msg: err.response.data },
              differenceInVotes: currentState.differenceInVotes - newVote,
              votes: false
            };
          });
        });
      };

      updateCommentVotes = (comment_id, newVote) => {
          return api.sendCommentVote(comment_id, newVote)
      }

      updateArticleVotes = (article_id, newVote) => {
          return api.sendArticleVote(article_id, newVote)
      }
}

export default VoteUpdater;