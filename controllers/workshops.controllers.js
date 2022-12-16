const express = require('express');
const User = require('../models/User');
const Workshop=require('../models/workshops.controllers');
const Beneficiary = require('../models/Beneficiary');


const createWorkshop = async(req, res) => {
    try{
        console.log('here')
        let newWorkshop = new Workshop(req.body);
        let workshop = await newWorkshop.save();
        return res.status(200).json(workshop);
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

const deleteWorkshop = async (req,res) => {
    try{
        const workID=req.query.workshopID;
        if(workID){
            Workshop.deleteOne({workshopID: workID}).then(function(){
                return res.status(200).json({message: "Successfully deleted."});
            }).catch(function(error){
                return res.status(400).send({message: error});
            });
        }
        else{
            return res.status(400).send({message: "Missing Workshop ID"});
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }      
}

const editWorkshop = async (req, res) =>{
    try{
        const workID=req.body.workshopID;
        if(workID){
            const workshop = Workshop.updateOne({workshopid: workID}, req.body).then(function(){                
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


const getWorkshop = async (req, res) => {
    try {
        const workshop =  await Workshop.find(req.query);
        console.log(workshop)
        return res.status(200).json(workshop);
    }

    catch(err) {
        console.error(err.message);
        return res.status(500).send({message: err.message});
    }
}

module.exports={createWorkshop, deleteWorkshop, editWorkshop, getWorkshop};