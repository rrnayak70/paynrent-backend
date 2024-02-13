var express = require('express');
var router = express.Router();
var pool = require('./pool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
    pool.query('select * from administrator',function(error,result){
      if(!error){
        res.status(200).json({data:result})
      }
    })
});

module.exports = router;
