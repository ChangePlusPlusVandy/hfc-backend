const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/database.js");
//const middleware = require("./middleware");
 
const PORT = 3000;

const app = express();

connectDB(); // Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
// TODO: only apply this to enpoints that need admin auth
//app.use(middleware.decodeToken);

// Routers
app.use("/assessments", require("./routes/assessments.router.js"));
app.use("/beneficiaries", require("./routes/beneficiaries.router.js"));
app.use("/programs", require("./routes/programs.router.js"));
app.use("/users", require("./routes/users.router.js"));
app.use("/workshops", require("./routes/workshops.router.js"));

app.get("/", (req, res) => {
    res.send("boo! 👻");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
