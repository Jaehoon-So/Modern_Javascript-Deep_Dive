function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3) ); // 6
console.log(add(1, 2) );    // 3
console.log(add(1) );       // 1 
console.log(add() );        // 0

/** 매개변수에 기본값을 사용할 수도 있다. */

function addition(a = 0, b = 0, c = 0) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(addition(1, 2, 3) ); // 6
console.log(addition(1, 2) );    // 3
console.log(addition(1) );       // 1 
console.log(addition() );        // 0
