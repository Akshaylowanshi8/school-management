

const express = require("express");
const router = express.Router();



const teacherController =require('../controllers/teacherController')
router.get("/delete/:id",teacherController.deleteTeacher);
router.get('/display',teacherController.getAllTeacher )
router.get('/addTeacher',teacherController.addTeacher )
router.post('/newTeacher',teacherController.newTeacher)

module.exports=router