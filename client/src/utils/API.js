import axios from "axios"
const url = "https://www.googleapis.com/books/v1/volumes?q="
const parameters = "&maxResults=40"
export default {
    getReqGoogleSearchBooks: (query) => {
        query = query.trim().split(' ').join('+')
        // console.log(query)
        return axios.get(url + query + parameters)
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBook) {
        return axios.post("/api/books", savedBook);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}