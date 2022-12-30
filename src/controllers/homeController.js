exports.homePage = (req, res) => {
    res.render('home');
};

exports.uploadImage = (req, res) => {

    if (req.file) {
        res.render('loading');

        setTimeout(() => {
            console.log("upou");
        }, 2600);

        return;
    }

    return res.status(422);

};

exports.uploadedPage = (req, res) => {
    res.render('uploaded');
}