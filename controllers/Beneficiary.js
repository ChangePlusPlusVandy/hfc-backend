const express = require('express');
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

module.exports = {createBeneficiary};

