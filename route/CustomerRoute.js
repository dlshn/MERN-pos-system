const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/CustomerController');

router.post('/create',CustomerController.saveCustomer);
router.put('/update/:id',CustomerController.updateCustomer);
router.delete('/delete/:ide',CustomerController.saveCustomer);
router.get('/find/:id',CustomerController.findCustomer);
router.get('/find-all',CustomerController.loadAllCustomer);

module.exports = router;