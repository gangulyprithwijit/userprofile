const winston = require('../config/winstonConfig.js');

var dataModel = require('../model/data.js');


async function post(req, res, next) {


    var postData;

    var UserName = req.query.UserName;
    var userAge = req.query.userAge;
    var adress = req.query.adress;
    var phoneNumber = req.query.phoneNumber;
    var userRole;
    var presentData = dataModel.UserQueue;

    try {
        var presentDataLength = presentData.length;

        if (presentDataLength > 0) {
            userRole = "User";

            postData = await dataModel.InsertUser(UserName, userAge, adress, phoneNumber, userRole);
        }
        else {
            userRole = "admin";

            postData = await dataModel.InsertUser(UserName, userAge, adress, phoneNumber, userRole);
        }

        if (postData) {

            res.status(201).json(postData);
        }
        else {
            res.status(400).json("Something not correct");
        }
    }
    catch(err){
        winston.err(err);
        res.status(500).json("err");
    }
    

}

module.exports.post = post;