class object{
    constructor(name, age){
      this.name = name; 
      this.age = age;
    }
  }
  
  let array = [
    new object('петя', 2), 
    new object('ваня', 1), 
    new object('миша', 3), 
  ]
  
  function getSortedArray(arr, key){
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < i; j++){
        if (arr[j][key] > arr[i][key]){
          let a = arr[j];
          arr[j] = arr[i]
          arr[i] = a;
        }
      }
    }
    return arr;
  }
  
  console.log(getSortedArray(array, 'age'))