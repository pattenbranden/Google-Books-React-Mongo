import React, { Component } from 'react';
import bookapi from "../../utils/googlebooks/api";

class BookSearchBox extends Component{
state = {
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
    
  handleFormSubmit = async event => {
    event.preventDefault();
    let results = await bookapi.searchBooks(this.state.bookSearch);
    console.log(results)
  };

render(){
    return(
    <div className="container">
        <h1>Book Search Box</h1>
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
                <input name="bookSearch" type="text" onChange={this.handleInputChange} className="form-control mt-5" placeholder="Search for Books" autoComplete="off"/>

            </div>
            <button type="submit" className="btn btn-danger">Search</button>
        </form>
    </div>
    )}
};



export default BookSearchBox;