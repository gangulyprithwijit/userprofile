const winston = require('../config/winstonConfig.js');

var dataModel = require('../model/data.js');


async function get(req, res, next) {

    var UserId = req.query.UserId;
    try {
        const getUserbyID = await dataModel.getUserbyID(UserId);
        if (getUserbyID) {

            res.status(201).json(getUserbyID);
        }
        else {
            res.status(204).json("Id not present");
        }
    }
    catch (err) {
        winston.err(err);
        res.status(500).json(err);
    }


}

module.exports.get = get;