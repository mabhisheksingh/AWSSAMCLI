const { sendNotification } = require("/opt/nodejs/index");
const { getEmpDataByID } = require("/opt/nodejs/mysqlUtils");
let response;

exports.lambdaHandler =  (event, context, callback) => {

    const { empId } = event.pathParameters;
    try {  
        if(Number.isInteger( Number( empId) )) {
            getEmpDataByID(empId).then( empData =>  {
                let message = empData.length > 0 ? 'Employee data for id : ' : 'Employee data not found for id : ';
                response = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: message+ empId,
                        data : empData
                    })
                }
                callback(null , response)
            
            } )
            .catch(err =>     {
                    response = {
                        statusCode: 400,
                        body: JSON.stringify({
                            message: err.sqlMessage,
                            errorCode: err.code,
                        }),
                    }
                    callback(null, response);
            })
        }else{
            response = {
                'statusCode': 400,
                'body': JSON.stringify({
                    ErrorMessage: 'Please enter valid EmpID',
                    
                })
            }
        }
    } catch (err) {
        console.log(err);
       // return err;
        callback(null , err);
    }
};

