/** new.target은 ES6에서 도입된 최신 문법으로 IE에서는 지원하지 않는다.
 * new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.
 */

 function Circle(radius){
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this에 바인딩한ㄷ. 이때 this와 Circle은 프로토 타입에 의해 연결된다.

    // 이 함수가 new연산자와 함께 호출되지 않았다면 이 시점의 this는 전역객체 window를 가리킨다./
    if(!(this instanceof Circle)){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function (){
        return 2 * radius;
    }
 }
 const circle = Circle(5);
 console.log(circle.getDiameter());
 