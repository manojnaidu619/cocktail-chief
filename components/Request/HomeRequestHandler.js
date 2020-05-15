import axios from 'axios'

const HomeRequestHandler = (term) => {
  const [nature, category] = term
  if (nature === 'Both' && category === "All") {
    console.log("one")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"),
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    ])
  }
  if (nature === 'Alcoholic' && category !== 'All') {
    console.log("two")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    ])
  }
  if (nature === 'Non_Alcoholic' && category !== 'All') {
    console.log("three")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    ])
  }
  if (nature === 'Both' && category !== "All") {
    console.log("foue")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"),
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    ])
  }
  if (nature === 'Alcoholic' && category === 'All') {
    console.log("five")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    ])
  }
  if (nature === 'Non_Alcoholic' && category === 'All') {
    console.log("six")
    return axios.all([
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    ])
  }
  else {
    term = term[2].toLowerCase()
    console.log("seven")
    return axios.all([
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`),
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${term}`)
    ])
  }
}

export default HomeRequestHandler

