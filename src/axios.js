import axios from 'axios'

axios.defaults.baseURL = 'http://learnvue.lol/api'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')