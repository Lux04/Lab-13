const express = require('express');
const TaskModel = require('../models/taskModel');

const router = express.Router();

router.get('/', (req, res) => {
  TaskModel.getAll((err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tasks);
  });
});

router.get('/:id', (req, res) => {
  TaskModel.getById(req.params.id, (err, task) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  });
});

router.post('/', (req, res) => {
  TaskModel.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.id, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  TaskModel.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task updated', id: req.params.id });
  });
});

router.delete('/:id', (req, res) => {
  TaskModel.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task deleted' });
  });
});

module.exports = router;