var user= {
    id:1,
    name:'loc',
    age:24,
    university:'STU'
}

var className = ['loc','ngan','linh','trung'];

for (const item  in user) {
   console.log(item)
}

for (const item in className) {
    console.log(item)
}
// when you use for in just get index toward array and key with object