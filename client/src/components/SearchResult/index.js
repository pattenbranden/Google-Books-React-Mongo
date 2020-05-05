import React from "react";
import { Row, Col } from "../Grid"



const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.books.map(function (book) {
                            // console.log(book)
                            if (book.volumeInfo.imageLinks) {
                                return (
                                    <li className="search-list list-group-item">
                                        <Row className="SearchResult row" id={book.volumeInfo.title + "Card"} key={book.id}>
                                            <div className="col-sm-2 bookImage">
                                                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                            </div>
                                            <Col size="1" className="emptyCol" />
                                            <div className="col-sm-9">
                                                <div className="row">
                                                    <h3 className="bookTitle">{book.volumeInfo.title}</h3>
                                                </div>
                                                <div className="row">
                                                    <h4 className="bookAuthor">{book.volumeInfo.authors}</h4>
                                                </div>
                                                <div className="row">
                                                    <p className="bookDescription">{book.volumeInfo.description}</p>
                                                </div>
                                            </div>
                                        </Row>
                                        <br></br>
                                        <Row className="buttonDiv ">
                                            <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                                Save Book
                                            </button>
                                            <a href={book.volumeInfo.infoLink} target="_blank">
                                                <button className="viewBook btn btn-success">
                                                    View Book
                                                </button>
                                            </a>
                                        </Row>
                                    </li>
                                );
                            } else {
                                //THIS ELSE IF FOR IF THERE IS NO IMAGE INCLUDED, LAZY FIX.
                                //NEED TO FIGURE OUT A CONDITIONAL TO SIMPLIFY THIS.
                                return (
                                    <li className="search-list list-group-item">
                                        <Row className="SearchResult row" id={book.volumeInfo.title + "Card"} key={book.id}>
                                            {/* col-3 show image of the book */}
                                            <div className="col-sm-2 bookImage">
                                                <p className="text-center">NO IMAGE</p>
                                            </div>
                                            <div className="col-sm-1">
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="row">
                                                    <h3 className="bookTitle">{book.volumeInfo.title}</h3>
                                                </div>
                                                <div className="row">
                                                    <h4 className="bookAuthor">{book.volumeInfo.authors}</h4>
                                                </div>
                                                <div className="row">
                                                    <p className="bookDescription">{book.volumeInfo.description}</p>
                                                </div>
                                            </div>
                                            {/* col-9 show information of the book */}
                                        </Row>
                                        <br></br>
                                        <Row className="buttonDiv ">
                                            <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                                Save Book
                                             </button>
                                            <a href={book.volumeInfo.infoLink} target="_blank">
                                                <button className="viewBook btn btn-success">
                                                    View Book
                                                 </button>
                                            </a>
                                        </Row>
                                    </li>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult