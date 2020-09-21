import axios from 'axios';

const KEY = 'AIzaSyBIDuX2ZPJFbizvCaSq31qv-ZoTHEAGBms';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
