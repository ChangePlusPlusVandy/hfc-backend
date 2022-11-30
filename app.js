const express = require('express');
const connectDB = require('./config/database');
const app = express();
const cors = require('cors')
const PORT = 3000;


connectDB();
app.use(express.json())
app.use(cors())
app.use('/beneficiary',require('./routes/beneficiary'))
app.use('/programs',require('./routes/programs'))



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

 