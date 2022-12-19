const express = require('express');
const { db } = require('../models/Beneficiaries');
const Beneficiary = require('../models/Beneficiaries');

// Define endpoints below 
const createBeneficiary = async (req,res) => {
    try 
    {
        const {firstName, lastName, id, bday, age, gender, joinDate} = req.body;

        if (!firstName  || !lastName || !id || !bday || !age || !gender || !joinDate) {
            return res.status(400).send({message: "Missing Required Field"});
        }

        let newBeneficiary = new Beneficiary(req.body);
        let beneficiary = await newBeneficiary.save();

        return res.status(200).json(beneficiary);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }   
}

const deleteBeneficiary = async (req,res) => {
    try{
        const beneficiaryID=req.query.beneficiaryID;
        if(beneficiaryID){
            Beneficiary.deleteOne({id: beneficiaryID}).then(function(){
                return res.status(200).json({message: "Successfully deleted."});
            }).catch(function(error){
                return res.status(400).send({message: error});
            });
        }
        else{
            return res.status(400).send({message: "Missing Beneficiary ID"});
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }      
}

const editBeneficiary = async (req, res) =>{
    try{
        const beneficiaryID=req.body.beneficiaryID;
        if(beneficiaryID){
            const beneficiary = Beneficiary.updateOne({id: beneficiaryID}, req.body).then(function(){                
            }).catch(function(error){
                return res.status(400).send({message: error});
            });
            return res.status(200).json(beneficiary);
        }
        else{
            return res.status(400).send({message: "Missing Beneficiary ID"});
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }      
}

const getBeneficiary = async (req, res) => {
    try {
        const beneficiary = await Beneficiary.find(req.body);
        return res.status(200).json(beneficiary);
    }

    catch(err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

module.exports = {createBeneficiary, deleteBeneficiary, editBeneficiary, getBeneficiary};



