var numbers = [2, 4, 7, 4, 7, 2];
var number = 4;
var lastIndex= -1;

for(var i = 0; i < numbers.length; i++){
  if(numbers[i] === number){
    lastIndex = i;
  }
}
console.log(lastIndex, numbers)
