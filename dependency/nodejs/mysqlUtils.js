//Constant DB variables
const HOST = "database-2-instance-1.c0mmxfoygcyg.ap-south-1.rds.amazonaws.com";
const USER = "admin" ;
const PASSWORD = "8s1MZaJdmPpmL4KjO3Fa";
const PORT = 3306;
const DATABASE = "CEPGA111";

const mysql = require("mysql");


function testMySQLConnectivity(){
    console.log("TestMYSQL --start---")
    console.log(HOST,USER,  PASSWORD, PORT);

    const con = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        port     : PORT
    });

    con.connect(function(err) {
        if (err){
            console.error(err);
        }else{
            console.log("Connected!");
        }
    });

    con.end();
}

function getAllEmpData(){
    return new Promise(function(resolve, reject) {
                // The Promise constructor should catch any errors thrown on
                // this tick. Alternately, try/catch and reject(err) on catch.
                var connection =mysql.createConnection({
                                    host: HOST,
                                    user: USER,
                                    password: PASSWORD,
                                    port     : PORT,
                                    database : DATABASE
                                });
        
                var query_str = "SELECT * from emp" ;
        
                
        
                connection.query(query_str, function (err, rows, fields) {
                    // Call reject on error states,
                    // call resolve with results
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
                
                connection.end();
                
            });
}

module.exports ={
    testMySQLConnectivity ,getAllEmpData
}
