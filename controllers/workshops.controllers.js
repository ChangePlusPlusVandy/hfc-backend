const Workshop = require("../models/Workshop.js");
const { ObjectId } = require("mongoose").Types;
const createWorkshop = async (req, res) => {
    try {
        let newWorkshop = new Workshop(req.body);
        let workshop = await newWorkshop.save();
        return res.status(200).json(workshop);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getWorkshopsByBenId = async (req, res) => {
    try {
        let workshops = await Workshop.find({
            attendees: { _id: ObjectId(req.query.id) },
        });
        return res.status(200).json(workshops);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const deleteWorkshop = async (req, res) => {
    console.log(req.body);
    try {
        //TODO: use Params
        const workID = req.body.workshopID;
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
        //TODO: use Params
        const workshopID = ObjectId(req.body._id.trim());
        console.log(workshopID);
        console.log(req.body);
        if (workshopID) {
            //TODO: use FindBYIDandUpdate
            const workshop = Workshop.findByIdAndUpdate(
                workshopID,
                req.body.content
            )
                .then((result) => res.status(200).json(result))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send({ message: error });
                });
        } else {
            return res.status(404).send({ message: "Missing Workshop ID" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.find(req.query)
            .populate([
                {
                    path: "attendees",
                    select: "firstName lastName _id",
                },
                {
                    path: "hosts",
                    select: "firstName lastName _id",
                },
            ])
            .exec();
        console.log(workshop);
        return res.status(200).json(workshop);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createWorkshop,
    deleteWorkshop,
    editWorkshop,
    getWorkshop,
    getWorkshopsByBenId,
};
