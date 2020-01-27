# Northcoder News
Northcoder News is a social news aggregation, web content rating, and discussion website, along the lines of [Reddit](https://www.reddit.com/).

Northcoder News has articles which are divided into topics. Each article can be voted up and down by the user. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they themselves have added.

The application is responsive and can be viewed on mobile or laptop, without sacrificing style or functionality. 

The project was bootstrapped with Create React App.


When browsing the website, you will be logged in as default user "Grumpy19".

## Links:
Deployed version: https://pwf-nc-news.herokuapp.com/

Backend code: https://github.com/MinimalistCat2019/pw-nc-news

Frontend code: https://github.com/MinimalistCat/NorthcoderNews

### Node requirement:
v12.9.0

### Dependencies: 
Install the following dependencies with 
```
npm i

```

@reach/router v1.2.1
a11y-react-emoji v1.1.2
axios  v0.19.2
react v16.12.0
react-dom v16.12.0
react-scripts v3.3.0

#### To run localy:
Git clone the following link: https://github.com/MinimalistCat2019/NorthcoderNews.git
npm i
npm start
You will be logged in as default user "Grumpy19"

#### Functionality
The following functionality is available:

**As a user, you can...**
1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as the default logged in user.).
7. delete your own comments (as the default logged in user).
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.
10. change your vote up or down and immediately see the change.
11. use the site on a mobile without sacrificing style or functionality.
12. receive a 404 error if you follow a non-existent path/a path for a non-existent article/topic.
13. receive a 400 error if you follow a path for an invalid article ID.

