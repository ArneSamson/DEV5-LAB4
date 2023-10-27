const express = require("express");

//create new router
const router = express.Router();

//import controller
const messagesController = require("../../../controllers/api/v1/messages.js");


router.get("/", messagesController.index);

router.post("/", messagesController.create);


module.exports = router;