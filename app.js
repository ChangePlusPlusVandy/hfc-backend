const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/database.js");

const PORT = process.env.PORT || 3000;

const app = express();

connectDB(); // Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routers
app.use("/assessments", require("./routes/assessments.router.js"));
app.use("/beneficiaries", require("./routes/beneficiaries.router.js"));
app.use("/programs", require("./routes/programs.router.js"));
app.use("/users", require("./routes/users.router.js"));
app.use("/workshops", require("./routes/workshops.router.js"));

app.get("/", (req, res) => {
    res.send("boo!");
});

app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log("[INFO] Server Running on port:", PORT);
    }
});
