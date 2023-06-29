//  higher order function

function greetings(name, cb) {
  const myName = `Bilal`;
  console.log(`my name is ${myName},${cb(name)}`);
}

// callback function

function morning(name) {
  return `Good Morning ${name}`;
}

// callback function
function afternoon(name) {
  return `Good Afternoon ${name}`;
}

greetings(`Hasan`, morning);
greetings(`Sarim`, afternoon);
