var key = Symbol('key');
console.log(typeof key);

var obj = {};

obj[key] = 'value';
console.log(obj[key]);

var x = 1;
x++;
console.log(x);

x--;
console.log(x);

x = 5;

result = x++;
console.log(result, x);

result = ++x;
console.log(result, x);

result = x--;
console.log(result, x);

result = --x;
console.log(result, x);

var y = '1';

console.log(+y);
console.log(y);

z = true;
console.log(+z);
console.log(z);

xx = 'hello'
console.log(+xx);
console.log(xx);
