//discount percentage for course 
//formula : D = ( L - S ) / L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = (( listingPrice- sellingPrice)/ listingPrice)* 100;

console.log("Discount percentage is : ", discountPercentage);

displayDiscountPercent = Math.round(discountPercentage);

console.log(displayDiscountPercent+"% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);