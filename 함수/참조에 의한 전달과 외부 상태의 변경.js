function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}

let num = 100;
let person = { name: 'Lee' };

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);

console.log(typeof (function f(){}));
console.log(typeof (function (){}));

