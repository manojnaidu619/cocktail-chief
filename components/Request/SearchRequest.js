import axios from 'axios'

const SearchRequest = (searchTerm) => {

    searchTerm = searchTerm.toLowerCase()
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`)

}

export default SearchRequest