const Workshop = require("../models/Workshop.js");

const createWorkshop = async (req, res) => {
    try {
        // console.log("here");
        let newWorkshop = new Workshop(req.body);
        let workshop = await newWorkshop.save();
        return res.status(200).json(workshop);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const deleteWorkshop = async (req, res) => {
    try {
        const workID = req.query._id;
        if (workID) {
            Workshop.deleteOne({ _id: workID })
                .then(() =>
                    res.status(200).json({ message: "Successfully deleted." })
                )
                .catch((error) => res.status(400).send({ message: error }));
        } else {
            return res.status(400).send({ message: "Missing Workshop ID" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const editWorkshop = async (req, res) => {
    try {
        console.log("editing")
        const  workshopID  = req.query._id;
        if (workshopID) {
            console.log("editing")

            const workshop = Workshop.updateOne({ _id: workshopID }, req.body )
                .then(() => res.status(200).json(beneficiary))
                .catch((error) => res.status(400).send({ message: error }));
        } else {
            return res.status(400).send({ message: "Missing Beneficiary ID" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.find(req.query);
        console.log(workshop);
        return res.status(200).json(workshop);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = { createWorkshop, deleteWorkshop, editWorkshop, getWorkshop };
