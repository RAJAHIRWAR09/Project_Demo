const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route   GET api/subscribe
// @desc    Get all subscribers
// @access  Public (Admin)
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subscribers);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if already subscribed
        let subscriber = await Subscriber.findOne({ email });
        if (subscriber) {
            return res.status(400).json({ msg: 'Email already subscribed' });
        }

        const newSubscriber = new Subscriber({
            email
        });

        await newSubscriber.save();
        res.json({ msg: 'Subscribed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
