const express = require("express");
const router = express.Router();
const subjectController = require('../controllers/subjectController')



router.get('/display',subjectController.getAllSubject)
router.get("/delete/:id",subjectController.deleteSubject);
router.get('/addSubject',subjectController.addSubject)
router.post('/newSubject',subjectController.newSubject)


module.exports = router;
