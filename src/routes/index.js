const { Router } = require("express");
const { routerTask } = require("./routerTask.js");

const router = Router();

router.use("/task", routerTask);

module.exports = {
    router
}