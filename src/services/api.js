import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'https://development.davimanoel.com.br/school-web-app/api', //'http://localhost:8080/school-web-app/api'
    timeout: 10000,
    headers: {'accept': 'application/json'}
});

export default Api;
