const {req, res} = require("express");
const Task = require("../model/ModelTask");

        exports.getTasks = async (req, res) => {
            const tasks = await Task.find()
            res.status(200).json({
                success:true,
                data:tasks,
            });
        };
      exports.createTask = async (req, res, next) => {
            console.log()
            const task = await Task.create({
                text: req.body.text }
                );
            res.status(200).json({
                success:true,
                data:task,
            });
        };

        exports.deleteTask = async (req, res, next) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: deleteTask,
    })
}

exports.updateTask = async (req, res, next) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, {...req.body});

    res.status(200).json({
        success: true,
        data: updateTask,
    })
}