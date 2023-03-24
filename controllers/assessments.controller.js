const mongoose = require("mongoose");

const Assessment = require("../models/Assessment.js");

const createAssessment = async (req, res) => {
    try {
        //For now, beneficiary must be an objectId
        const {
            beneficiary,
            dateTaken,
            mentalHealthScores,
            financialLitScores,
            englishScores,
            computerSkillScores,
            eduAdvancementScores,
            lifeAdvancementScores,
            humanRightsScores,
        } = req.body;

        const newAssessment = await Assessment.create(req.body);
        await newAssessment.save();

        return res.status(200).json(newAssessment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const getAssessmentById = async (req, res) => {
    const assessmentId = req.query?.id;
    try {
        const assessment = assessmentId
            ? await Assessment.findById(assessmentId).exec()
            : await Assessment.find();
        return res.status(200).json(assessment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const deleteAssessment = async (req, res) => {
    try {
        if (req.query.id) {
            await Assessment.deleteOne({ _id: req.query.id });
            return res.status(200).json({ message: "Successfully deleted." });
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

const updateAssessment = async (req, res) => {
    try {
        let assessment;
        if (req.query.id) {
            assessment = await Assessment.findById(req.query.id).exec();
        } else return res.status(500).send("Invalid ID query");

        // TODO: not sure if some fields are needed?
        const {
            beneficiary,
            // dateTaken,
            // mentalHealthScores,
            // financialLitScores,
            // englishScores,
            // computerSkillScores,
            // eduAdvancementScores,
            // lifeAdvancementScores,
            // humanRightsScores,
        } = req.body;

        if (beneficiary)
            assessment.beneficiary = mongoose.Types.ObjectId(beneficiary);
        // if (dateTaken) assessment.dateTaken = dateTaken;
        // if (mentalHealthScores)
        //     assessment.mentalHealthScores = mentalHealthScores;
        // if (financialLitScores)
        //     assessment.financialLitScores = financialLitScores;
        // if (englishScores) assessment.englishScores = englishScores;
        // if (computerSkillScores)
        //     assessment.computerSkillScores = computerSkillScores;
        // if (eduAdvancementScores)
        //     assessment.eduAdvancementScores = eduAdvancementScores;
        // if (lifeAdvancementScores)
        //     assessment.lifeAdvancementScores = lifeAdvancementScores;
        // if (humanRightsScores) assessment.humanRightsScores = humanRightsScores;

        await assessment.save();
        console.log(assessment);
        return res.status(200).json(assessment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    createAssessment,
    getAssessmentById,
    deleteAssessment,
    updateAssessment,
};
