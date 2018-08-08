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


// Update By Course code.
// http://localhost:4000/course/dept/EEE1101
router.put("/dept/:courses",function(req,res,next){
    Dept.updateMany({course_code: (req.params.courses).toUpperCase()},req.body).then(function(dept){
        Dept.find({course_code: (req.params.courses).toUpperCase()}).then(function(dept){
            res.send(dept);

            if(dept){
                console.log("Data  Updated request successful.");
            }
            else{
                console.log("ID not Found.");
            }
        });
    }).catch(next);
});

// Delete by course code.
// http://localhost:4000/course/dept/EEE1101
router.delete("/dept/:courses",function(req,res,next){
    Dept.remove({course_code: (req.params.courses).toUpperCase()}).then(function(dept){
        res.send(dept);
        if(dept){
            console.log("Delete request successful.");
        }
        else{
            console.log("ID not Found.");
        }
    }).catch(next);
});







module.exports = router;