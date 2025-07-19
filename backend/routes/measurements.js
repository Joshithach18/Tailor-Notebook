const express = require('express');
const router = express.Router();

let measurements = [];

router.post('/', (req, res) => {
  const newMeasurement = req.body;
  measurements.push(newMeasurement);
  res.status(201).json({ message: 'Measurement added successfully' });
});

router.get('/', (req, res) => {
  res.json(measurements);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  measurements[id] = req.body;
  res.json({ message: 'Measurement updated successfully' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  measurements.splice(id, 1);
  res.json({ message: 'Measurement deleted successfully' });
});

module.exports = router;
