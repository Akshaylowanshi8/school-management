const express = require("express");
const router = express.Router();
const classController = require('../controllers/classController')

router.get("/display",classController.getAllClass);
router.get("/delete/:id",classController.deleteClass);
router.get('/addClass',classController.addClass)
router.post('/newClass',classController.newClass)

module.exports = router;