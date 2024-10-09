const { createTaskController } = require("../controllers/taskController.js");
const { getAllTaskController } = require("../controllers/taskController.js");
const { getTaskByIdController } = require("../controllers/taskController.js");
const { putTaskController } = require("../controllers/taskController.js");
const { deleteTaskController } = require("../controllers/taskController.js");

const taskRouter = require("express").Router();

taskRouter.post("/create", createTaskController); 
taskRouter.get("/getAll", getAllTaskController); 
taskRouter.get("/:id", getTaskByIdController); 
taskRouter.put("/update/:id", putTaskController); 
taskRouter.delete("/delete/:id", deleteTaskController);



module.exports = {
    taskRouter
};