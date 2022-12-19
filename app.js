const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

const PORT = 3000;

const app = express();

connectDB(); // Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors());

// Routers
app.use("/workshop", require("./routes/workshops.router"));
app.use("/user", require("./routes/users.router.js"));

app.get("/", (req, res) => {
    res.send("boo! 👻");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
