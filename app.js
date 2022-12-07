const express = require("express");
const connectDB = require("./config/database");

const UserRoutes = require("./routes/users.router.js");

const PORT = 3000;

connectDB();

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/user", UserRoutes);

app.get("/", (req, res) => {
    res.send("boo! 👻");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
