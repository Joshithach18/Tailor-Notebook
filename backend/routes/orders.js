const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json({ message: 'Order added successfully' });
});

router.get('/', (req, res) => {
  res.json(orders);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  orders[id] = req.body;
  res.json({ message: 'Order updated successfully' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  orders.splice(id, 1);
  res.json({ message: 'Order deleted successfully' });
});

module.exports = router;
