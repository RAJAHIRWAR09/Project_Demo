const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   GET api/contact
// @desc    Get all contact submissions
// @access  Public (Admin)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
    const { fullName, email, mobile, city } = req.body;

    try {
        const newContact = new Contact({
            fullName,
            email,
            mobile,
            city
        });

        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
