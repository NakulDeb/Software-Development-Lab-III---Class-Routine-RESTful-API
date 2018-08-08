const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');

// Find all Departmet.
// http://localhost:4000/inst/dept
router.get("/dept",function(req,res,next){
    Dept.find({}).then(function(dept){
        res.send(dept);  
        if(dept){
            console.log("Get request successful.");
        }
    });
});

// Find by Instructor_code.
// http://localhost:4000/inst/dept/OMF
router.get("/dept/:instructors",function(req,res,next){
    Dept.find({instructor_code: (req.params.instructors).toUpperCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Instructor successful.");
           }
           else{
               console.log("Instructor Not Found.");
           }
   }).catch(next);
});

// Find by Instructor_code & Department.
// http://localhost:4000/inst/dept/OMF/CSE
router.get("/dept/:instructors/:departments",function(req,res,next){
    Dept.find({instructor_code: (req.params.instructors).toUpperCase(), department: (req.params.departments).toUpperCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Instructor successful.");
           }
           else{
               console.log("Instructor Not Found.");
           }
   }).catch(next);
});

// Find by Instructor_code & Department & Year.
// http://localhost:4000/inst/dept/OMF/cse/3rd
router.get("/dept/:instructors/:departments/:years",function(req,res,next){
    Dept.find({instructor_code: (req.params.instructors).toUpperCase(), department: (req.params.departments).toUpperCase() , year: (req.params.years).toLowerCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Instructor successful.");
           }
           else{
               console.log("Instructor Not Found.");
           }
   }).catch(next);
});

// Find by Instructor_code & Department & Year & Semester.
// http://localhost:4000/inst/dept/OMF/cse/3rd/1st
router.get("/dept/:instructors/:departments/:years/:semesters",function(req,res,next){
    Dept.find({instructor_code: (req.params.instructors).toUpperCase(), department: (req.params.departments).toUpperCase() , year: (req.params.years).toLowerCase() , semester: (req.params.semesters).toLowerCase() }).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Instructor successful.");
           }
           else{
               console.log("Instructor Not Found.");
           }
   }).catch(next);
});



module.exports = router;