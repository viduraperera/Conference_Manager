import express from 'express'
import Payment from '../Models/Payment.js'

const router = express.Router();

export const getPayments = (async(req, res)=>{
    try {
        const payments = await Payment.find({}).
        populate({
            path: "user",
            select: "name"
        }).
        populate({
            path: "conference",
            select: "-status -note -__v"
        }).
        select("-__v");

        return res.status(200).send(payments);
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const getPayment = (async(req, res)=>{
    try {
        const payment = await Payment.findById({_id: req.params.id}).
        populate({
            path: "user",
            select: "name"
        }).
        populate({
            path: "conference",
            select: "-status -note -__v"
        }).
        select("-__v");
        if(!payment) return res.status(404).send("No Payment found");
        return res.status(200).send(payment);
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const createPayment = (async(req, res)=>{
    try {
        const payment = new Payment({...req.body});
        payment.save((error, savedPayment)=>{
            if(error) return res.status(400).send(error);
            return res.status(201).send(savedPayment);
        });
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const updatePayment = (async(req, res)=>{
    try {
        const check = await Payment.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Payment not found");
        await Payment.updateOne({ _id: req.params.id }, req.body);
        return res.status(200).send("Conference Updated");
    } catch (error) {
        return res.status(500).send(error)
    }
});

export const deletePayment = (async(req, res)=>{
    try {
        const check = await Payment.findById({_id: req.params.id});
        if(!check) return res.status(404).send("Payment not found");

        await Payment.deleteOne({_id: req.params.id}, (error, _)=>{
            if (error) return res.status(400).send(error);
            return res.status(200).send("Payment deleted");
        })
    } catch (error) {
        return res.status(500).send(error)
    }
})

export default router;