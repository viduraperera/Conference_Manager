import express from 'express';
const router = express.Router();

import upload from '../Middleware/imageUpload.js';
import { getWorkshops, getWorkshop, createWorkshop, updateWorkshop, deleteWorkshop } from '../controllers/workshopController.js';

router.get('/', getWorkshops);
router.get('/:id', getWorkshop);
router.post('/', upload.single('file'), createWorkshop);
router.patch('/:id', updateWorkshop);
router.delete('/:id', deleteWorkshop);

export default router;
