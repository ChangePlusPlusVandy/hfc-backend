const express = require('express');
const connectDB = require('./config/database');
const app = express();
const PORT = 3000;


connectDB();
app.use(express.json())
app.use('/',require('./routes/beneficiary'))



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
