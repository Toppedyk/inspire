export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 15000
})

export const quoteApi = axios.create({
  baseURL:'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 15000
})

export const imageApi = axios.create({
  baseURL:'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 15000
})

export const sandboxApi = axios.create({
  baseURL:'https://bcw-sandbox.herokuapp.com/api/taylor/todos',
  timeout: 15000
})