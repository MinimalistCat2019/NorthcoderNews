import React from "react";
import * as api from '../api';

function Sorter(props) {
    const { selectSortBy } = props;
  
    const handleSorter = e => {
      e.preventDefault()
      selectSortBy(e.target.value);

    };

    return (
        <form className="articleSortOrderSelectForm">
        Sort by{" "}
        <select
          onChange={handleSorter}
          id="sort_by"
          className="sorter">
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </form>
    );
  }
  
  export default Sorter;

