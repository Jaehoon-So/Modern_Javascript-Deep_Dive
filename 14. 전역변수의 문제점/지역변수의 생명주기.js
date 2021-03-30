function foo() {
    var x = 'local';
    console.log(x);
    return x;

}

foo();
//console.log(x); // ReferenceError: x is not defined

var y = 'global';

function foo2(){
    console.log(y); // undefined
    var y = 'local';
}

foo2();
console.log(y);