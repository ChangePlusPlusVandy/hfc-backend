const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.js");
const verifyUser = require("../middleware/verifyUser.js");

const {
    createWorkshop,
    editWorkshop,
    getWorkshop,
    deleteWorkshop,
    getWorkshopsByBenId,
} = require("../controllers/workshops.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", verifyUser, createWorkshop);
router.delete("/", verifyAdmin, deleteWorkshop);
router.put("/", verifyAdmin, editWorkshop);
router.get("/", verifyUser, getWorkshop);
router.get("/beneficiary", verifyUser, getWorkshopsByBenId);

module.exports = router;
