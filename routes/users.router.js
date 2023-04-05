const express = require("express");
const admin = require("../firebase")


const {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    getUserByFirebaseId,
} = require("../controllers/users.controllers.js");

const router = express.Router();


const createFirebaseUser = (req,res) => {
    const {email,pass} = req.body;
    admin.auth().createUser({
        email: email,
        password: pass
    }).then((userRecord) => {
        console.log("Successfully created user")
        console.log(userRecord)
        res.send(userRecord);
    }).catch((error) => {
        console.log('Error, error')
    });
}

// Declare routes below
router.post("/", createUser);
router.post('/firebase',createFirebaseUser);
router.put("/", updateUser);
router.get("/users", getUsers);
router.get("/user", getUserById);
router.get("/", getUserByFirebaseId);
router.delete("/:userId", deleteUser);

module.exports = router;
