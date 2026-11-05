import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  // Query values arrive as text; convert 'true'/'false' to a real boolean.
  // No parameter -> leave undefined so all tasks are returned.
  let completed;
  if (req.query.completed !== undefined) {
    completed = req.query.completed === 'true';
  }

  const tasks = await taskService.getAllTasks(completed);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
