// Key value pair is called an object
// if an object has a fuction as value then its called a method

const person = {
  name: 'Bilal',
  lastName: 'Chishti',
  age: 30,
  married: false,
  education: false,
  friends: ['hasan', 'sarim', 'minhaj'],
  greeting: function () {
    console.log('hello my name is Bilal');
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.friends[1]);
person.greeting();
