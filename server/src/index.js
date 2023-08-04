const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMdwr');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb://127.0.0.1:27017/Home-Fridge')
    .then(console.log('DB connected'))
    .catch(err => console.log('DB Error', err.message));

debugger
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(auth);
app.use(routes);

app.listen(5000, console.log('Server is listening on port 5000...'));

