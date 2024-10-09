const routerTask = require("express").Router();

const { createTaskController } = require("../controllers/taskController.js");
const { getAllTaskController } = require("../controllers/taskController.js");
const { getTaskByIdController } = require("../controllers/taskController.js");
const { putTaskController } = require("../controllers/taskController.js");
const { deleteTaskController } = require("../controllers/taskController.js");

routerTask.post("/create", createTaskController);
routerTask.get("/getAll", getAllTaskController);
routerTask.get("/:id", getTaskByIdController);
routerTask.put("/update/:id", putTaskController);
routerTask.delete("/delete/:id", deleteTaskController);



module.exports = {
    routerTask
};