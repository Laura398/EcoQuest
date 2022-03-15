const jwt = require('jsonwebtoken');
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO:checker user en BDD
const user = {
    id: 2,
    name: 'TEST',
    email: 'TESTMAIL',
    admin: true,
};

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1000s' });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
}
const accesToken = generateAccessToken(user);
console.log('accesToken', accesToken);

app.post('/api/refreshToken', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }
        //TODO :check en bdd que le user a tjrs les droits et existe tjrs
        delete user.iat;
        delete user.exp;
        const refreshedToken = generateAccessToken(user);
        res.send({
            accessToken: refreshedToken,
        });
    });
    
});



app.post('/api/login', (req, res) => {
    if (req.body.email !== user.email) {
        res.status(401).send('invalid credentials mail');
        return;
    }
    if (req.body.password !== 'testmdp') {
        res.status(401).send('invalid credentials mdp');
        return;
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.send({
        accessToken,
        refreshToken,
    });
});

 function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];// car token sous fromat 'Bearer sqdsfvbgdbdvsfdvfs' split sur espace et on prend index 1

    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }
        req.user = user;
        next();
    });
}

app.listen(3000, () => { console.log('Server running on port 3000') });