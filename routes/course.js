const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');

// Find all Department.
// http://localhost:4000/course/dept
router.get("/dept",function(req,res,next){
    Dept.find({}).then(function(dept){
        res.send(dept);  
        if(dept){
            console.log("Get request successful.");
        }
    });
});


// Find by Course_code .
// http://localhost:4000/course/dept/CSE3111
router.get("/dept/:courses",function(req,res,next){
    Dept.find({course_code: (req.params.courses).toUpperCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Course successful.");
           }
           else{
               console.log("Course Not Found.");
           }
   }).catch(next);
});
module.exports = router;