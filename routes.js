const express = require('express');
const router = express.Router();

const upload = require("./src/middlewares/uploadImage");
const homeController = require('./src/controllers/homeController');

router
    .route('/')
    .get(homeController.homePage)
    .post(upload.single('fileInput'), homeController.uploadImage);

router
    .route('/uploaded')
    .get(homeController.uploadedPage);

module.exports = router;