import axios from 'axios'

const HomeRequestHandler = term => {
  const [nature, category] = term
  if (nature === 'Both' && category === "All") {
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"),
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    ])
  }
  else if (category !== 'All' && category !== null) {
    return axios.all([
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    ])
  }
  else if(term[2]) {
    let searchTerm = term[2].toLowerCase()
    return axios.all([
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${searchTerm}`)
    ]) 
  }
}

export default HomeRequestHandler

