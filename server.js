var express=require("express");
var app=express();
app.use(express.static("public"));//khai báo biến tĩnh để đón dữ liệu khách hàng
app.set("view engine", "ejs");
app.set("views", "./views");

var server=require("http").Server(app);
server.listen(3000);

app.get('/', function(req, res){
    res.render('home');
});