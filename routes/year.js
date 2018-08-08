const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');

// Find all Departmet.
// http://localhost:4000/year/dept
router.get("/dept",function(req,res,next){
    Dept.find({}).then(function(dept){
        res.send(dept);  
        if(dept){
            console.log("Get request successful.");
        }
    });
});


// Find By Year.
// http://localhost:4000/year/dept/3rd
router.get("/dept/:years",function(req,res,next){
    //var query = {year: (req.params.years).toLowerCase()};
    Dept.find({year: (req.params.years).toLowerCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Year successful.");
           }
           else{
               console.log("Year Not Found.");
           }
   }).catch(next);
});

// Find By Year & Semester.
// http://localhost:4000/year/dept/3rd/1st
router.get("/dept/:years/:semesters",function(req,res,next){
    //var query = {year: (req.params.years).toLowerCase()};
    Dept.find({year: (req.params.years).toLowerCase() , semester: (req.params.semesters).toLowerCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Year successful.");
           }
           else{
               console.log("Year Not Found.");
           }
   }).catch(next);
});


module.exports = router;