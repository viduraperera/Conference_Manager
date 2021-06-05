import express from 'express';

const router = express.Router();

import  { getConferences, createConference, updateConference, deleteConference } from '../controllers/conferenceController.js';

router.get('/', getConferences);
router.post('/', createConference);
router.patch('/:id', updateConference);
router.delete('/:id', deleteConference);

export default router;