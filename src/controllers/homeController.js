exports.homePage = (req, res) => {
    res.render('home');
};

exports.uploadImage = async (req, res, next) => {
    try {
        if (req.file) {
            return res.render('uploaded', {path : req.file.path});
        }

        return res.status(422);

    } catch (error) {
        next(error);
    }
};

