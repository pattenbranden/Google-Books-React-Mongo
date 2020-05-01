import React, { Component } from "react";
import BookSearchBox from "../../components/BookSearchBox/index"

class Search extends Component {
    render() {
      return (
        <div className="Search">
            <h1>BOOK SEARCH PAGE</h1>
          <BookSearchBox />
        </div>
      );
    }
  }

  
export default Search;