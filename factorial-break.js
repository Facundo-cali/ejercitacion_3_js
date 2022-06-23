var factorial = 1;
var i = 1;

while ( i < 100 ) {
    
    factorial = factorial * i;
    console.log(factorial);
    i++
    if (i === 10){
        break
    }

}
console.log(factorial);