const mongoose = require('mongoose');

const {Schema} = mongoose;

const todoSchema = new Schema({
  dueDate: {type: Date, required: true },
  description: {type: String, required: true},
  completed: {type: Boolean, required: true},
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
