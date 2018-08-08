# Software-Development-Lab-III---Class-Routine-RESTful-API

## Project Sub-Title


Routines API - Search Courses, routines, schedules by providing instructors name code


Description
------------

It's a simple server-side api which takes input as respected instructor(s) short name code and output the courses against the corresponding instructor. It has four functions.

For url http://localhost:4000/inst/dept/instructor_Name_Code, it will show the courses taken by that instructor and its time schedules.

For url http://localhost:4000/inst/dept/instructor_Name_Code/dept_Name, it will show the courses taken by that instructor in a specific department and its time schedules.

For url http://localhost:4000/inst/dept/instructor_Name_Code/dept_Name/year, it will show the courses taken by that instructor in a specific department with prior to specific year(i.e: 1st, 2nd year...) and its time schedules

 - Read : Which is implemented by Get method. 

 - Write : It's implemented by Post method to make a post request

 - Update : it's implemented by Put method to make a put request

 - Delete : It's implemented by Delete method to make a delete request.

Table of Contents
-------------------

It's dependency is instructors short name code as it takes input from uri. Then it shows a ouput in JSON format.

Usage
------

It can be used by an instructor or anyone to find the courses that an instructor takes. This should make easy to select courses in        a term.


Installation
-------------

It's been written in Javascript in node environment. Where express, body-parser, morgan, mongodb... modules/middlewares are  used. To run it into your OS,

 - Install node, **[it can be found here](https://nodejs.org/en/download/ "Node.js")**

 - Install MongoDB (any edition), **[you can try here](https://www.mongodb.com/download-center "MongoDB")**

 - Install Postman to test, **[it can be found here](https://www.getpostman.com/ "Postman")**

 - Install a code editior. **[code-editor](https://code.visualstudio.com/download "Visual Code")**

Now, setup a.k.a environment is about to complete. just install/import à la carte  packages/modules.


    There is one thing that can be tried to check the installation..
    open cmd/shell for windows, terminal(ctrl + alt + T or ctrl + shift + T) incase of Linux,  try 
    
         npm --version
         mongod --version
         
    if all goes correct, the output should be the version numbers of corresponding programs.


Ok, it's time to run. Save the code and..   it.

&nbsp;

Contributing
-------------

Please read the details and the process for submitting pull requests to me.

Credits
-------

Thanks to group members and my instructor.
