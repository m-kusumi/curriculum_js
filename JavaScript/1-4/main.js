let number = 1;
while (number <= 100){
    if (number % 3 === 0 ){
        console.log(`Fizz!`);
    }
    if (number % 5 ===0){
        console.log(`Buzz!`);
    }
    if(number % 3 === 0 && number % 5 ===0) {
        console.log(`FizzBuzz!`);
    }
    else if (number % 3 != 0 && number % 5 != 0) {
        console.log(number);
    } 
    number++;
}