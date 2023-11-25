const express = require("express");

const router = express.Router();

const scoreController = require("../../../controllers/api/v1/score.js");

router.get("/", scoreController.index);

router.post("/", scoreController.create);

router.put("/:team", scoreController.update);



module.exports = router;