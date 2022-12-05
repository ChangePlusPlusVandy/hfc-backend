const express = require("express");
const User = require("../models/User.js");
const mongoose = require("mongoose");

const CreateUser = async (req, res) => {
    try {
        //needed in case we need to add validation stuff in the future
        const { username, password, name, joinDate, level } = req.body;

        const newUser = await User.create(req.body);
        await newUser.save();

        return res.status(200).json(newUser);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const GetUserById = async (req, res) => {
    try {
        if (req.query.id) {
            const user = await User.findById(req.query.id).exec();
            return res.status(200).json(user);
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const GetUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const UpdateUser = async (req, res) => {
    try {
        //Should we be getting ID from body or query???
        let user;
        if (req.query.id) user = await User.findById(req.query.id).exec();
        else return res.status(500).send("Invalid ID query");

        const { username, password, name, level } = req.body;

        if (username) user.username = username;
        if (password) user.password = password;
        if (name) user.name = name;
        if (level) user.level = level;

        await user.save();
        console.log(user);
        return res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const DeleteUser = async (req, res) => {
    try {
        if (req.query.id)
            User.deleteOne({ _id: req.query.id }).then(function () {
                return res
                    .status(200)
                    .json({ message: "Successfully deleted." });
            });
        else return res.status(500).send("Invalid ID query");
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = { CreateUser, GetUserById, GetUsers, UpdateUser, DeleteUser };
