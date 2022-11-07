const SNS = require("aws-sdk/clients/sns");
const region = "ap-south-1"
const topicName = "arn:aws:sns:ap-south-1:181191750685:AbhishekS-GroupA111";


async function sendNotification({event,message,timestamp}){

    message = message ? message :{
        "Name":"testing"
    }
    let sns = new SNS({ region:region});
    let params = {
            Message: JSON.stringify(message),
            TopicArn: topicName ,
            Subject: "Notification"
    };

    console.log("params  : ",params);
    const res = await sns.publish(params).promise();
    console.log("Res ",res);
}


module.exports ={  sendNotification }