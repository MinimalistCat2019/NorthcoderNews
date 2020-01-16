import axios from "axios";

const request = axios.create({
  baseURL: `https://paula-nc-news.herokuapp.com/api`
});
// const baseUrl = `https://paula-nc-news.herokuapp.com/api`;

export const addComment = (article_id, author, commentBody) => {
  console.log(article_id);
  console.log(author);
  console.log(commentBody);
  return request
    .post(`/articles/${article_id}/comments/`, {
      username: author,
      body: commentBody
    })
    .then(({ data }) => {
      // console.log(data.comment)
      return data.comment;
    });
};

//   export const getSingleArticle = (article_id) => {
//       return request
//       .get(`/articles/${article_id}`)
//   }
