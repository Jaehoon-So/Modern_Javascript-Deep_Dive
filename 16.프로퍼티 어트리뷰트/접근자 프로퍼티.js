const person = {
    firstName: 'Jaehoon',
    lastName: 'So',
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName);

person.fullName = 'Jaehoon So';
console.log(person);

console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor); 

