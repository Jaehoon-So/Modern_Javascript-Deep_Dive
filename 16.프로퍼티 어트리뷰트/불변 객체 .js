// Object.freeze 메서드로 객체를 동결하여도, 중첩객체까지 동결 할 수는 없다.

const person = {
    name: 'So',
    address: { city: 'Seoul' },
};

// 얕은 객체 동격
Object.freeze(person);

// 직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person) );
// 중첩 객체 까지 동결하지 못한다.
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);

/** 중첩객체까지 동결하여 변경이 불가능한 읽기전용의 불변객체를 구현하려면 객체를 값으로 갖는
 * 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
 */
function deepFreeze(target){
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person2 = {
    name: 'So',
    address: { city: 'Seoul' },
};

deepFreeze(person2);

console.log(Object.isFrozen(person2) );
console.log(Object.isFrozen(person2.address) );

person2.address.city = 'Busan';
console.log(person2);