let response;
const { createEmpData } = require("/opt/nodejs/mysqlUtils");
exports.lambdaHandler =  (event, context, callback) => {
    const data  = JSON.parse(event.body);
    try {
        createEmpData( data   ).then( primaryKey =>  {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'Data inserted Successfully',
                    primaryKey : primaryKey
                })
            }
            callback(null , response)
        
        } ).catch( err => {
                // console.error(err);
                response = {
                'statusCode': 409 ,
                'body': JSON.stringify({
                    message: err.sqlMessage,
                    errorCode : err.code
                })
            }
                callback(null , response)
            });
    } catch (err) {
        console.error(err);
        callback(null, err);
    }
};
