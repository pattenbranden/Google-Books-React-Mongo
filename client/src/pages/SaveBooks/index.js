import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import SavedResult from "../../components/SavedResult"
import NavTabs from "../../components/Nav/NavTabs"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <NavTabs />
                <Jumbotron>
                    <h1 className="text-dark">
                        Here you can checkout your saved books, and remove them after you're done!
                    </h1>
                </Jumbotron>
                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveBook 