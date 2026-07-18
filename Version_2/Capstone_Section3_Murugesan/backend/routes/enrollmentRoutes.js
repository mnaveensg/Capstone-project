const express    = require('express');
const router     = express.Router();
const Enrollment = require('../models/enrollmentModel');
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('course', 'title');
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id).populate('course', 'title');
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found.' });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { studentName, studentEmail, course } = req.body;
    if (!studentName || !studentEmail || !course) {
      return res.status(400).json({ error: 'studentName, studentEmail, and course are required.' });
    }
    const enrollment = await Enrollment.create({ studentName, studentEmail, course });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found.' });
    res.json({ message: 'Enrollment deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
