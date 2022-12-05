const express = require('express');
const Assessment = require('../models/Assessment.js');
const mongoose = require('mongoose');

const CreateAssessment = async (req, res) => {
    try {
        //For now, beneficiary must be an objectId
        const { beneficiary,
            dateTaken,
            mentalHealthScores,
            financialLitScores,
            englishScores,
            computerSkillScores,
            eduAdvancementScores,
            lifeAdvancementScores,
            humanRightsScores } = req.body;

        const newAssessment = await Assessment.create(req.body);
        await newAssessment.save();

        return res.status(200).json(newAssessment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const GetAssessmentById = async (req, res) => {
    try {
        if (req.query.id) {
            const user = await Assessment.find({ beneficiary: req.query.id }).exec();
            return res.status(200).json(user);
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const GetAssessmentByBenificiaryId = async (req, res) => {
    try {
        if (req.query.id) {
            const user = await Assessment.find({ beneficiary: req.query.id }).exec();
            return res.status(200).json(user);
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const DeleteAssessment = async (req, res) => {
    try {
        if (req.query.id) {
            await Assessment.deleteOne({ _id: req.query.id })
            return res.status(200).json({ message: "Successfully deleted." });
        } else {
            return res.status(500).send("Invalid ID query");
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const UpdateAssessment = async (req, res) => {
    try {
        let assessment;
        if (req.query.id)
            user = await Assessment.find({ beneficiary: req.query.id }).exec();
        else
            return res.status(500).send("Invalid ID query");


        const { beneficiary,
            dateTaken,
            mentalHealthScores,
            financialLitScores,
            englishScores,
            computerSkillScores,
            eduAdvancementScores,
            lifeAdvancementScores,
            humanRightsScores } = req.body;

        if (beneficiary)
            assessment.beneficiary.$oid = beneficiary;
        if (dateTaken)
            assessment.dateTaken = dateTaken;
        if (mentalHealthScores)
            assessment.mentalHealthScores = mentalHealthScores;
        if (financialLitScores)
            assessment.financialLitScores = financialLitScores;
        if (englishScores)
            assessment.englishScores = englishScores;
        if (computerSkillScores)
            assessment.computerSkillScores = computerSkillScores;
        if (eduAdvancementScores)
            assessment.eduAdvancementScores = eduAdvancementScores;
        if (lifeAdvancementScores)
            assessment.lifeAdvancementScores = lifeAdvancementScores;
        if (humanRightsScores)
            assessment.humanRightsScores = humanRightsScores;

        await assessment.save();
        console.log(assessment);
        return res.status(200).json(assessment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

module.exports = { CreateAssessment, GetAssessmentById, GetAssessmentByBenificiaryId, DeleteAssessment, UpdateAssessment };
