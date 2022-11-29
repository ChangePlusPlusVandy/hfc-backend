const e = require('express');
const express = require('express');
const { db } = require('../models/Beneficiary');
const Beneficiary = require('../models/Beneficiary');

// Define endpoints below 
const createBeneficiary = async (req,res) => {    
    try 
    {
        const {firstName, lastName, id, bday, age, gender, joinDate, email, phone} = req.body;

        if (!firstName  || !lastName || !id || !bday || !age || !gender || !joinDate) {
            return res.status(400).send({message: "Missing Required Field"});
        }
        existingUser1 = undefined;
        existingUser2 = undefined;

        // Don't know if this is necessary bc of unique keyword in model 
        if (phone) {
            let existingUser2 = await Beneficiary.findOne({phone});
        } 
        if (email) {
            let existingUser1 = await Beneficiary.findOne({email});
        }
        
        
        if (existingUser1 || existingUser2) {
            return res.status(400).send({message: "User with this email or phone already exists"});
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
        const beneficiaryID=req.body.beneficiaryID;
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
            const beneficiary = await Beneficiary.updateOne({id: beneficiaryID}, req.body).then(function(){                
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



