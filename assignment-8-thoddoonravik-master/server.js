let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/mylib', {
//connecting to the database mylib
useCreateIndex:true, 
//useNewUrlParser:true,
//useUnifiedTopology:true,   
useMongoClient: true
});
mongoose.Promise = global.Promise;

//If connected to the database, then display below

let db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to MongoDB");
});


//If not connected then display below 
db.on('error', function(err){
    console.log(err);
});


//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
})
);
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header
    ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('To-Do List RESTful API server started on: ' + port);