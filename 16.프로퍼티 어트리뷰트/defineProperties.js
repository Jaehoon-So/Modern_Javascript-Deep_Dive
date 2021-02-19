const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Jaehoon',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'So',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get(){
            return `${this.firstName} ${this.lastName}`
        },
        set(name){
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true,
    }
})
person.fullName = 'Jaehoon So';
console.log(person);