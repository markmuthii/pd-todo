import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "In Progress",
    },
  },
  {
    timestamps: true,
  }
);

const Todo = new model("todo", todoSchema);

export { Todo };
