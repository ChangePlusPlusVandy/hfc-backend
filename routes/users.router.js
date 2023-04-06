const express = require("express");

const {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    getUserByFirebaseId,
} = require("../controllers/users.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", createUser);
router.post("/firebase", createFirebaseUser);
router.put("/", updateUser);
router.get("/users", getUsers);
router.get("/:userId", getUserById);
router.get("/", getUserByFirebaseId);
router.delete("/:userId", deleteUser);

module.exports = router;
