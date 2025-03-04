const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const CustomerRoute = require('./route/CustomerRoute');
const OrderRoute = require('./route/OrderRoute');
const PaymentRout = require('./route/PaymentRout');
const ProductRoute = require('./route/ProductRoute');
const UserRoute = require('./route/UserRoute');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/customers', CustomerRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/payments', PaymentRout);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/users', UserRoute);