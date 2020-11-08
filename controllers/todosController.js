const Todo = require('../models/todo');

exports.get = async function (req, res) {
    let todos = await Todo.find({});
    res.send(todos);
};

exports.getById = async function (req, res) {
    let todo = await Todo.findOne({_id: req.params.id});
    res.send(todo);
};

exports.post = async function (req, res) {
    const newTodo = new Todo({
        dueDate: req.body.dueDate,
        description: req.body.description,
        completed: req.body.completed,
    });

    await newTodo.save();
    res.sendStatus(200);
}

exports.patch = async function (req, res) {
    const updateData = {
        dueDate: req.body.dueDate,
        description: req.body.description,
        completed: req.body.completed,
    };

    await Todo.findOneAndUpdate({_id: req.params.id}, updateData); 
    res.sendStatus(200);   
};

exports.delete = async function (req, res) {
    await Todo.findOneAndDelete({_id: req.params.id});
    res.sendStatus(200);
};
