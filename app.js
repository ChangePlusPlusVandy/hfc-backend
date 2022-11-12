const express = require('express');
const connectDB = require('./config/database');
const app = express();
const port = 3000;
require('dotenv').config()


connectDB();

app.get('/', (req, res) => {
    res.send('boo! 👻');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
