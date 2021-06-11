//this : for all regular functions, this points to window WebGLVertexArrayObject.

console.log(this);  //prints : window object

var user = {
    firstName: "Vamshi",
    courseCount: 6,
    getCourseCount: function(){
            console.log("LINE 7",this);
    }
}

console.log(user);

/*
    o/p:
    {.window
    }
    {
      firstName: 'Vamshi',
      courseCount: 6,
      getCourseCount: [Function: getCourseCount]     
    }

*/
