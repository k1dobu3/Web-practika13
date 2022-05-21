var numbers = [2, 4, 7, 4, 7, 2];
var number = 4;
var lastIndex= -1;

for(var i = 0; i < numbers.length; i++){
  if(numbers[i] === number){
    lastIndex = i;
  }
}

for (var j = numbers.length - 1; j > 0; j--) {
    for (var i = 0; i < j; i++) {
      if (numbers[i] > numbers[i + 1]) {
        var temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
    }
  }
console.log(lastIndex, numbers)

