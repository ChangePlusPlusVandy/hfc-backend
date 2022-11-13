const express = require('express');
const Beneficiary = require('../models/Beneficiary');



// Define endpoints below 
const createBeneficiary = async (req,res) => {
    
    try 
    {

        const {name, id, bday, age, gender, joinDate, email, phone} = req.body;

        if (!name || !id || !bday || !age || !gender || !joinDate) {
            return res.status(400).send({message: "Missing Required Field"});
        }
        
        let newBeneficiary = new Beneficiary(req.body);
        let beneficiary = await newBeneficiary.save();
        
        return res.status(200).json(beneficiary);


    } catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err})
    }
    
}

module.exports = {createBeneficiary}

