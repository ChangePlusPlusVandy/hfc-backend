const Beneficiary = require("../models/Beneficiary.js");

// Define endpoints below
const createBeneficiary = async (req, res) => {
    try {
        console.log(
            "Received request to create beneficiary...",
            JSON.stringify(req.body, null, 2)
        );

        const { firstName, lastName, bday, age, gender, joinDate } = req.body;

        if (
            !firstName ||
            !lastName ||
            !bday ||
            age === undefined ||
            !gender ||
            !joinDate
        ) {
            return res.status(400).send({ message: "Missing Required Field" });
        }

        // generate beneficiary ID based on max ID in the database
        const maxId = await Beneficiary.find()
            .sort({ id: -1 })
            .limit(1)
            .then((docs) => {
                return docs[0].get("id");
            })
            .catch((err) => {
                console.log(err);
            });

        let newBeneficiary = new Beneficiary({ ...req.body, id: maxId + 1 });
        let beneficiary = await newBeneficiary.save();

        return res.status(200).json(beneficiary);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const deleteBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.query.id;
        if (beneficiaryId) {
            Beneficiary.findByIdAndDelete(beneficiaryId)
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
        const beneficiaryId = req.params?.beneficiaryId;
        console.log(req.body);
        if (beneficiaryId) {
            const beneficiary = Beneficiary.findByIdAndUpdate(
                beneficiaryId,
                req.body
            )
                .then(function () {
                    console.log(beneficiary);
                    res.status(200).json(beneficiary);
                })
                .catch(function (error) {
                    console.log(error);
                    res.status(400).send({ message: error });
                });
        } else {
            res.status(400).send({ message: "Missing Beneficiary ID" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ message: err.message });
    }
};

// const getBeneficiary = async (req, res) => {
//     const beneficiaryReadable = req.query?.id;
//     console.log(beneficiaryReadable);
//     const beneficiary = Beneficiary.find({ id: beneficiaryReadable });
//     if (beneficiary) {
//         return res.status(200).json(beneficiary);
//     }

//     const beneficiaryId = req.query?.id;
//     try {
//         beneficiary = beneficiaryId
//             ? await Beneficiary.findById(beneficiaryId).exec()
//             : await Beneficiary.find();
//         return res.status(200).json(beneficiary);
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).send({ message: err.message });
//     }
// };

const getBeneficiary = async (req, res) => {
    // find by mongo id
    const mongoId = req.query?.id;
    if (mongoId) {
        try {
            const beneficiary = await Beneficiary.findById(mongoId)
                .populate("assessments")
                .exec();
            return res.status(200).json(beneficiary);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
    console.log("no mongo id detected");

    // find by readable id
    const readableId = req.query?.idNum;
    if (readableId) {
        try {
            const beneficiary = await Beneficiary.findOne({ id: readableId });
            return res.status(200).json(beneficiary);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
    console.log("no readable id detected");

    // return all benefiaries
    try {
        const beneficiary = await Beneficiary.find();
        return res.status(200).json(beneficiary);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

const archiveBeneficiary = async (req, res) => {
    const beneficiaryId = req.params?.id;
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
    const beneficiaryId = req.params?.id;
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

const updateAssessment = async (req, res) => {
    const beneficiaryId = req.params?.beneficiaryId;
    console.log("beneficiaryId: ", beneficiaryId);
    if (req.body?.assessments == undefined) {
        return res
            .status(400)
            .send({ message: "Request Requires Assessment Field" });
    }

    if (beneficiaryId) {
        console.log("req body: ", req.body.assessments);
        try {
            await Beneficiary.findByIdAndUpdate(beneficiaryId, {
                assessments: req.body.assessments,
            });
            return res.status(200).send({ message: "Successfully Updated" });
        } catch (err) {
            return res
                .status(500)
                .send({ message: "Error Updating Assessments" });
        }
    }
};

module.exports = {
    createBeneficiary,
    deleteBeneficiary,
    editBeneficiary,
    getBeneficiary,
    archiveBeneficiary,
    unarchiveBeneficiary,
    updateAssessment,
};
