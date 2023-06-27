const gas = [20, 40, 100, 30];
const food = [10, 20, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i];
  }
  if (total > 100) {
    console.log(`you  are spending a lot`);
    return total;
  } else {
    console.log(`total is less then 100`);
    return total;
  }
}
//console.log(calculateTotal(gas));

// console log in the form of object

let obj = {
  gas: calculateTotal(gas),
  food: calculateTotal(food),
};

console.log(obj);
