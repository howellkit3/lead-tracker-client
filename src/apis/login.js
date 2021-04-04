import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-lead-tracker.herokuapp.com/login'
    // baseURL: 'http://localhost:6969'
});