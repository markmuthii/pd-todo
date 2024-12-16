import { Todo } from "../database/Models/todo.js";

export const addTodo = async (req, res) => {
  // This is using the .then .catch syntax to handle the promise

  /* 
  Todo.create(req.body)
    .then((data) => {
      return res.status(201).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "There was an error creating the todo",
      });
    }); 
  */

  // This is using async await syntax
  try {
    const newTodo = await Todo.create(req.body);

    return res.status(201).json({
      success: true,
      data: newTodo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "There was an error creating the todo",
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "There was an error reading the todos",
    });
  }
};

export const updateTodo = async (req, res) => {
  const todoId = req.query.id;

  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "ID invalid",
      });
    }

    res.json({
      success: true,
      data: {},
    });
  } catch (error) {}
};
