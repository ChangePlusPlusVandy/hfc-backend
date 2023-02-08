const { findByIdAndUpdate } = require("../models/Beneficiary.js");
const Beneficiary = require("../models/Beneficiary.js");

// Define endpoints below
const createBeneficiary = async (req, res) => {
    try {
        const { firstName, lastName, id, bday, age, gender, joinDate } =
            req.body;

        if (
            !firstName ||
            !lastName ||
            !id ||
            !bday ||
            !age ||
            !gender ||
            !joinDate
        ) {
            return res.status(400).send({ message: "Missing Required Field" });
        }

        let newBeneficiary = new Beneficiary(req.body);
        let beneficiary = await newBeneficiary.save();

        return res.status(200).json(beneficiary);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const deleteBeneficiary = async (req, res) => {
    try {
        const beneficiaryID = req.query.beneficiaryID;
        if (beneficiaryID) {
            Beneficiary.findByIdAndDelete(beneficiaryID)
                .then(function () {
                    return res
                        .status(200)
                        .json({ message: "Successfully deleted." });
                })
                .catch(function (error) {
                    return res.status(400).send({ message: error });
                });
        } else {
            return res.status(400).send({ message: "Missing Beneficiary ID" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const editBeneficiary = async (req, res) => {
    try {
        const beneficiaryID = req.body.beneficiaryID;
        if (beneficiaryID) {
            const beneficiary = Beneficiary.findByIdAndUpdate(
                beneficiaryID,
                req.body
            )
                .then(function () {})
                .catch(function (error) {
                    return res.status(400).send({ message: error });
                });
            return res.status(200).json(beneficiary);
        } else {
            return res.status(400).send({ message: "Missing Beneficiary ID" });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getBeneficiary = async (req, res) => {
    const beneficiaryId = req.params?.beneficiaryId;
    try {
        const beneficiary = beneficiaryId
            ? await Beneficiary.findById(beneficiaryId).exec()
            : await Beneficiary.find();
        return res.status(200).json(beneficiary);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const archiveBeneficiary = async (req, res) => {
    const beneficiaryId = req.params?.beneficiaryId;
    console.log(beneficiaryId);
    if (beneficiaryId) {
        Beneficiary.findByIdAndUpdate(
            beneficiaryId,
            { archived: true },
            (err, docs) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ message: err.message });
                } else {
                    console.log("Archived Beneficiary : ", docs);
                    return res.status(200).json(docs);
                }
            }
        );
    } else {
        return res.status(400).send({ message: "Missing Beneficiary ID" });
    }
};

const unarchiveBeneficiary = async (req, res) => {
    const beneficiaryId = req.params?.beneficiaryId;
    console.log(beneficiaryId);
    if (beneficiaryId) {
        Beneficiary.findByIdAndUpdate(
            beneficiaryId,
            { archived: false },
            (err, docs) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ message: err.message });
                } else {
                    console.log("Unarchived Beneficiary: ", docs);
                    return res.status(200).json(docs);
                }
            }
        );
    } else {
        return res.status(400).send({ message: "Missing Beneficiary ID" });
    }
};

module.exports = {
    createBeneficiary,
    deleteBeneficiary,
    editBeneficiary,
    getBeneficiary,
    archiveBeneficiary,
    unarchiveBeneficiary,
};
