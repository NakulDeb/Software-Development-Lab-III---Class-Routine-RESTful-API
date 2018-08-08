const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/deptgo');
/*
mongoose.Promise =  global.Promise;
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));
app.use('/inst',require('./routes/inst'));
*/

const deptRoutes = require('./routes/api');
const instRoutes = require('./routes/inst');
const deptNameRoutes = require('./routes/deptName');
const courseRoutes = require('./routes/course');
const yearRoutes = require('./routes/year');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',deptRoutes);
app.use('/inst',instRoutes);
app.use('/deptName',deptNameRoutes);
app.use('/course',courseRoutes);
app.use('/year',yearRoutes);

// Error Hendling

/*
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.massage});
});
*/

app.use(function(err,req,res,next){
    const error = new error("Not Found.");
    error.status = 404;
    next(error);
});

app.use(function(error,req,res,next){
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



app.listen(process.env.port||4000,function(){
    console.log("Now listening for Requests");
});