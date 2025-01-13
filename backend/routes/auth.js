const express = require('express');
const Transaction = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authenticateToken = (req, res, next) => {
    const token = req.cookies['auth_token'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

router.get('/', authenticateToken, async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/school/:school_id', authenticateToken, async (req, res) => {
    try {
        const transactions = await Transaction.find({ school_id: req.params.school_id });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/status/:custom_order_id', authenticateToken, async (req, res) => {
    try {
        const transaction = await Transaction.findOne({ custom_order_id: req.params.custom_order_id });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.json({ status: transaction.status });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/webhook', async (req, res) => {
    const { status, order_info } = req.body;
    try {
        await Transaction.updateOne(
            { collect_id: order_info.order_id },
            { $set: { status } }
        );
        res.json({ message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;



