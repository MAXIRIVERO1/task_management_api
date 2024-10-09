const { Router } = require("express");
const { taskRouter } = require("./taskRouter.js");

const router = Router();

router.use("/task", taskRouter);

module.exports = {
    router
};