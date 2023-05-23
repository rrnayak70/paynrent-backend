var mysql=require('mysql')
var pool=mysql.createConnection({
host:'aws.connect.psdb.cloud',
// port:3306,
database:'paynrent',
user:'rtk2rapqc7f8pamyo8p3',
password:'pscale_pw_ClMaI5Bnwzsa6REG5TagRTgrLaakRhMhWvb0EfV8K15',
multipleStatements:true,
})
// console.log("connected");
module.exports=pool