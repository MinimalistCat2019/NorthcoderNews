import React from "react";
import * as api from '../api';

function Sorter(props) {
    const { selectSortBy } = props;
  
    const handleSorter = e => {
      selectSortBy(e.target.id, e.target.value);
    };

    return (
        <form className="articleSortOrderSelectForm">
        Sort by{" "}
        <select
          onChange={handleSorter}
          id="sort_by"
          className="sorter"
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
        <select
          onChange={handleSorter}
          className="sorter"
          id="order"
        >
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
      </form>
    );
}
  
  export default Sorter;

// class Sorter extends Component {
//   state = {
//     sortedBy: ""
//   };

//   componentDidMount() {
//     this.sortArticles(sortedBy)
//   }
  
//   render() {
//       return (
//           <section>
//         <p>Sort By</p>
//         <ul>
//           <button
//             id="DateSort"
//             onClick={() => {
//               this.setState({ sortedBy: "created_at" });
//               this.sortArticles("created_at");
//             }}>Date</button>

//           <button
//             id="CommentCountSort"
//             onClick={() => {
//               this.setState({ sortedBy: "comment_count" });
//               this.sortArticles("comment_count");
//             }}>Comment Count</button>
//             <button
//             id="VoteSort"
//             onClick={() => {
//               this.setState({ sortedBy: "votes" });
//               this.sortArticles("votes");
//             }}>Vote</button>
//         </ul>
//       </section>
//     );
// }
//     sortArticles = sortedBy => {
//     if (this.state.sortedBy !== sortedBy) {
//     api.getSortedArticles(this.state.sortedBy)
//     .then(({data}) =>
//         this.props.displayArticles(data.articles)
//         );
//     }
//     }
// }

// export default Sorter;