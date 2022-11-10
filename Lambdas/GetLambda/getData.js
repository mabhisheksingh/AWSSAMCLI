const { sendNotification } = require("/opt/nodejs/index");
const { getAllEmpData } = require("/opt/nodejs/mysqlUtils");
let response;

exports.lambdaHandler =  (event, context, callback) => {
    try {  
    console.log("Query : ");
    getAllEmpData().then( d =>  {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get hello world mysql',
                data : d
            })
        }
        callback(null , response)
        
    } ).catch(err =>  callback(null , err));
    } catch (err) {
        console.log(err);
       // return err;
        callback(null , err);
    }
};
