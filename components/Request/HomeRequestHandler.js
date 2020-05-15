import axios from 'axios'

const generateRandomCharacter = () => {
    //const charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','y','z']
}

const HomeRequestHandler = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
}

export default HomeRequestHandler