var myAge = 26;

// if (myAge >= 18 && myAge <= 30) {
//   document.write("You can come, you cool dude");
// } else {
//   document.write("you ain't coming!");
// }

// if (myAge < 18 || myAge > 30 || myAge === 25) {
//   document.write("you ain't coming!");
// } else {
//   document.write("You can come, you cool dude");
// }

// While Loop
// var age = 5;
// while (age < 10) {
//   console.log("Your age is less than 10");
//   age++;
// }

// document.write("you are now over 10");

// For Loop
// for (age = 5; age < 10; age++) {
//   console.log("Your age is less than 10");
// }

// document.write("you are now over 10");

// var links = document.getElementsByTagName("a");
// for (i = 0; i < links.length; i++) {
//   console.log("this is link number" + i);
// }
// document.write("all links now looped");

// Break
// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 7) {
//     break;
//   }
// }
// console.log("I have broken out f the loop");

// Continue
// for (i = 0; i < 10; i++) {
//   if (i === 5 || i === 3) {
//     continue;
//   }
//   console.log(i);
//   if (i === 7) {
//     break;
//   }
// }
// console.log("I have broken out f the loop");

// Practical Examples
var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
  links[i].className = "link-" + i;
}
