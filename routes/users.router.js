const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.js");
const verifyUser = require("../middleware/verifyUser.js");
const {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    createFirebaseUser,
    getUserByFirebaseId,
} = require("../controllers/users.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", verifyAdmin, createUser);
router.post("/firebase", createFirebaseUser);
router.put("/", verifyUser, updateUser);
router.get("/users", verifyUser, getUsers);
router.get("/:userId", verifyUser, getUserById);
router.get("/", verifyUser, getUserByFirebaseId);
router.delete("/:userId", verifyAdmin, deleteUser);

module.exports = router;
