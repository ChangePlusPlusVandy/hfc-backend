const express = require("express");

const {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
} = require("../controllers/users.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", createUser);
router.put("/:userId", updateUser);
router.get("/users", getUsers);
router.get("/:userId", getUserById);
router.delete("/:userId", deleteUser);

module.exports = router;
