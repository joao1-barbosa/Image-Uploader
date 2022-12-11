const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const upload = require("./middlewares/uploadImage");


router
    .route('/')
    .get(homeController.homePage)
    .post(upload.single('foto'), homeController.fazendoPost);

router
    .route('/images')
    .get(homeController.getImages);


module.exports = router;