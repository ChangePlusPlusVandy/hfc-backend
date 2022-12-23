const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");

const PORT = 3000;

const app = express();

connectDB(); // Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors());

// Routers
app.use("/assessment", require("./routes/assessment.router.js"));
app.use("/workshop", require("./routes/workshops.router"));
app.use("/users", require("./routes/users.router.js"));
app.use("/beneficiaries", require("./routes/beneficiaries.router"));

app.get("/", (req, res) => {
    res.send("boo! 👻");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
