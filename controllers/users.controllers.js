const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.js");

const createUser = async (req, res) => {
    try {
        //needed in case we need to add validation stuff in the future
        const { firebaseUID, joinDate, level } = req.body;

        const newUser = await User.create(req.body);
        await newUser.save();

        return res.status(200).json(newUser);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    const userId = req.query?.userId;

    try {
        if (userId) {
            const user = await User.findById(userId).exec();
            return res.status(200).json(user);
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getUserByFirebaseId = async (req, res) => {
    const uid = req.query?.firebaseUID;
    console.log(uid);
    try {
        if (uid) {
            console.log("got here");
            const user = await User.find({ firebaseUID: uid });
            console.log(user);
            return res.status(200).json(user);
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params?.userId;
    try {
        //Should we be getting ID from body or query???
        let user;
        if (userId) user = await User.findById(userId).exec();
        else return res.status(500).send("Invalid ID query");

        const { username, password, name, level } = req.body;
        console.log(req.body);

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

const deleteUser = async (req, res) => {
    const userId = req.params?.userId;
    try {
        if (userId)
            User.deleteOne({ _id: new ObjectId(userId) }).then(() =>
                res.status(200).json({ message: "Successfully deleted." })
            );
        else return res.status(500).send("Invalid ID query");
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createUser,
    getUserById,
    getUserByFirebaseId,
    getUsers,
    updateUser,
    deleteUser,
};
