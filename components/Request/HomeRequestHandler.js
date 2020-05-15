import axios from 'axios'

const HomeRequestHandler = (term) => {
  if (term === null) {
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"),
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    ])
  } else {
    term = term.toLowerCase()
    return axios.all([
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${term}`)
    ])
  }
    
}

export default HomeRequestHandler