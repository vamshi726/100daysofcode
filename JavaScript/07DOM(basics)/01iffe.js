/*
 IFFE : it's a function that runs as soon as it is defined.
        An IIFE is a good way to secure the scope. You can 
        use IIFEs to prevent global variables' definition issues, 
        alias variables, protect private data
*/
(function(){
    console.log("i say hello");
    console.log("i say hello again without calling");
})();

/*
    output: 
    i say hello
    i say hello again without calling
*/
