const express = require('express');
const router  = express.Router();
const School  = require('../models/schoolModel');

// GET /api/schools — return all schools
router.get('/', async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/schools/:id — return one school
router.get('/:id', async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) return res.status(404).json({ error: 'School not found.' });
    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/schools — create a new school
router.post('/', async (req, res) => {
  try {
    const { name, address, principal } = req.body;
    if (!name || !address || !principal) {
      return res.status(400).json({ error: 'name, address, and principal are required.' });
    }
    const school = await School.create({ name, address, principal });
    res.status(201).json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/schools/:id — update a school
router.put('/:id', async (req, res) => {
  try {
    const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!school) return res.status(404).json({ error: 'School not found.' });
    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/schools/:id — delete a school
router.delete('/:id', async (req, res) => {
  try {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) return res.status(404).json({ error: 'School not found.' });
    res.json({ message: 'School deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
