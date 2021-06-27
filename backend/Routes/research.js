import express from 'express';
const router = express.Router();

import upload from '../Middleware/imageUpload.js';
import { getResearches, getResearch, createResearch, updateResearch, deleteResearch } from '../controllers/researchController.js';

router.get('/', getResearches);
router.get('/:id', getResearch);
router.post('/', upload.single('file'), createResearch);
router.patch('/:id', updateResearch);
router.delete('/:id', deleteResearch);

export default router;
