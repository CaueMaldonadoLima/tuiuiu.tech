import axios from 'axios';

export default function link (link) {
    const data = axios.post('http://localhost:5000/link',{
        link : link
    }, {
        headers: {
            'Content-Type':  'application/json'
        }})
    return data
}