function timer(){
    return new Promise ((resolve, reject) => {
      setInterval(() => {
        console.log("timer on");
        resolve();
      }, 3000);
    });
  }

exports.homePage = (req, res) => {
    res.render('home');
};

exports.uploadImage = async (req, res, next) => {
    try {
        if (req.file) {
            res.render('loading', {path : req.file.path});
            timer()
            .then((answer) => {
                console.log("FOI CARAIO");
            });
            return;
        }

        return res.status(422);

    } catch (error) {
        next(error);
    }
};

