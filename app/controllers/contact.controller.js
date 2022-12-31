exports.create = (req, res) => {
    res.send({ messege: "Create handler" });
};

exports.findAll = (req, res) => {
    res.send({ messege: "FindAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ messege: " FindOne handler" });
};

exports.update = (req, res) => {
    res.send({ messege: "Update handler" });
};

exports.delete = (req, res) => {
    res.send({ messege: "Delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ messege: "DeleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ messege: "FindOneFavorite handler" });
};


