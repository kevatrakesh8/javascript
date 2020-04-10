alert('First', 'Second');
Output : alert give you alert 

console.log('First', 'Second');
output : First Second

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	<!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - Hello, world</title>
    <meta charset="utf-8">
    <!--start javascript-->
    <script>
      alert('Hello, world!');
    </script>
    <!--end javascript-->
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      alert('Hello, world!');
	  alert : name ;
	  Hellow word  : argument ; 
	  &&
	  let greeting = 'Hello, world!';
	  let : declaration
	  greeting : identifier
	  = : operator
	  Hellow World : Value

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Declare a variable and assign it a value
let greeting = 'Hello, world!';
console.log(greeting);
Output : Hello, world!

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let greeting;
console.log(greeting);
greeting = 'Hello, world!';
console.log(greeting);

Output :  undefined     //not assing any values 
       :  Hello, world!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let favoriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favoriteFruits);
VM102:2 (3) ["mango", "raspberry", "blueberry"]

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let favoriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favoriteFruits);

// Print the first element
console.log(favoriteFruits[0]);
VM113:2 (3) ["mango", "raspberry", "blueberry"]
VM113:5 mango

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//ARRAYS

let favoriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favoriteFruits);

// Print each element
console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);
console.log(favoriteFruits[2]);
VM124:2 (3) ["mango", "raspberry", "blueberry"]
VM124:5 mango
VM124:6 raspberry
VM124:7 blueberry

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//object 

let userObject = {
  name: 'Adam',
  age: 28,
  favoriteFruits: ['mango', 'raspberry', 'blueberry']
};

console.log(userObject['name']); // Adam
console.log(userObject['age']); // 28
console.log(userObject['favoriteFruits']); // [ 'mango', 'raspberry', 'blueberry' ]
console.log(userObject['favoriteFruits'][0]); // mango


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//nest objects within other objects

let userObject = {
  name: 'Adam',
  age: 28,
  favoriteFruits: ['mango', 'raspberry', 'blueberry'],
  car: {
    make: 'Honda',
    model: 'Civic',
    isFunctional: true
  }
};

console.log(userObject.car.make); // Honda
console.log(userObject.car.model); // Civic
console.log(userObject.car.isFunctional); // true


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//CONDITIONALS

let userObject = {
  name: 'Adam',
  age: 28,
  favoriteFruits: ['mango', 'raspberry', 'blueberry'],
  car: {
    make: 'Honda',
    model: 'Civic',
    isFunctional: true
  }
};

if (userObject.age >= 21) {
  console.log('This user can drink!');
} else {
  console.log('This user cannot drink!');
}


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let user = 'Adam';

if (user) {
  console.log('Goodbye, ' + user + '!');
} else {
  console.log('Goodbye!');
}
VM135:4 Goodbye, Adam!


||(OR)

let user = '';

if (user) {                                   // if value is not defined then value will be false 
  console.log('Goodbye, ' + user + '!');
} else {
  console.log('Goodbye!');
}

VM171:6 Goodbye!

||(OR)

let user;								 // if value is not defined then value will be false

if (user) {
  console.log('Goodbye, ' + user + '!');
} else {
  console.log('Goodbye!')
}

VM171:6 Goodbye!

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Falsy values in JavaScript
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Execises

let userObject = {
  name: 'Adam',
  age: 28,
  favoriteFruits: ['mango', 'raspberry', 'blueberry'],
  car: {
    make: 'Honda',
    model: 'Civic',
    isFunctional: true
  },
  computer: [
    {
      manufacturer: 'Apple',
      type: 'laptop'
    },
    {
      manufacturer: 'Dell',
      type: 'laptop'
    }
  ]
};

console.log(userObject.favoriteFruits[2]); // ?
console.log(userObject.car.isFunctional); // ?
console.log(userObject.computer[0].manufacturer); // ?
console.log(userObject.computer[1].manufacturer); // ?

Ans :
VM186:22 blueberry
VM186:23 true
VM186:24 Apple
VM186:25 Dell

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//PROPERTIES

let myUser = {
  name: 'Adam Morgan',
  age: 28
};

console.log(myUser.name); // Adam Morgan

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// We’ll start by accessing a string’s length property.

let username = 'adam';
console.log(username.length); // 4

||(OR)

let languages = ['javascript', 'ruby', 'python'];
console.log(languages.length); // 3


||(OR)

let username = 'adam';

if (username.length < 5) {
  console.log('Your username is too short.');
} else {
  console.log('Your username meets the length requirements!');
}

// Output : Your username is too short.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




if(username.length > 5 && password.length > 5)

username.length > 5   : Expression
 &&                   : operator


||(OR)


// PROPERTIES AND LOGICAL OPERATORS

console.log(true && true); // true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


||(OR)

let username = 'adammorgan';
let password = '123';

if (username.length > 5 && password.length > 5) {
  console.log('Your username and password meet the length requirements!');
} else {
  console.log('Your username or password is too short.');
}

// Output : Your username or password is too short.



||(OR)


let username = 'adammorgan';
username.length > 5;  // true


||(OR)

'adammorgan'.length > 5; // true
's3cr3t'.length > 5; // true


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

||(OR)

let user = {
  isAdmin: false,
  isModerator: true
};

if (user.isAdmin || user.isModerator) {
  console.log('I only care about one of these! They are authorized!');
} else {
  console.log('Don\'t let them in!');
}

// Output : I only care about one of these! They are authorized!

let user = {
  isAdmin: false,
  isModerator: false
};

if (user.isAdmin || user.isModerator) {
  console.log('I only care about one of these! They are authorized!');
} else {
  console.log('Don\'t let them in!');              // Don\'t let them in!
}	



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// METHODS

//In addition to properties we also have methods available to us as well.

let username = 'Adam';

console.log(username.toLowerCase()); // adam
console.log(username.toUpperCase()); // ADAM

||(OR)

let favoriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favoriteFruits.pop();    // remove one element

console.log(favoriteFruits); // ['mango', 'blueberry']
console.log(returnedValue); // raspberry

||(OR)

let favoriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favoriteFruits.push('passionfruit');

console.log(favoriteFruits); // ['mango', 'blueberry', 'raspberry', 'passionfruit']
console.log(returnedValue); // 4

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let name = 'Adam';

console.log(name.charAt(0)); // A
console.log(name.charAt(1)); // d
console.log(name.charAt(2)); // a
// ...and so on

||(OR)

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('Done! Outside the for loop!');

||(OR)

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('Done! Outside the for loop!');

// OutPut:
// 0
// 1
// 2
// 3
// 4
// Done! Outside the for loop!


||(OR)

let name = 'Adam';

for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}


||(OR)

let sales = [5, 7, 3.5, 8];

for (let i = 0; i < sales.length; i++) {
  console.log(sales[i]);
}

//OutPut : 5
// 7
// 3.5
// 8

||(OR)

let sales = [5, 7, 3.5, 8];
let total = 0;

for (let i = 0; i < sales.length; i++) {
  total = total + sales[i];
}

console.log(total); // 23.5

||(OR)

let exclamations = ['run', 'hide', 'get away'];

for (let i = 0; i < exclamations.length; i++) {
  exclamations[i] = exclamations[i].toUpperCase();
}

console.log(exclamations); // ['RUN', 'HIDE', 'GET AWAY']


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// EXERCISES

// Exercise #1
let names = ['   john', 'jane   ', '  jeff  '];
names.pop();

for (let i = 0; i < names.length; i++) {
  names[i] = names[i].trim();
}
console.log(names);
// OutPut :(2) ["john", "jane"]
// 0: "john"
// 1: "jane"
// length: 2


// Exercise #2
let languages = ['java', 'javascript', 'html', 'css', 'ruby'];

for (let i = 0; i < languages.length; i++) {
  if (languages[i].includes('java')) {
    console.log(languages[i]);
  }
}
// OutPut : java
// VM267:5 javascript



// Exercise #3
let language = 'javascript';

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}
console.log('!');

//OutPut:j
// VM272:4 a
// VM272:4 v
// VM272:4 a
// VM272:4 s
// VM272:4 c
// VM272:4 r
// VM272:4 i
// VM272:4 p
// VM272:4 t
// VM272:6 !

// Exercise #4
let title = 'ceo';

for (let i = 0; i < title.length; i++) {
  console.log(title.charAt(i).toUpperCase());
}


// OutPut: C
// VM278:4 E
// VM278:4 O


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// CREATING FUNCTIONS

// One argument
console.log('Hello, world!');  // Hellow word

// Zero arguments
let sales = [5, 2.50, 3];
sales.pop();    // 3


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function evaluateString(string) {
  if (string) {
    return 'The string has a value!';
  } else {
    return 'What string?';
  }
}

let first = evaluateString('');
let second = evaluateString('This one!');
console.log(first); // What string?
console.log(second); // The string has a value!


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Option 1
console.log(evaluateString(''));
console.log(evaluateString('This one!'));

// Option 2
let first = evaluateString(''); 
let second = evaluateString('This one!'); 
console.log(first); // What string?
console.log(second); // The string has a value!



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// PARAMETER VS. ARGUMENT

function evaluateString(string) { // parameter
  ...
}

evaluateString('This one!'); // argument


|| (oR)

function evaluateString(lol) { // Updated parameter name
  if (lol) {
    return 'The string has a value!';
  } else {
    return 'What string?';
  }
}

console.log(evaluateString('')); // What string?
console.log(evaluateString('This one!')); // The string has a value!


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function square(number) {
  return number * number;
}

console.log(square(2)); // 4
let result = square(3);
console.log(result); // 9

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let now = new Date();
console.log(now.getDay()); // A number between 0 and 6    "like on friday will be = 5"	

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function dayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

let now = new Date();
console.log('Happy Today' + dayOfWeek(now) + '!');    // Happy Today Friday!

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// CONST VS. LET

let name = 'Adam';
name = 'Morgan';
console.log(name);

const pi = 3.14;
pi = 4.14;
console.log(pi);

// OutPut: 
// /Users/adammorgan/Desktop/webdev-functions/functions.js:6
// pi = 4.14;
   // ^

// TypeError: Assignment to constant variable.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// TEMPLATE LITERALS

let name = 'Adam';
console.log('My name is ' + name + '.');   // My name is Adam.

let name = 'Adam';
console.log(`My name is ${name}.`);   // MY name is Adam.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// MULTIPLE PARAMETERS

function calculateSalesTax(price, tax) {
  console.log(`price is ${price}`);
  console.log(`tax is ${tax}`);
  return price * tax;
}

let result = calculateSalesTax(10, 0.15);
console.log(`Sales tax is $${result}`);

// OutPut : 

// price is 10
// tax is 0.15
// Sales tax is $1.5


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function calculateSalesTax(a, b) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  return a * b;
}

let result = calculateSalesTax(10, 0.15);
console.log(`Sales tax is $${result}`);

// OutPut : 
// price is 10
// tax is 0.15
// Sales tax is $1.5
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function calculateSalesTax(price, tax) {
  console.log(`price is ${price}`);
  console.log(`tax is ${tax}`);
  return price * tax;
}

let result = calculateSalesTax(0.15, 10); // Swapped these values
console.log(`Sales tax is $${result}`);

// OutPut : 
// price is 0.15
// tax is 10
// Sales tax is $1.5


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function calculateSalesTax(prices, tax) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    result.push(prices[i] * tax);
  }
  return result;
}

console.log(calculateSalesTax([1, 5, 10], 0.15));
console.log(calculateSalesTax(0.15, [1, 5, 10]));

// OutPut : 
// [ 0.15, 0.75, 1.5 ] // The result we expect
// []                  // ...not so much

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// EXERCISES 

function dayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function greetByDay() {
  // Add your code here
}

let now = new Date();
greetByDay(now); // Happy Wednesday!

 || (OR)

function calculateSalesTax(prices, tax) {
  // Add your code here
}

console.log(calculateSalesTax([1, 5, 10], 0.15)); // [ 1.15, 5.75, 11.5 ]

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// OBJECT ORIENTED JAVASCRIP

// Function declaration
function getArea(width, height) {
  return width * height;
}

console.log(getArea(20, 10)); // 200

|| 

// Function expression
let getArea = function(width, height) {
  return width * height;
};

console.log(getArea(20, 10)); // 200
console.log(getArea(10, 5)); // 50

||

let user = {
  name: 'Adam',
  age: 28
};

console.log(user.name); // Adam
console.log(user.age); // 28

||

let now = new Date();
console.log(now.getDay());  // 5
console.log(now.getMinutes()); //52

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
 // CONSTRUCTOR FUNCTIONS
 
 function Trainer(name) {
  this.name = name;
}

let trainer = new Trainer('Adam');
console.log(trainer.name); // Adam




@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ADDING FUNCTIONALITY TO CONSTRUCTOR FUNCTIONS

function Trainer(name) {
  this.name = name;
  this.identify = function() {
    console.log(`The trainer is ${this.name}`);
  };
}

let trainer = new Trainer('Adam');
trainer.identify(); // The trainer is Adam


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
 // COMPARISON OPERATORS
 
 // Equality
console.log(1 == 1);    // true
console.log("1" == 1);  // true

// Strict equality
console.log(1 === 1);   // true
console.log("1" === 1); // false

 
 ||
 
 // Inequality
console.log(1 != '1');  // false
console.log(1 != 2);    // true

// Strict inequality
console.log(1 !== '1'); // true
console.log(1 !== 1);   // false

|| 

function Trainer(name, tasks = []) {
  this.name = name;
  this.tasks = tasks;
  this.identify = function() {
    console.log(`The trainer is ${this.name}`);
  };
  this.addTask = function(task) {
    this.tasks.push(task);
  };
  this.printTasks = function() {
    if (this.tasks.length === 1) {
      console.log('Nearly finished!');
    }
    console.log(`Remaining tasks: ${this.tasks}`);
  };
}

let ash = new Trainer('Ash');
ash.addTask('Get a Pokemon');
ash.printTasks();
// Nearly finished!
// Remaining tasks: Get a Pokemon


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// EXERCISES

function Trainer(name, tasks = []) {
  this.name = name;
  this.tasks = tasks;
  this.identify = function() {
    console.log(`The trainer is ${this.name}`);
  };
  this.addTask = function(task) {
    this.tasks.push(task);
  };
  this.printTasks = function() {
    if (this.tasks.length === 1) {
      console.log('Nearly finished!');
    }
    console.log(`Remaining tasks: ${this.tasks}`);
  };
}

let ash = new Trainer('Ash', ['Get a Pokemon', 'Leave Pallet Town']);
ash.removeTask('Get a Pokemon'); // Get this to work
ash.printTasks();
// Nearly finished!
// Remaining tasks: Leave Pallet Town



// Ans : 
// let tasks = ['laundry', 'dishes', 'vacuum'];
// tasks.splice(tasks.indexOf('oil change'), 1);
// console.log(tasks); // [ 'laundry', 'dishes' ]

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// CODE COMPANION #9: DOM MANIPULATION.
// see all output in console.

<!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - DOM Manipulation</title>
    <meta charset="utf-8">
    <script src="main.js"></script>
  </head>

  <body>
  <button id="displayPromptButton">Click here!</button>
	<script>
			let displayPromptButton = document.getElementById('displayPromptButton');      //methods exposed

			displayPromptButton.addEventListener('click', function() {                  //event listener.
			  console.log('clicked!');
			});
	  console.log('Hello, world!');
	</script>
  </body>
</html>

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// USER PROMPT 


<!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - DOM Manipulation</title>
    <meta charset="utf-8">
    <script src="main.js"></script>
  </head>

  <body>
  <button id="displayPromptButton">Click here!</button>
	<script>
			document.addEventListener('DOMContentLoaded', function() {
			  let displayPromptButton = document.getElementById('displayPromptButton');

			  displayPromptButton.addEventListener('click', function() {    
				let input = prompt('What is your favorite Pokemon?');      // You will get one pop up one screee to type the data .
				console.log('input is ', input);           // output will show in console debugger
			  });
			});
	</script>
  </body>
</html>

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ADD TO DOM


<!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - DOM Manipulation</title>
    <meta charset="utf-8">
    <script src="main.js"></script>
  </head>

  <body> 
  
   <button id="displayPromptButton">Click here!</button>
  <p id="pokemon"></p>
  
  
	<script>
			 document.addEventListener('DOMContentLoaded', function() {
			  let displayPromptButton = document.getElementById('displayPromptButton');
			  let view = document.getElementById('pokemon');

			  displayPromptButton.addEventListener('click', function() {
				let input = prompt('What is your favorite Pokemon?');     //alert data get field for fill the data .
				view.innerHTML = input;       // Output get on screen page.
			  });
			});
	</script>
  </body>
</html>


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// LIST OF POKEMON

<!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - DOM Manipulation</title>
    <meta charset="utf-8">
    <script src="main.js"></script>
  </head>

  <body> 
  
   <button id="displayPromptButton">Click here!</button>
  <ul id="pokemon"></ul>     
  
  
	<script>
			  let displayPromptButton = document.getElementById('displayPromptButton');
				let view = document.getElementById('pokemon');

				displayPromptButton.addEventListener('click', function() {
				  let input = prompt('What is your favorite Pokemon?');
				  let listItem = document.createElement('li');
				  listItem.innerHTML = input;
				  view.appendChild(listItem);    // Output get in list form click and add number of list 
				});
	</script>
  </body>
</html>




@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 // Console event value get  
 



 <!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - Forms</title>
    <meta charset="utf-8">
    <script src="main.js">
	</script>
  </head>

  <body>
    <form id="pokedex">
      <p>Pokemon name:</p>
      <input type="text" name="pokemon">

      <p>Description:</p>
      <textarea name="description" rows="10" cols="30"></textarea>

      <br>
      <button type="submit">Add to Pokedex</button>
    </form>

    <h2>Pokemon:</h2>

    <ul id="pokemon-list"></ul>
	
	<script>
		function addToPokedex(event) {
		  event.preventDefault();
		  console.log('event ', event);
		}

		document.addEventListener('DOMContentLoaded', function() {
		  let form = document.getElementById('pokedex');
		  form.addEventListener('submit', function() {
			addToPokedex(event);
		  });
		}); 
	</script>
	
  </body>
</html>

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 // Console debugger value get 
 
 
 <!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - Forms</title>
    <meta charset="utf-8">
    <script src="main.js">
	</script>
  </head>

  <body>
    <form id="pokedex">
      <p>Pokemon name:</p>
      <input type="text" name="pokemon">

      <p>Description:</p>
      <textarea name="description" rows="10" cols="30"></textarea>

      <br>
      <button type="submit">Add to Pokedex</button>
    </form>

    <h2>Pokemon:</h2>

    <ul id="pokemon-list"></ul>
	
	<script> 
	  function clearForm() {
  document.getElementById('pokedex').reset();
}

document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('pokedex');
  form.addEventListener('submit', function() {
    addToPokedex(event);
    clearForm();
  });
});
	</script>
	
  </body>
</html>


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 // Dom value get in the client  page get 
 <!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - Forms</title>
    <meta charset="utf-8">
    <script src="main.js">
	</script>
  </head>

  <body>
    <form id="pokedex">
      <p>Pokemon name:</p>
      <input type="text" name="pokemon">

      <p>Description:</p>
      <textarea name="description" rows="10" cols="30"></textarea>

      <br>
      <button type="submit">Add to Pokedex</button>
    </form>

    <h2>Pokemon:</h2>

    <ul id="pokemon-list"></ul>
	
	<script>
		  function addToPokedex(event) {
			  event.preventDefault();
			  let name = event.target.pokemon.value;
			  let description = event.target.description.value;

			  let listItem = document.createElement('li');
			  let list = document.getElementById('pokemon-list');

			  listItem.innerHTML = `${name} - ${description}`;
			  list.appendChild(listItem);
			}
		document.addEventListener('DOMContentLoaded', function() {
		  let form = document.getElementById('pokedex');
		  form.addEventListener('submit', function() {
			addToPokedex(event);
			clearForm();
		  });
});
	</script>
	
  </body>
</html>



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// clear content

 <!DOCTYPE html>
<html>
  <head>
    <title>Code Companion - Forms</title>
    <meta charset="utf-8">
    <script src="main.js">
	</script>
  </head>

  <body>
    <form id="pokedex">
      <p>Pokemon name:</p>
      <input type="text" name="pokemon">

      <p>Description:</p>
      <textarea name="description" rows="10" cols="30"></textarea>

      <br>
      <button type="submit">Add to Pokedex</button>
    </form>

    <h2>Pokemon:</h2>

    <ul id="pokemon-list"></ul>
	
	<script>
		 function clearForm() {
  document.getElementById('pokedex').reset();
}

document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('pokedex');
  form.addEventListener('submit', function() {
    addToPokedex(event);
    clearForm();
  });
});
	</script>
	
  </body>
</html> 