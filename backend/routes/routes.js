const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get("/", mainController.list)
router.get("/:id", mainController.show)
router.post("/", mainController.create)
router.put("/:id", mainController.update)
router.delete("/:id", mainController.destroy)

module.exports = router