/*
    Type Coercion in Js: 
    It's a process of automatic conversion
    of values from one datatype to another
  
Falsy values in javascript:
undefined , null , 0 , '' , NAN */

var user = "2"; //strimg data

if (2 == user){       //-- it performs automatic conversion
    console.log("Condition is True");     //-- display > Condition is True
 }

if (2 === user){                        //-- not perform any conversion It compares the values
    console.log("Condition is True");   //-- display noting
}