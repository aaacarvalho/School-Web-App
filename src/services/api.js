import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://localhost:8080/school-web-app/api',
    timeout: 1000,
    headers: {'accept': 'application/json'}
});

export default Api;