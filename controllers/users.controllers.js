const { ObjectId } = require("mongoose").Types;
const auth = require("../firebase");

const User = require("../models/User.js");

const createUser = async (req, res) => {
    try {
        //needed in case we need to add validation stuff in the future
        const { firebaseUID, firstName, lastName, joinDate, level } = req.body;
        console.log("ADDING USER");
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
    try {
        if (uid) {
            const user = await User.find({ firebaseUID: uid });
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

// const updateUser = async (req, res) => {
//     try {
//         const userId = req.params?.userId;
//         console.log(req.body);
//         console.log(req.body);
//         if (userId) {
//             const user = User.findByIdAndUpdate(
//                 userId,
//                 req.body
//             )
//                 .then(() => {
//                     console.log(user);
//                     res.status(200).json(user);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     res.status(400).send({ message: error });
//                 });
//         } else {
//             res.status(400).send({ message: "Missing User ID" });
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send({ message: err.message });
//     }
// };

const updateUser = async (req, res) => {
    // TODO: change to same format as edit beneficiary, keep the destrcuturing of req.body, get rid of unnecessary truthy stuff
    const userId = req.query?.id;
    try {
        let user;
        if (userId) user = await User.findById(userId).exec();
        else return res.status(500).send({ message: "Invalid ID query" });

        const {
            firstName,
            lastName,
            password,
            level,
            joinDate,
            phoneNumber,
            archived,
        } = req.body;
        console.log(req.body);

        if (!!firstName) user.firstName = firstName;
        if (!!lastName) user.lastName = lastName;
        if (!!password) user.password = password;
        if (joinDate != "") {
            console.log(new Date(joinDate));
            user.joinDate = new Date(joinDate);
        }
        if (!!phoneNumber) user.phoneNumber = phoneNumber;
        if (!!level || level == 0) user.level = level;
        user.archived = archived;

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

const createFirebaseUser = (req, res) => {
    // TODO: encrypt this bro
    const { email, pass } = req.body;
    auth.createUser({
        email: email,
        password: pass,
    })
        .then((userRecord) => {
            console.log("Successfully created user");
            console.log(userRecord);
            res.send(userRecord);
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = {
    createUser,
    getUserById,
    getUserByFirebaseId,
    createFirebaseUser,
    getUsers,
    updateUser,
    deleteUser,
};
