let response;
const { updateEmpData } = require("/opt/nodejs/mysqlUtils");
exports.lambdaHandler =  (event, context, callback) => {
    const data  = JSON.parse(event.body);
    try {
        updateEmpData( data   ).then( result =>  {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'Data Updated Successfully',
                    result : result
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


// const HOST = "database-2-instance-1.c0mmxfoygcyg.ap-south-1.rds.amazonaws.com";
// const USER = "admin" ;
// const PASSWORD = "8s1MZaJdmPpmL4KjO3Fa";
// const PORT = 3306;
// const DATABASE = "CEPGA111";

// const mysql = require("mysql");
// // values(   
// //     7839, 'KING', 'PRESIDENT', null,   
// //     STR_TO_DATE('17-11-1981','dd-mm-yyyy'),   
// //     5000, null, 10   
// //    );
// function updateEmpData( data ){
//     return new Promise(function(resolve, reject) {
//         var connection =mysql.createConnection({
//                             host: HOST,
//                             user: USER,
//                             password: PASSWORD,
//                             port     : PORT,
//                             database : DATABASE
//                         });
//         const values =[  [  data.job ,   data.mgr  , data.sal ,   data.comm  , data.deptno , data.empno ]  ];
//         // var query_str = 'insert into emp(empno, ename ,job ,mgr ,hiredate ,sal ,comm , deptno ) values?'
//         let sql = `UPDATE emp SET job = ? , mgr = ? , sal = ? , comm = ? , deptno = ?   WHERE empno = ?`;
//         connection.query(sql, [ values ] , function (err, result , fields ) {

//             console.log( err , result ,fields )
//             if (err) {
//                 return reject( err );
//             }
//             resolve( result );
//         });
        
//         connection.end();
        
//     });
// }
