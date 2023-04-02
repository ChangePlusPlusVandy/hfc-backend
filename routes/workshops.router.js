const express = require("express");

const {
    createWorkshop,
    editWorkshop,
    getWorkshop,
    deleteWorkshop,
    getWorkshopsByBenId,
} = require("../controllers/workshops.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", createWorkshop);
router.delete("/", deleteWorkshop);
router.put("/", editWorkshop);
router.get("/", getWorkshop);
router.get("/beneficiary", getWorkshopsByBenId);

module.exports = router;
