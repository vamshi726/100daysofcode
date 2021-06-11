//for/in - loops through the properties of an object
//for/of - loops through the values of an iterable array
const names = ["Linkedin", "facebook", "Netflix" ,"Instagram"];

for(const n of names){
    console.log(n);
}
/* o/p:
    Linkedin
    facebook
    Netflix
    Instagram
*/

const symbols ={
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    vm: "Vmashi"
};

for (const n in symbols) {
    console.log(`key is :${n} and values is:${symbols[n]}`);
}
/* o/p:
key is :yt and values is:Youtube
key is :ig and values is:Instagram
key is :fb and values is:Facebook
key is :vm and values is:Vmashi
*/