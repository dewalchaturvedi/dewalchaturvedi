var express = require("express");
var app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
	res.render("home.ejs");
});
app.get("/explore",function(req,res){
	res.render("explore.ejs");
});
app.get("/certification",function(req,res){
	res.render("certification.ejs");
});
app.get("/skills",function(req,res){
	res.render("skills.ejs");
});
app.get("/contact",function(req,res){
	res.render("contact.ejs");
});
app.get("/projects",function(req,res){
	res.render("projects.ejs");
});

app.listen(3000,function(){
	console.log("Server started on port 3000");
});