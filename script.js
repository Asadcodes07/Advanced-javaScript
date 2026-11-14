localStorage.setItem("username","Asad");
localStorage.setItem("age",18)
const username = localStorage.getItem("username");
const age =localStorage.getItem("age");
console.log("Before removing:",username);
console.log(age);
localStorage.clear();

const userNameAfterRemoving = localStorage.getItem("username");
const ageAfterRemoving = localStorage.getItem("age");
 console.log("After removing:",userNameAfterRemoving);
 console.log(ageAfterRemoving);
