import { Router } from "express";
import { addTodo, getTodos, updateTodo } from "../../controllers/todos.js";

const v1Router = Router();

// localhost:3005/api/v1/todos
v1Router.post("/todos", addTodo);

v1Router.get("/todos", getTodos);

v1Router.patch("/todos", updateTodo);

export { v1Router };
