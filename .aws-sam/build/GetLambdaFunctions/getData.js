const { testUtils , sendNotification } = require("/opt/nodejs/index");
const { testMySQL } = require("/opt/nodejs/mysqlUtils");
let response;
const mysql = require('mysql');


exports.lambdaHandler =  (event, context, callback) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get hello world mysql',
                data : testUtils("Abhishek")
            })
        }
        let message={
            Name:"Abhishek",
            Age: 26
        }
        sendNotification( {event,message} );

    } catch (err) {
        console.log(err);
       // return err;
        callback(null , err);
    }
    testMySQL();
   // setTimeout(()=>{
        //return response
    //},3000);
    callback(null , response);
    
};

