const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');
//var ignoreCase = require('ignore-case');

router.get("/dept",function(req,res,next){
    Dept.find({}).then(function(dept){
        res.send(dept);  

        if(dept){
            console.log("Get request successful.");
        }
    });
});


// Find by Id.
router.get("/dept/:id",function(req,res,next){
     Dept.find({_id: (req.params.id).toLowerCase()}).then(function(dept){
            res.send(dept);
            if(dept){
                console.log("Get request successful.");
            }
            else{
                console.log("Not Found.");
            }
    }).catch(next);
});



router.post("/dept",function(req,res,next){
    Dept.create(req.body).then(function(dept){
        res.send(dept);

        if(dept){
            console.log("Post request successful.");
        }
        else{
            console.log("ID not Found.");
        }
    }).catch(next);
});


router.put("/dept/:id",function(req,res,next){
    Dept.findByIdAndUpdate({_id: req.params.id},req.body).then(function(dept){
        Dept.findOne({_id: req.params.id}).then(function(dept){
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


router.delete("/dept/:id",function(req,res,next){
    Dept.findByIdAndRemove({_id: req.params.id}).then(function(dept){
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