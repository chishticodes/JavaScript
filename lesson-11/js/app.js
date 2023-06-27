const names = ['anna', 'susy', 'bob', 'john'];
const lastName = 'Cooper';

let newArray = [];

// for loop

for (let i = 0; i < names.length; i++) {
  const fullName = `${names[i]} ${lastName}`;
  newArray.unshift(fullName);
}
console.log(newArray);
