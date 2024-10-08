const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks
router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'An error occurred while fetching tasks' });
  }
});

// POST /api/tasks
router.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      name: req.body.name,
      active: req.body.active,
      visible :  req.body.visible,
    });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'An error occurred while adding the task' });
  }
});

// DELETE /api/tasks/:id
router.delete('/api/tasks/:id', async (req, res) => {
    try {

        await Task.findByIdAndDelete(req.params.id);
        console.log(req.params)
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'An error occurred while deleting the task' });
  }
});

// Update a task

// PUT /api/tasks/:id
router.put('/api/tasks/:id', async (req, res) => {
    try {
    const taskId = req.params.id;
    const updatedTaskData = {
      active: req.body.active,
      visible: req.body.visible
    };

    const updatedTask = await Task.findByIdAndUpdate(taskId, updatedTaskData, {
      new: true // Return the updated task
    });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'An error occurred while updating the tasks' });
  }
});


module.exports = router;