const express = require('express');
const Beneficiary = require('../models/Beneficiary');

const createProgram = async (req, res) => {
    try {
        const {title, hosts, description} = req.body;
        if (!title || !hosts || !description) {
            return res.status(400).send({message: "Missing required field"});
        }

        let newProgram = new Program(req.body);
        let program = await newProgram.save();

        return res.status(200).json(program);
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

const getProgram = async (req,res) => {
    try {
        // Program.find account for any filters
        // Returns all programs if empty
        const programs = await Program.find(req.body);

        return res.status(200).json(programs);
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

const delProgram = async (req,res) => {
    try {
        const programName = req.body.title;
        if (programName) {
            await Program.deleteOne({title: programName});
            return res.status(200).json({message: 'Successfully deleted program'});
        }
        else {
            return res.status(400).send({message: "Missing program name"});
        }
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send({message: err.message});

    }
}

const editProgram = async (req,res) => {
    try {
        const programName = req.body.title;
        if (programName) {
            const program = await Program.updateOne({title: programName}, req.body);
            return res.status(200).json(program);
        }
        else {
            return res.status(400).send({message: "Missing program name"});
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

module.exports = {createProgram, editProgram, delProgram, getProgram};