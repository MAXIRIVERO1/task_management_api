const { createTaskHandler } = require("../handlers/taskHandler.js");
const { getAllTaskHandler } = require("../handlers/taskHandler.js");
const { getTaskByIdHandler } = require("../handlers/taskHandler.js");
const { putTaskHandler } = require("../handlers/taskHandler.js");
const { deleteTaskHandler } = require("../handlers/taskHandler.js");


const createTaskController = async(req, res) => {
    try {
        const { title, description, dueDate, priority, status} = req.body;
        const created = await createTaskHandler({ title, description, dueDate, priority, status })
        return res.status(200).json(created);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const getAllTaskController = async(req, res) => {
    try {
        const found = await getAllTaskHandler();
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getTaskByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const found = await getTaskByIdHandler(id);
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const putTaskController = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, status } = req.body;
        const updated = await putTaskHandler(id, title, description, dueDate, priority, status);
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteTaskController = async(req, res) => {
    try {
        const { id } = req.params;
        const message = await deleteTaskHandler(id);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

module.exports = {
    createTaskController,
    getAllTaskController,
    getTaskByIdController,
    putTaskController,
    deleteTaskController
};