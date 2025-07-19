const express = require('express');
const router = express.Router();

let customers = []; // In-memory storage

// CREATE
router.post('/', (req, res) => {
  const newCustomer = req.body;

  if (!newCustomer.name || !newCustomer.phone) {
    return res.status(400).json({ message: 'Name and phone are required.' });
  }

  customers.push(newCustomer);
  res.status(201).json({ message: '✅ Customer added successfully', customer: newCustomer });
});

// READ all
router.get('/', (req, res) => {
  res.json(customers);
});

// UPDATE
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedCustomer = req.body;

  if (!customers[id]) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  customers[id] = updatedCustomer;
  res.json({ message: '✏️ Customer updated successfully', customer: updatedCustomer });
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  if (!customers[id]) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  customers.splice(id, 1);
  res.json({ message: '🗑️ Customer deleted successfully' });
});

module.exports = router;
