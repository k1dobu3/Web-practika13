var groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
var shoppingList = '';

for (var i = 0; i <= groceries.length - 2; i++) {
    shoppingList += groceries[i] + ', ';
  }
shoppingList += groceries[groceries.length - 1];
console.log(shoppingList);