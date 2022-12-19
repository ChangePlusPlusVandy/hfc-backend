const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

const PORT = 3000;
const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use("/workshop", require("./routes/workshops.router"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
