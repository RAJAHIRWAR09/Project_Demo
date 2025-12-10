const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const { upload, resizeImage } = require('../middleware/upload');

// @route   GET api/clients
// @desc    Get all clients
// @access  Public
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/clients
// @desc    Add a client
// @access  Public
router.post('/', upload.single('image'), resizeImage, async (req, res) => {
    const { name, designation, description } = req.body;

    if (!req.file) {
        return res.status(400).json({ msg: 'Please upload an image' });
    }

    try {
        const newClient = new Client({
            name,
            designation,
            description,
            image: req.file.filename
        });

        const client = await newClient.save();
        res.json(client);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
