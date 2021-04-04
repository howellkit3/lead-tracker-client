import axios from 'axios';

export default axios.create({
    // baseURL: 'https://api-lead-tracker.herokuapp.com/api'
    baseURL: 'http://localhost:6969/api'
    // header: {
    //     Authorization: "Bearer [token]"
    // }
});

