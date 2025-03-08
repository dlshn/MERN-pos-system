const express = require('express');
const router = express.Router();
const PaymentController = require('../controller/PaymentController');

router.post('/create',PaymentController.makePayment);
router.put('/income-by-day',PaymentController.findIncomeToday);
router.put('/income-by-month',PaymentController.findIncomeByCurrentMonth);

module.exports = router;