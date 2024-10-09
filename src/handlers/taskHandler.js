const { Task } = require("../db/db.js");



const createTaskHandler = async(task) => {
    const created = await Task.create(task);
    return created;
};

const getAllTaskHandler = async() => {
    const found = await Task.findAll();
    return found;
};

const getTaskByIdHandler = async(id) => {
    const found = await Task.findByPk(id);
    return found;
};

const putTaskHandler = async(id, title, description, dueDate, priority, status) => {
    const found = await Task.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "Task not found"
        }
    }else{
        const obj = { title, description, dueDate, priority, status };
        const updated = await found.update(obj);
        return updated;
    };
};

const deleteTaskHandler = async(id) => {
    const found = await Task.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "Task not found"
        }
    }else{
        await found.destroy();
        return "deletion complete";
    };
};

module.exports = {
    createTaskHandler,
    getAllTaskHandler,
    getTaskByIdHandler,
    putTaskHandler,
    deleteTaskHandler
}