const response = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
const data = await response.json()

export default data;