const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mogodb
    await todo.create({
        title:createPayload.title,
        desccription:createPayload.description,
        completed: false
    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedpayload =updateTodo.safeParse(updatePayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);

