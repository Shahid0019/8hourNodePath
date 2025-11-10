const asyncWrappper = require("../middleware/async");
const Task = require("../models/task");
const getAllTasks = asyncWrappper(async (req,res) => {
    const tasks = await Task.find({});
    // res.status(200).json({ tasks });
    // res.status(200).json({ tasks,amout:tasks.length });
    res
      .status(200)
      .json({ status: 'success', data: { tasks, nbHits: tasks.length } });

});

const createTask = asyncWrappper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });

});
const getTask = asyncWrappper (async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
});
const updateTask = asyncWrappper(async (req, res) => {
 
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json(task);

});

const deleteTask = asyncWrappper(async (req, res) => {

    res.send("task deleted");
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id :${taskID}` });
    }
    res.status(200).json({ task });
 
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
