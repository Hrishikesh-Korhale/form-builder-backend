const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new form
router.post('/create', async (req, res) => {
  const { title, inputs } = req.body;
  if (!title || !inputs || inputs.length > 20) {
    return res.status(400).json({ error: 'Invalid form data' });
  }

  try {
    const form = new Form({ title, inputs });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a form by ID
router.put('/:id/edit', async (req, res) => {
  const { title, inputs } = req.body;
  if (!title || !inputs || inputs.length > 20) {
    return res.status(400).json({ error: 'Invalid form data' });
  }

  try {
    const form = await Form.findByIdAndUpdate(
      req.params.id,
      { title, inputs },
      { new: true }
    );
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a form by ID
router.delete('/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
