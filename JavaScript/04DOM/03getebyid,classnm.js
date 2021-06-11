//Execution in Browser inspector
//getElementsByTagName() method returns a collection of all elements
//                       in the document with the specified tag name, as an HTMLCollection object.

//getElementsByClassName() method returns a collection of all elements in the document
//                          with the specified class name, as an HTMLCollection object.

var result = document.getElementsByTagName("h1")[0].innerHTML   

 //undefined

 var result = document.getElementsByTagName("h1")

 //undefined

 [0].innerHTML

 //undefined

 var result = document.getElementsByTagName("h1")[0].innerHTML

 //undefined

 result

 "Vamshi Muluguri"

 var result = document.getElementsByClassName("title")[0].innerText

 //undefined

 result

 "Vamshi Muluguri"