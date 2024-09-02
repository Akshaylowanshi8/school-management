const express = require("express");
const router = express.Router();
const schoolController = require('../controllers/schoolController')

// router.post("/ragister",School_Controller.RagisterSchool);
// router.get('/GetAllData',School_Controller.GetAllData/)

router.get('/display',schoolController.findAllSchools)
router.get("/delete/:id",schoolController.deleteSchool);
router.get("/update/:id",schoolController.updateSchool);
router.post('/search',schoolController.search)
router.get('/addSchool',schoolController.addSchool)
router.post('/newSchool',schoolController.newSchool)
router.post('/saveUpdate' , schoolController.saveUpdate)

module.exports = router;
