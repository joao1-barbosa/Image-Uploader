const fs = require('fs');
const util = require('util');

exports.uploadedPage = (req, res) => {
    res.render('uploaded');
};

exports.getImages = (req, res) => {
    const uploadDir = process.cwd() + '/src/public/upload';

    const images = [];

    const readDir = util.promisify(fs.readdir);

    // Reading current working directory
    readDir(uploadDir)
        // If promise resolved and datas are fetched
        .then(filenames => {
            for (let filename of filenames) {
                images.push(filename);
            }

            res.send(images);
        })
        .catch(err => {
            console.log(err);
        })
};