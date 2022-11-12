const express = require('express');
const connectDB = require('./config/database');
const app = express();
const PORT = 3000;


connectDB();

app.use('/beneficiary',require('./routes/beneficiary'))

app.get('/', (req, res) => {
    res.send('boo! 👻');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
