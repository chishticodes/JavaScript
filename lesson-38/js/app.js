// web storage API
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem(`name`, `john`);
// sessionStorage.setItem(`name`, `john`);

localStorage.setItem('name', 'peter');
localStorage.setItem('friend', 'hasan');
localStorage.setItem('address', 'karachi');

const friend = localStorage.getItem('friend');
console.log(friend);
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

localStorage.clear();
sessionStorage.clear();
