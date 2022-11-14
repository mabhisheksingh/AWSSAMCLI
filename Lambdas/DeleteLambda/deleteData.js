let response;
const { deleteEmpData } = require("/opt/nodejs/mysqlUtils");

exports.lambdaHandler = (event, context, callback) => {
    const { empId } = event.pathParameters;
    console.log("Id  ", empId);
    try {
        if (Number.isInteger(Number(empId))) {
            deleteEmpData(empId)
                .then((noOfRowDeleted) => {
                    const status =
                    noOfRowDeleted > 0
                            ? "Emp ID deleted successfully "
                            : "Emp ID not find";
                    response = {
                        statusCode: 200,
                        body: JSON.stringify({
                            status: status
                        })
                    }
                    callback(null, response);
                })
                .catch((err) => {
                    // console.error(err);
                    response = {
                        statusCode: 400,
                        body: JSON.stringify({
                            message: err.sqlMessage,
                            errorCode: err.code,
                        }),
                    };
                    callback(null, response);
                });
        } else {
            // console.error(err);
            response = {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Please enter valid empId",
                    errorCode: "Bad Request",
                }),
            };
            callback(null, response);
        }
    } catch (err) {
        console.error(err);
        callback(null, err);
    }
};
