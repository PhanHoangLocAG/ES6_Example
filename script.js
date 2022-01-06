var arr = [1,3,7,4,5,2,6,-5];

var arr1 = arr.find(item => item == 2);
var arr2 = arr.find(item => item > 4);
var arr3= arr.find(item => item <0 );
console.log(arr1);
console.log(arr2);
console.log(arr3);
// find function is use search item with condition,return item valid with condition,return value not array