var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

/* GET home page. */
router.get('/', function(req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, '../pictures/')).slice(0, 3);
  res.render('index', { pictures: pictures, title: 'Express' });
});

module.exports = router;