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


function getEmpDataByID(empId){
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
        
                var query_str = "SELECT * from emp where empno= ?" ;
                let values = [ [empId]]
                connection.query(query_str,[values] ,function (err, rows, fields) {
                //    console.log( err , rows ,  fields)
                    // call resolve with results
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
                
                connection.end();
                
            });
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


function createEmpData( data ){
    
    return new Promise(function(resolve, reject) {
        var connection =mysql.createConnection({
                            host: HOST,
                            user: USER,
                            password: PASSWORD,
                            port     : PORT,
                            database : DATABASE
                        });
        const values =[ [data.empno, data.ename , data.job ,   data.mgr  ,  data.hiredate ,data.sal ,   data.comm  , data.deptno ] ];
        var query_str = 'insert into emp(empno, ename ,job ,mgr ,hiredate ,sal ,comm , deptno ) values?'
        connection.query(query_str, [ values ] , function (err, result , fields ) {
            if (err) {
                return reject( err );
            }
            resolve( result.insertId );
        });
        
        connection.end();
        
    });
}



function deleteEmpData(empId){
    return new Promise(function(resolve, reject) {
        var connection =mysql.createConnection({
                            host: HOST,
                            user: USER,
                            password: PASSWORD,
                            port     : PORT,
                            database : DATABASE
                        });
        var query_str = 'delete  from emp where empno = '+empId;;
        connection.query(query_str,  function (err, result , fields ) {
            console.log( err , result, fields);
            if (err) {
                return reject( err );
            }
            resolve( result.affectedRows );
        });
        
        connection.end();
        
    });
}


function updateEmpData( data ){
    
    console.log("data ",data);
    return new Promise(function(resolve, reject) {
        var connection =mysql.createConnection({
                            host: HOST,
                            user: USER,
                            password: PASSWORD,
                            port     : PORT,
                            database : DATABASE
                        });
        
        let sql = 'UPDATE emp SET job ="'+data.job +'" , mgr = '+  data.mgr + ', sal = '+ data.sal +' , comm = "'+ data.comm +'" , deptno = '+ data.deptno +' WHERE empno = '+ data.empno ;
        connection.query(sql, function (err, result , fields ) {

            console.log( err , result ,fields )
            if (err) {
                return reject( err );
            }
            resolve( result );
        });
        
        connection.end();
    });
}

module.exports ={ testMySQLConnectivity ,getAllEmpData , createEmpData ,deleteEmpData , updateEmpData , getEmpDataByID}
