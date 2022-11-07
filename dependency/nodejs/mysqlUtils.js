//Constant DB variables
const HOST = "database-2-instance-1.c0mmxfoygcyg.ap-south-1.rds.amazonaws.com";
const USER = "admin" ;
const PASSWORD = "8s1MZaJdmPpmL4KjO3Fa";
const PORT = 3306;

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


module.exports ={
    testMySQLConnectivity
}
