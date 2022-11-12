const express = require('express');
const Beneficiary = require('../models/Beneficiary');



// Define endpoints below 
const createBeneficiary = async (req,res) => {
    try 
    {
        console.log('Got here')
        const {name, id, bday, age, gender, joinDate, email, phone} = req.body;

        if (!name || !id || !bday || !age || !gender || !joinDate) {
            res.status(400).send({message: "Missing Required Field"});
        }
        
        let beneficiary = new Beneficiary(req.body);
        await beneficiary.save();
        
        res.status(200).json(beneficiary);


    } catch (err) {
        console.error(err.message);
        res.status(500).send({message: err})
    }
    
}

module.exports = {createBeneficiary}

