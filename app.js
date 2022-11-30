const express = require('express');
const connectDB = require('./config/database');
const UserRoutes = require('./routes/users.router.js')
const app = express();
const port = 3000;
require('dotenv').config()


connectDB();

app.use(express.json());
app.use('/user', UserRoutes);

app.get("/", (req, res) => {
    res.send("boo! 👻");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


