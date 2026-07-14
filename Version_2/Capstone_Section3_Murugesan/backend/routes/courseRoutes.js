const express = require('express');
const router  = express.Router();
const Course  = require('../models/courseModel');

// GET /api/courses — return all courses (populate school reference)
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('school', 'name');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/courses/:id — return one course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('school', 'name');
    if (!course) return res.status(404).json({ error: 'Course not found.' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/courses — create a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, school } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'title is required.' });
    }
    const course = await Course.create({ title, description, school });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/courses/:id — update a course
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ error: 'Course not found.' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/courses/:id — delete a course
router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found.' });
    res.json({ message: 'Course deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
