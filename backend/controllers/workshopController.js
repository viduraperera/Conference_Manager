import express from 'express'
import Workshop from '../Models/Workshop.js'

const router = express.Router();

export const getWorkshops = (async(req, res)=>{
    try {
        const workshops = await Workshop.find({}).
        populate({
            path: "conductor",
            select: "name"
        }).
        populate({
            path: "approved_by",
            select: "name"
        }).
        select("-__v");
        return res.status(200).send(workshops);
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const getWorkshop = (async(req, res)=>{
    try {
        const workshop = await Workshop.findById({_id: req.params.id}).
        populate({
            path: "conductor",
            select: "name"
        }).
        populate({
            path: "approved_by",
            select: "name"
        }).
        select("-__v");
        if(!workshop) return res.status(404).send("No workshop found");
        return res.status(200).send(workshop);
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const createWorkshop = (async(req, res)=>{
    try {
        const workshop = new Workshop({...req.body});
        workshop.save((error, savedWorkshop)=>{
            if(error) return res.status(400).send(error);
            return res.status(201).send(savedWorkshop);
        });
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const updateWorkshop = (async(req, res)=>{
    try {
        const check = await Workshop.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Workshop not found");
        await Workshop.updateOne({ _id: req.params.id }, req.body);
        return res.status(200).send("Conference Updated");
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const deleteWorkshop = (async(req, res)=>{
    try {
        const check = await Workshop.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Workshop not found");

        await Workshop.deleteOne({_id: req.params.id}, (error, _)=>{
            if (error) return res.status(400).send(error);
            return res.status(200).send("Workshop deleted");
        })
    } catch (error) {
        return res.status(500).send(error)
    }
})

export default router;