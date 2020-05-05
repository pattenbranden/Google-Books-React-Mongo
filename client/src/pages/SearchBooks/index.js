import React, { Component } from "react";
import NavTabs from "../../components/Nav/NavTabs"
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import SearchForm from "../../components/SearchFrom";
import SearchResult from "../../components/SearchResult"
import API from "../../utils/API"


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submitted: " + this.state.search)
        // once it clicks it connects to the google book api with the search value
        API.getReqGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    this.displayRes(res.data);


                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    displayRes = data => {
        this.setState({ books: data.items });
    };

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = {
            title: savedBooks[0].volumeInfo.title,
            author: savedBooks[0].volumeInfo.authors[0],
            description: savedBooks[0].volumeInfo.description,
            image: savedBooks[0].volumeInfo.imageLinks.smallThumbnail,
            link: savedBooks[0].volumeInfo.infoLink,
        }
        console.log(savedBooks)
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }

    postToDB = (book) => {
        var dbBook = {
            title: book.title,
            authors: book.authors,
            synopsis: book.synopsis,
            thumbnail: book.thumbnail,
            link: book.link
        }


        API.saveBook(dbBook)
            .then(alert(`Saved ${book.title}!`))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container fluid>
                <NavTabs></NavTabs>
                <Jumbotron>
                    <h1 className="text-dark">Use the Google Books API to search for books, then save them to check out later!</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}





export default SearchBooks