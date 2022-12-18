const express = require('express');
const connectDB = require('./config/database');
const cors = require ('cors')
const app = express();
const PORT = 3000;


connectDB();
app.use(express.json())
app.use(cors())
app.use('/workshop', require('./routes/workshops.router'))



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});


