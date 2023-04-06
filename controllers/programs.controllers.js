const Program = require("../models/Program.js");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const createProgram = async (req, res) => {
    try {
        const { title, description, hosts } = req.body;
        if (!title || !description || !hosts) {
            return res.status(400).send({ message: "Missing required field" });
        }
        req.body.dateAdded = new Date(Date.now());

        req.body.archived = false;
        let newProgram = new Program(req.body);

        let program = await newProgram.save();

        return res.status(200).json(program);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getProgramsByBenId = async (req, res) => {
    try {
        let programs = await Program.find({
            roster: { _id: ObjectId(req.query.id) },
        });
        return res.status(200).json(programs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getProgram = async (req, res) => {
    try {
        // Program.find account for any filters
        // Returns all programs if empty
        let programs;
        if (!req.query.id)
            programs = await Program.find()
                .populate("roster")
                .populate("hosts");
        else
            programs = await Program.find(ObjectId(req.query.id))
                .populate("roster")
                .populate("hosts");
        return res.status(200).json(programs);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const delProgram = async (req, res) => {
    try {
        const programID = req.body._id;
        if (programID) {
            await Program.findByIdAndDelete(programID);
            return res
                .status(200)
                .json({ message: "Successfully deleted program" });
        } else {
            return res.status(400).send({ message: "Missing program name" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const editProgram = async (req, res) => {
    try {
        const programId = ObjectId(req.body._id.programID.trim());
        if (req.body.content.roster) {
            req.body.content.roster.forEach((e) => ObjectId(e.trim()));
        }
        if (req.body.attendance) {
            console.log(req.body.attendance);
        }

        if (programId) {
            const program = await Program.updateOne(
                { _id: programId },
                req.body.content
            );
            return res.status(200).json(program);
        } else {
            return res.status(400).send({ message: "Missing program name" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createProgram,
    editProgram,
    delProgram,
    getProgram,
    getProgramsByBenId,
};
