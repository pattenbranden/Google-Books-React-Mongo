import axios from "axios"
const key = "&key=AIzaSyBmZinJdcYgVx8Qe7Lr605Ygh9qfwDvu6w"
const url = "https://www.googleapis.com/books/v1/volumes?q="
export default {
searchBooks: (query) => {
    query = query.trim().split(' ').join('+')
    console.log(query)
    return axios.get(url + query + key)
}
}