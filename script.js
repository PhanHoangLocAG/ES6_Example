var arr = ['loc','ngan','thanh','xuan'];

arr.forEach((item,index) =>{
    console.log(index+":"+ item);
});

var numbers = [1,2,3,4];
var sum = 0;

let sumFunction = function(a,b){
    return a+b;
}

numbers.forEach( async function(item){
    sum = await sumFunction(sum,item);
})

console.log(sum);