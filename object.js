const person = {
   firstName: 'Jose' ,
   lastName: 'Evangelista'
   age: 19,
   email: 'jomig@gmail.com',
   hobbies: ['Coding','Music'],
   address: {
       city: 'Pasig',
       street: 'Pearl'
   },
   getBirthYear: function () {
       return 2020 - this.age;
   }

};

let value;

value = person;

value = person.firstName;
value = person.age;
value = person.hobbies[1];
value = person.address.city;
value = person.address.street;
value = person.getBirthYear();

console.log(value);

const people = [{name:'Jose', age: 19}] {name:'Invoker', age: 20}, {name:'Mirana', age: 21};

for(let i = 0; i < people.length; i++ ){
    console.log(people[i]);
}


console.log(value);