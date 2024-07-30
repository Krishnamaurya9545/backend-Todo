/*
Todo {
  title:string
  description:string
  completed: boolean
}
*/
const mongoose = require("mongoose");
//mongodb url handy
// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env

//mongodb+srv://Admin:RcHGe573fVk2OajJ@cluster0.4u0ajsj.mongodb.net/todos
mongoose.connect("mongodb+srv://Admin:RcHGe573fVk2OajJ@cluster0.4u0ajsj.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}