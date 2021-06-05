import express from 'express';
const router = express.Router();

import  { getPayments, getPayment, createPayment, updatePayment, deletePayment } from '../controllers/paymentController.js';

router.get('/', getPayments);
router.get('/:id', getPayment);
router.post('/', createPayment);
router.patch('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default router;