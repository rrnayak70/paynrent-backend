var mysql=require('mysql')
var pool=mysql.createConnection({
host:'rishi.chukok6gc7j1.us-east-1.rds.amazonaws.com',
// port:3306,
database:'paynrent',
user:'rrnayak70',
password:'9302877691',
multipleStatements:true,
})
// console.log("connected");
module.exports=pool
