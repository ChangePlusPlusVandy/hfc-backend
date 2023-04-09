const express = require("express");
const VerifyToken = require("../middleware/VerifyToken.js");

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
router.post("/", createUser);
router.post("/firebase", VerifyToken, createFirebaseUser);
router.put("/", VerifyToken, updateUser);
router.get("/users", getUsers);
router.get("/:userId", getUserById);
router.get("/", getUserByFirebaseId);
router.delete("/:userId", VerifyToken, deleteUser);

module.exports = router;
