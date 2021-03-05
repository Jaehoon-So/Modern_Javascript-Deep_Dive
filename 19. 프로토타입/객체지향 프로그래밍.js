const person = {
    name: 'Lee',
    address: 'Seoul',
};

console.log(person);

const circle = {
    radius: 5,  // 반지름

    //원의 지름: 2r
    getdiameter(){
        return 2 * this.radius;
    },
    // 원의 둘레
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    },
    // 원의 넓이
    getArea(){
        return Math.PI * this.radius ** 2;
    },

};

console.log(circle);

console.log(circle.getdiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
