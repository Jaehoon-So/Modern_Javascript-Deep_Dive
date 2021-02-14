function multiply(x, y){
    return x * y;
    console.log(`실행되지 않습니다.`);
}
console.log(multiply(3, 5 ) );

function foo(){
    return;
}
console.log(foo() ); // undefined

function multiply2(x, y){
    return // 세미콜론 자동 삽입 기능에 의해 세미콜론이 추가된다
    x * y // ignored
}
console.log(multiply2(3, 5) ); // undefined