const express = require('express');
const router = express.Router();

const upload = require("./src/middlewares/uploadImage");
const homeController = require('./src/controllers/homeController');
const loadController = require("./src/controllers/loadingController");
const uploadedController = require("./src/controllers/uploadedController");

router
    .route('/')
    .get(homeController.homePage)
    .post(upload.single('fileInput'), homeController.uploadImage, loadController.loadPage);

router
    .route('/images')
    .get(uploadedController.getImages);


module.exports = router;