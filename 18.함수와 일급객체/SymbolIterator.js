function multiply(x, y) {
    const iterator = arguments[Symbol.iterator]();

    console.log(arguments.length); // 3
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x * y;
}
multiply(1, 2, 3);

// 가변인자 함수를 구현할때 arguments 객체가 유용하다.

function sum(){
    let res = 0;

    for(let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}



console.log(sum() );
console.log(sum(2, 3) );
console.log(sum(2, 3, 4) );