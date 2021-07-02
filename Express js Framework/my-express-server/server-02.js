

const express = require("express");

const app = express();

app.get("/", function(request ,response){
    response.send(`<h1>
    hello
    <h1/>`);
    
})

app.get("/about", function(request ,response){
    response.send(`<h1>
    Hello iam vamshi the progarmmer
    <h1/>`);
    
})

app.get("/contact", function(request ,response){
    response.send(`<h1>
    contact me at: vamshi@gmail.com
    okay i will se you there okay na
    <h1/>`);
    
})

app.get("/hobbies", function(request ,response){
    response.send(`<h1>
    eat 
    code
    sleep
    repeat
    <h1/>`);
    
})

app.listen(3000 , function(){
    console.log("Server started on port 3000");
});
   