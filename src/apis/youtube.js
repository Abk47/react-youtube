import axios from 'axios'

// API default configurations
export const API_KEY = 'AIzaSyDTif30cR_ckV6tXbkx70ANY6OGpI4oxzY'
const API_URL = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
  baseURL: API_URL
})

// Personal note: I should put the API_KEY in the .env file