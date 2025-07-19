const express = require('express');
const router = express.Router();

let payments = [];

router.post('/', (req, res) => {
  const newPayment = req.body;
  payments.push(newPayment);
  res.status(201).json({ message: 'Payment added successfully' });
});

router.get('/', (req, res) => {
  res.json(payments);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  payments[id] = req.body;
  res.json({ message: 'Payment updated successfully' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  payments.splice(id, 1);
  res.json({ message: 'Payment deleted successfully' });
});

module.exports = router;
