import express from 'express';
import Research from '../Models/Research.js';

const router = express.Router();

export const getResearches = async (req, res) => {
  try {
    const researches = await Research.find({})
      .populate({
        path: 'user',
        select: 'name',
      })
      .populate({
        path: 'approved_by',
        select: 'name',
      })
      .select('-__v');
    return res.status(200).send(researches);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getResearch = async (req, res) => {
  try {
    const research = await Research.findById({ _id: req.params.id })
      .populate({
        path: 'user',
        select: 'name',
      })
      .populate({
        path: 'approved_by',
        select: 'name',
      })
      .select('-__v');
    if (!research) return res.status(404).send('No research found');
    return res.status(200).send(research);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createResearch = async (req, res) => {
  try {
    const research = new Research({ ...req.body });
    research.path = req.file.path;
    research.save((error, savedResearch) => {
      if (error) return res.status(400).send(error);
      return res.status(201).send(savedResearch);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateResearch = async (req, res) => {
  try {
    const check = await Research.findById({ _id: req.params.id });
    if (!check) return res.status(404).send('Research not found');
    await Research.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send('Research Updated');
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteResearch = async (req, res) => {
  try {
    const check = await Research.findById({ _id: req.params.id });
    if (!check) return res.status(404).send('Research not found');

    await Research.deleteOne({ _id: req.params.id }, (error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send('Research deleted');
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default router;
