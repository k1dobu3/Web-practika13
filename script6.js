let getData = function(arrKey, arrData){
    let result = [];
    
    for(let i = 0; i < arrData.length; i++){
      
      result[i] = {};
      
      let lengthArr = arrKey.length;
      
      if(arrData[i].length < arrKey.length){
        lengthArr = arrData[i].length;
      }
          
      for(let j = 0; j < lengthArr; j++){
        result[i][arrKey[j]] = arrData[i][j];      
      }
    }
    
    return result;
  }
  
  // Массив ключей
  let a1 = ['имя', 'любимый цвет', 'любимое блюдо'];
  // Массив значений
  let a2 = [
   ['Василий', 'красный', 'борщ'],
   ['Мария'],
   ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
  ];
  
  console.log(getData(a1, a2))