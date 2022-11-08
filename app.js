const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config()

// Connect to Mongo database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo! Success!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }  
}

connectDB();

app.get('/', (req, res) => {
    res.send('boo! 👻');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
