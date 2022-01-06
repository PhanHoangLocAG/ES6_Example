var arr = ['hoang loc','kien','nhung ha','nguyen a'];

var arr1= arr.filter(item => item.length > 5);

console.log(arr1);
// function filter return result.

var numbers = [1,2,3,4,5,6,7].filter(GetData);

function GetData(i){
    return i > 5
}

console.log(numbers);
// parameter is callback function

