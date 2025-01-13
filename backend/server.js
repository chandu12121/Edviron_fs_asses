const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const transactionsRouter = require('./routes/auth.js');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/transactions', transactionsRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));