const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeptSchema = new Schema({
    department:{
        type:String,
        required: [true,'Department Name is Required.']
    },
    year:{
        type:String,
        required: [true,'Year is Required.']
    },
    semester: {
        type : String,
    },
    session:{
        type:String,
        required: [true,'Session is Required.']
    },
    course_code:{
        type:String,
        required: [true,'Course_code is Required.']
    },
    course_name:{
        type:String,
    },
    day:{
        type:String,
        required: [true,'Day is Required.']
    },
    period:{
        type:String,
        required: [true,'Peroid is Required.']
    },
    time:{
        type:String,
        required: [true,'Time is Required.']
    },
    room_no:{
        type:Number,
        required: [true,'Room_no is Required.']
    },
    instructor_code:{
        type:String,
        //required: [true,'Instructor Code is Required.']
    },
    instructor_name:{
        type:String,
        
    } 
});

const Dept = mongoose.model('dept',DeptSchema);
module.exports = Dept;