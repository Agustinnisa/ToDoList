const Todo = require('../models/Todo');

// Create a new Todo
const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({
    title,
    description,
    user: req.user._id,
  });

  try {
    const createdTodo = await todo.save();
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user._id }); 
  res.json(todos);
};

// Get Todo by ID
const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

// Update Todo
const updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    await todo.remove();
    res.json({ message: 'Todo removed' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

// Delete all Todos
const deleteAllTodos = async (req, res) => {
  await Todo.deleteMany({ user: req.user._id });
  res.json({ message: 'All todos removed' });
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
};
