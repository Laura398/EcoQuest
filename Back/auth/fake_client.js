const axios = require('axios');

let refreshToken;

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

console.log('trying to login');

instance.post('/login', {
    email: 'TESTMAIL',
    password: 'testmdp'
}).then((response) => {
    console.log('auth succes');
    instance.defaults.headers.common['authorization'] = 'Bearer ${response.data.accessToken}';
    refreshToken = response.data.refreshToken;
    loadUserInfos();
}).catch((err) => {
    console.log(err.response && err.response.status);
});

function loadUserInfos() {
    instance.get('/me').then((response) => {
        console.log(response.data);
    }).catch((err) => {
        console.log(err.response.status);
    });
}