var express = require('express');
//var cors = require('cors')
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser());
//app.use(cors())

app.use(function (req, res, next) {
    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Content-Type");

    //res.header("Access-Control-Allow-Headers", "Origin");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header("Access-Control-Allow-Methods","POST, OPTIONS");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, HEAD");
    res.header("Access-Control-Max-Age", "1728000");
    next();
});


/*function supportCrossOriginScript(req, res, next) {
 res.status(200);
 res.header("Access-Control-Allow-Origin", "*");
 //res.header("Access-Control-Allow-Headers", "Content-Type");

 //res.header("Access-Control-Allow-Headers", "Origin");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 //res.header("Access-Control-Allow-Methods","POST, OPTIONS");
 res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT, HEAD");
 res.header("Access-Control-Max-Age","1728000");
 next();
 }*/

// Support CORS
/*app.options('/apply', supportCrossOriginScript);*/ //supportCrossOriginScript,

app.post('/apply', function (req, res) {
    console.log(JSON.stringify(req.body));      // your JSON
    var data = JSON.stringify(req.body);

    fs.appendFile("test.data", data,function (err) {
        if (err) {throw err;}else{
        console.log('The "data to append" was appended to file!');
        res.status(200)
        res.send('提交成功，敬请期待');
        }
    })
    // do stuff with req
});

/*
 app.post('/apply', function(request, response){
 console.log(request.body)

 console.log(JSON.stringify(request.body));      // your JSON
 response.send("提交成功，敬请期待");    // echo the result back
 });
 */

var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});