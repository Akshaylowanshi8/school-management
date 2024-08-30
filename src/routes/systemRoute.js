const express = require("express");
const router = express.Router();
const systemController = require('../controllers/systemController')



router.get('/addManagement',systemController.addManagement)
router.get('/home',systemController.home)
router.get("/delete/:id",systemController.deleteManagement);
router.post('/search',systemController.search)
router.post("/newManagement",systemController.newManagement);

module.exports = router;