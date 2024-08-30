const express = require("express");
const router = express.Router();
const studentController =require('../controllers/studentController');

router.get('/display',studentController.GetAllStudentData)
router.get("/delete/:id",studentController.deleteStudent);
router.get('/addStudent',studentController.addStudent)
router.get("/update/:id",studentController.updateStudent);

router.post('/newStudent',studentController.newStudent)
router.post('/saveUpdateStudent',studentController.saveUpdateStudent)


module.exports = router;