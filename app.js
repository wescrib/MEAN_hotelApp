var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./api/routes");


app.set("port", 3000);

//THIS CHUNK NEEDS TO BE BEFORE ROUTES. BASICALLY LOGS ALL FILES IN USE BY APP(IMAGES, CSS, JQUERY, ETC) LOOK UP "MIDDLEWARE"
app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});

//BELOW ROUTES INDEX.HTML AS "/". INDEX.HTML IS NOT NEEDED. PRETTY MUCH FILES NAMED INDEX DONT NEED TO BE IDENTIFIED.
app.use(express.static( path.join(__dirname, "public") ) );

app.use(bodyParser.urlencoded({extended: false}))

//BELOW LINE WILL HAVE ROUTE /API/{WHATEVER ROUTE IS IN THE FOLDER}
app.use("/api", routes);



//will operate on localholse 3000??
var server = app.listen( app.get("port"), function(){
    var port = server.address().port;
    console.log( "magic happens at port " + app.get("port"));
});