const winston = require('../config/winstonConfig.js');
var UserQueue=[];
var UserRoleQueue=[];
var UserId=1;



async function InsertUser(UserName,userAge,adress,phoneNumber,userRole){
    UId=UserId;
    console.log(UId,UserName,userAge,userRole);
    try{
        const UserData={
            "UserId":UId,
            "UserName":UserName,
            "UserAge":userAge,
            "adress":adress,
            "phoneNumber":phoneNumber
        }
    
        const UserRoleData={
            "UserId":UId,
            "UserRole":userRole
        }
    
        UserQueue.push(UserData);
        UserRoleQueue.push(UserRoleData);
        winston.info("UserQueue"+ JSON.stringify(UserQueue));
        winston.info("UserRoleQueue"+ JSON.stringify(UserRoleQueue));
        UserId++;
        return({"UserData":UserData,"UserRoleData":UserRoleData})
        
    }
    catch(err){
        winston.error(err);
    }
}

async function getUserbyID(UserId){
    var UserData=UserQueue[parseInt(UserId)-1];
    var UserRoleData=UserRoleQueue[parseInt(UserId)-1];
    const Userdetail={
        "UserId":UserData.UserId,
        "UserRole":UserRoleData.UserRole,
        "UserName":UserData.UserName,
        "UserAge":UserData.UserAge,
        "adress":UserData.adress,
        "phoneNumber":UserData.phoneNumber
    }
    return Userdetail;
}

module.exports.InsertUser=InsertUser;
module.exports.getUserbyID=getUserbyID;
module.exports.UserQueue=UserQueue;
module.exports.UserId=UserId;

