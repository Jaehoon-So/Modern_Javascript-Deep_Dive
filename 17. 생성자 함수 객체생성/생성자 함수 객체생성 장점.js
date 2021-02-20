/** 객체를 생성하기 위한 템플릿 처럼 생성자 함수를 사용하여 프로퍼티 구조가
 * 동일한 객체 여러개를 간편하게 생성할 수 있다.
 */

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
