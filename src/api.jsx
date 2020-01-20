import axios from "axios";

const request = axios.create({
  baseURL: `https://paula-nc-news.herokuapp.com/api`
});

export const postComment = (article_id, author, commentBody) => {
  return request
    .post(`/articles/${article_id}/comments/`, {
      username: author,
      body: commentBody
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const removeCommentById = (comment_id) => {
  return request
  .delete(`/comments/${comment_id}`)
}

export const sendCommentVote = (comment_id, voteChange) => {
  return request
  .patch(`/comments/${comment_id}`, {
    inc_votes: voteChange
  });
}

export const sendArticleVote = (article_id, voteChange) => {
  return request
  .patch(`/articles/${article_id}`, {
    inc_votes: voteChange
  })
}

export const filterByTopic = (topic) => {
  return request
  .get(`/articles?`, {
    params: {
      topic: topic
    }
  })
}

export const getAllTopics = () => {
  return request
  .get(`/topics`)
  .then(({ data }) => {
    return data;
  });

}

export const getArticles = (topic, sort_by) => {
  return request
    .get(`/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
      }
    })
}

export const getSingleArticle = (article_id) => {
  return request
  .get(`/articles/${article_id}`)
  }

export const getComments = (article_id) => {
  return request
  .get(`/articles/${article_id}/comments`)
}