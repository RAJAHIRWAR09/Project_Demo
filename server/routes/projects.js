const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { upload, resizeImage } = require('../middleware/upload');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/projects
// @desc    Add a project
// @access  Public (should be Private in real app)
router.post('/', upload.single('image'), resizeImage, async (req, res) => {
    const { title, description } = req.body;

    if (!req.file) {
        return res.status(400).json({ msg: 'Please upload an image' });
    }

    try {
        const newProject = new Project({
            title,
            description,
            image: req.file.filename // Store filename, we'll serve static
        });

        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
