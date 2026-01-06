import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const TodoModel = mongoose.model("TaskManager", TodoSchema);

export default TodoModel;
