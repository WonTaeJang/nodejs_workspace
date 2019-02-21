var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require('body-parser')


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.send("환영합니다~");
});

app.get("/Login", function(req, res){

	res.sendFile(__dirname + "/sample_Get.html");	
});

app.get("/Login_Config", function(req, res){
	var uId = req.query.uId;
	var uPw = req.query.uPw;

	console.log("uId: " + uId + " uPw: " + uPw );

	res.send("get 환영합니다~");
	
});

app.get("/Login_Post", function(req, res){
	
	res.sendFile(__dirname + "/sample_Post.html");	
});

app.post("/Login_Config_Post", function(req, res){
	var uId = req.body.uuId;
	var uPw = req.body.uuPw;

	console.log("uId: " + uId + " uPw: " + uPw );

	res.sendFile(__dirname + "/main.html");
	//res.send("post 환영합니다~");
});


http.createServer(app).listen(3000, function() {

	console.log("server start get!!!");

});