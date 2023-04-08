const mongoose = require("mongoose");

const Assessment = require("../models/Assessment.js");

const createAssessment = async (req, res) => {
    try {
        const {
            beneficiary,
            dateTaken,
            educationVocationQs,
            mentalHealthQs,
            lifeSkillsQs,
            socialSkillsQs,
            educationVocationScore,
            mentalHealthScore,
            lifeSkillsScore,
            socialSkillsScore,
            totalScore,
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
            ? await Assessment.findById(assessmentId)
                  .populate({
                      path: "beneficiary",
                      select: "firstName lastName id",
                  })
                  .exec()
            : await Assessment.find().populate("beneficiary");
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
        if (req.query?.id) {
            assessment = await Assessment.findById(req.query.id).exec();
        } else return res.status(500).send("Invalid ID query");

        const {
            beneficiary,
            dateTaken,
            educationVocationQs,
            mentalHealthQs,
            lifeSkillsQs,
            socialSkillsQs,
            educationVocationScore,
            mentalHealthScore,
            lifeSkillsScore,
            socialSkillsScore,
            totalScore,
        } = req.body;

        if (beneficiary)
            assessment.beneficiary = mongoose.Types.ObjectId(beneficiary);
        if (dateTaken) assessment.dateTaken = dateTaken;
        if (educationVocationQs)
            assessment.educationVocationQs = educationVocationQs;
        if (mentalHealthQs) assessment.mentalHealthQs = mentalHealthQs;
        if (lifeSkillsQs) assessment.lifeSkillsQs = lifeSkillsQs;
        if (socialSkillsQs) assessment.socialSkillsQs = socialSkillsQs;
        if (educationVocationScore)
            assessment.educationVocationScore = educationVocationScore;
        if (mentalHealthScore) assessment.mentalHealthScore = mentalHealthScore;
        if (lifeSkillsScore) assessment.lifeSkillsScore = lifeSkillsScore;
        if (socialSkillsScore) assessment.socialSkillsScore = socialSkillsScore;
        if (totalScore) assessment.totalScore = totalScore;

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
