// 즉시 실행 함수도 일반함수처럼 값을 반환할 수 있다.
let res = (function (){
    let a = 3;
    let b = 5;
    return a * b;
}());
console.log(res);

// 즉시 실행 함수도 일반함수처럼 인수를 전달 할 수 있다.
res = (function (a, b){
    return a * b;
}(3, 5));

console.log(res);

function countdown(n){
    for(let i = n; i >= 0; i--){
        console.log(i);
    }
}
countdown(10);
console.log(`----------------------`);
// 중첩함수
function outer(){
    let x = 1;

    function inner(){
        let y = 2;
        console.log(x + y);
    }
    inner();

}
outer();
console.log(`----------------------`);
function repeat(n){
    // i를 출력한다.
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}
repeat(5)