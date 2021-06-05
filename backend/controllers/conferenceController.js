import express from 'express';
import Conference from '../Models/Conference.js';

const router = express.Router();

export const getConferences = (async(req, res)=>{
    try {
        const conference = await Conference.findOne();
        return res.status(200).send(conference);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export const createConference = (async(req, res)=>{
    try {
        const conference = new Conference({...req.body});
        conference.save((error, savedConference)=>{
            if(error) return res.status(400).send(error);
            return res.status(201).send(savedConference);
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
    }
});

export const updateConference = (async(req, res)=>{
    try {
        const check = await Conference.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Conference not found");
        await Conference.updateOne({ _id: req.params.id }, req.body);
        return res.status(200).send("Conference Updated");
    } catch (error) {
        console.log(error);;
        return res.status(500).send(error)
    }
});

export const deleteConference = (async(req, res)=>{
    try {
        const check = await Conference.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Conference not found");

        await Conference.deleteOne({_id: req.params.id}, (error, _)=>{
            if (error) return res.status(400).send(error);
            return res.status(200).send("Conference deleted");
        })
    } catch (error) {
        return res.status(500).send(error);
    }
})

export default router;