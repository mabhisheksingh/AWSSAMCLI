
const { testUtils } = require("/opt/nodejs/index")
let response;

exports.lambdaHandler =  (event, context, callback) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Post hello world',
                data : testUtils("Abhishek")
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        // return err;
        callback(null, err);
    }
    // return response
    callback(null, response);
};
