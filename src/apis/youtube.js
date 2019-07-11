import axios from 'axios'

// API default configurations
const API_KEY = 'AIzaSyDTif30cR_ckV6tXbkx70ANY6OGpI4oxzY'
const API_URL = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
  baseURL: API_URL,
  params: {
    part: 'snippet',
    maxResults: 25,
    key: API_KEY
  }
})
