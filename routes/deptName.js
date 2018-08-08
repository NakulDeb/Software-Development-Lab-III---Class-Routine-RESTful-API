const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');

// Find all Departmet.
// http://localhost:4000/deptName/dept
router.get("/dept",function(req,res,next){
    Dept.find({}).then(function(dept){
        res.send(dept);  
        if(dept){
            console.log("Get request successful.");
        }
    }).catch(next);
});

// Find by Department Name.
// http://localhost:4000/deptName/dept/cse
router.get("/dept/:departments",function(req,res,next){
    Dept.find({department: (req.params.departments).toUpperCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Department successful.");
           }
           else{
               console.log("Department Not Found.");
           }
   }).catch(next);
});


// Find by Department Name & Year
// http://localhost:4000/deptName/dept/cse/3rd
router.get("/dept/:departments/:years",function(req,res,next){
    Dept.find({department: (req.params.departments).toUpperCase() , year: (req.params.years).toLowerCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Department and Year successful.");
           }
           else{
               console.log("Department Not Found.");
           }
   }).catch(next);
});

// Find by Department Name & Year & Semester.
// http://localhost:4000/deptName/dept/cse/3rd/1st
router.get("/dept/:departments/:years/:semesters",function(req,res,next){
    Dept.find({department: (req.params.departments).toUpperCase() , year: (req.params.years).toLowerCase(), semester: (req.params.semesters).toLowerCase()}).then(function(dept){
           res.send(dept);
           if(dept){
               console.log("Get request for Department and Year successful.");
           }
           else{
               console.log("Department Not Found.");
           }
   }).catch(next);
});


// Update by Department Name.
// http://localhost:4000/deptName/dept/eee
router.put("/dept/:departments",function(req,res,next){
    Dept.updateMany({department: (req.params.departments).toUpperCase()},req.body).then(function(dept){
        Dept.find({department: (req.params.departments).toUpperCase()}).then(function(dept){
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


// Update by Department Name & Room.
// http://localhost:4000/deptName/dept/eee/225
router.put("/dept/:departments/:rooms",function(req,res,next){
    Dept.updateMany({department: (req.params.departments).toUpperCase(), room_no: (req.params.rooms)},req.body).then(function(dept){
        Dept.find({department: (req.params.departments).toUpperCase(), room_no: (req.params.rooms)}).then(function(dept){
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


// Update by Department Name & Year & Course code.
// http://localhost:4000/deptName/dept/eee/1st/EEE1101
router.put("/dept/:departments/:years/:courses",function(req,res,next){
    Dept.updateMany({department: (req.params.departments).toUpperCase(), year: (req.params.years).toLowerCase(), course_code: (req.params.courses).toUpperCase()},req.body).then(function(dept){
        Dept.find({department: (req.params.departments).toUpperCase(), year: (req.params.years).toLowerCase(), course_code: (req.params.courses).toUpperCase()}).then(function(dept){
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


// Delete by Department Name.
// http://localhost:4000/deptName/dept/eee
router.delete("/dept/:departments",function(req,res,next){
    Dept.remove({department: (req.params.departments).toUpperCase()}).then(function(dept){
        res.send(dept);
        if(dept){
            console.log("Delete request successful.");
        }
        else{
            console.log("ID not Found.");
        }
    }).catch(next);
});

Dept.updateMany


module.exports = router;