fetch("https://api.chucknorris.io/jokes/random")
.then(response => {
   return response.json();
})
.then((data)=>{
    //console.log("DATA is:",data)
        var joke= data.value;
        console.log("JOKE",joke);
});
.catch();

/*
    JOKE Chuck Norris uses a live Cobra for a hatband. It stays in
    place because it's frozen in fear.
 */