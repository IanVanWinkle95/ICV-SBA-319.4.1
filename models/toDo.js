const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
})

const toDo = mongoose.model('toDo', todoSchema);

module.exports = toDo;