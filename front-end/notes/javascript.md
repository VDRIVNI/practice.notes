<link rel="stylesheet" href="../css/notes.css" />

<div id="title">JAVASCRIPT NOTES</div>

- To open up preview<span class="keyword"> cmd shift + V</span> these notes.

---

- QUICKTIP: Notes in JavaScript

```js
// double slash to write comments in your code.
```

---

# Variables

- KEYWORD: <span class="keyword">let</span>
- a VARIABLE is a value that can change, depending on conditions or on information passed to the program

```js
let variable = "Value";
```

## Rules for naming variables:

1. Cannot be a reserved keyword (if, let, var ...)
2. Should be meaninful (they must be descriptive of what you are trying to store)
3. Cannot start with a number (EX: 1name, 3stores, etc.)
4. Cannot contain a space or hyphen(-) all words must be connected
5. first word of the variable must be lower case and every word after must have first letter capitalized. (firstName, lastName)

#### IF YOU WANT TO DECLARE MULTIPLE VARIABLES, ITS BEST PRACTICE TO WRITE THEM ON THEIR ONW LINE.

```js
let firstName = "Adrian";
let lastName = "Garay";
```

---

# Constants

KEYWORD: <span class="keyword">const</span>

- If we dont want DATA inside a VARIABLE to every change or be altered, we use "const" instead of "let".

```js
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

OUTPUT: 1; // <- the new value of the variable changed to 1.
```

```js
const interestRate = 0.3;
interstRate = 1;
console.log(interestRate);

OUTPUT: TypeError: line 3 // <- we cannot reasign a CONSTANT.
```

<h4> IN THE REAL WORLD IF WE DO NOT NEED TO REASIGN A VARIABLE WE USE "const", OTHERWISE USE "let"</h4>

---

# Data Types

## Primitives / Value Types

### 1. "strings"

- any value encased by quotes " "

```js
let variable = "Data";
```

### 2. Numbers

- numbers do not need quotes

```js
let variable = 1;
```

### 3. Booleans

- ONLY 2 possible values are booleans: true / false

```js
let variable = true;
let variable = false;
```

### 4. Undefined

- by default, all variables are set to Undefined until given a value.

```js
let variable = undefined;
```

### 5. Null

- When we want to clear the value of a variable we use NULL.

```js
let variable = null;
```

---

# Dynamic Typing

KEYWORD: <span class="keyword">typeof</span>

- Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time.

```js
let varible = undefined;
// later down the road this varible can be given a different value.

let variable = "This variable is now a string";
```

if we attempt to check in our console the value type using type of we will get "string"

```js
typeof variable;

OUTPUT: "string";
```

Now if we change the value to something other than a "string" we will get a new output for our type.

```js
let variable = "data";
variable = 1;
typeof variable;

OUTPUT: "number"; // <- the value of our variable was changed from a string to a number.
```

## \*\* "typeof" will return one of our 5 value types:

1. "string"
2. "number"
3. "boolean"
4. "undefined"
5. "object" (null)

---

# Objects

- An object is a collection of properties, and a property is an association between a name (or key) and a value.

```js
let object = {
  key: "value-one",
  secondKey: "value-two",
};

console.log(object);

OUTPUT: {key: "value-one", secondKey: "value-two"}
```

- {} is known as a object literal
- The properties inside an object are called KEYS.

```js

let person = {
  name: "Adrian",
  age: "30",
};

console.log(person);


OUTPUT: {name: "Adrian", age: 30}
```

- to access the property name we need to call on the object.key

```js
let person = {
  name: "Adrian",
  age: 30,
};

console.log(person.age);
console.log(person.name);

OUTPUT: 30;
OUTPUT: Adrian;
```

## THERE ARE TWO WAYS TO WORK WITH OBJECTS

### Dot Notation:

- Dot notation is the most common way to access elements in JavaScript. To use dot notation, you simply write the name of the object followed by a dot and the name of the property you want to access.

```js
syntax: object.value;
```

### Bracket Notation:

- The Bracket Notation approach involves using square brackets, in which you have an expression that evaluates to a value. That value serves as a key for accessing the property.

```js
syntax: object[expression];
```

EXAMPLE:

```js
let person = {
  name: "Adrian",
};

// Dot Notation:
console.log(person.name);
OUTPUT: "Adrian";

// Bracket Notation:
console.log(person["name"]);
OUTPUT: "Adrian";
```

---

# Arrays

- An ARRAY is a data structure that we use to represent a group of items(objects).

```js
let arrays = ["object1", "object2"];
console.log(arrays);

OUTPUT: ["object1", "object2"];
```

```js
let selectedColors = ["red", "blue"];
console.log(selectedColors);

OUTPUT: ["red", "blue"];
```

- Each element inside an array has an index # (starts from 0, 1, 2,...).
- In the example above "red" occupies (0) and "blue" is (1), so if we want to call on "red" we can call its index number.

```js
let selectedColors = ["red", "blue"];
console.log(selectedColors[1]);

OUTPUT: "red";
```

- we can add more elements to arrays during runtime by adding new elements to index slots.

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = "green";
console.log(selectedColors);

OUTPUT: ["red", "blue", "green"]
```

we can also store different types of data inside ARRAYS.

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = 1; // <- Number
console.log(selectedColors);

//OUTPUT: ["red", "blue", 1]
```

- Since ARRAYS are technically OBJECTS, we can use DOT NOTATION to access different properties when calling ARRAYS

```js
console.log(selectedColors.length);
console.log(selectedColors.indexOf);
console.log(selectedColors.keys);
etc...
```

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = 1; // <- Number
console.log(selectedColors.length);

OUTPUT: 3  // <- (.length) returns the number of items inside an array.
```

---

# Functions

- Functions are one of the fundamental blocks in JavaScript
- Functions is a set of statements that PERFORMS A TASK or CALCULATES A VALUE.

```js
function variable(parameter) {
  //body of a function
}
greet(Argument);
```

```js
function greet(name) {
   console.log("Hello" + name);
}

greet("Adrian");

OUTPUT: Hello Adrian
```

- We can also have multiple parameters inside functions

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("Adrian", "Garay");

OUTPUT: Hello Adrian Garay
```

- If we do not declare a value to our ARGUMENT, we will get "undefined"

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("Adrian");

OUTPUT: Hello Adrian undefined  // <- the default value of variables is "undefined".
```

## TYPES OF FUNCTIONS

### Performing a Task

- In programming, functions allow the structuring of programs in segments of code to enable performance of individual tasks

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("John", "Smith");

OUTPUT: Hello John Smith
```

### Calculating a Value

- Evaluating a function means finding the value of f(x) =… or y =… that corresponds to a given value of x

```js
function square(number) {
  return number * number; // "return" keyword  returns the value to whoever is calling the function.
}

console.log(square(2));

OUTPUT: 4;
```

---

# Operator Variations

### Arithmatic Operators (Calculations)

```JS
let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Remainder of division
console.log(x ** y); // Exponational X to the power of Y
console.log(++x); // Increment(++) -> increases value +1
console.log(--x); // Decrement(--) -> decreases value -1
```

### Assignment Operators (Used to Assign Values)

```js
let x = 10;

x++;
x = x + 1; // equivilent to x++ ONLY.

// if we want to add any other value we need to asign values

x = x + 5;
x += 5; // "+=" is the same as X + 5.
x -= 5; // subtraction
x *= 5; // multiplication
x /= 5; // division
```

---

# Comparing Operators

- we use comparison operators to compare the value of a variable to something else

```js
let x = 1;
console.log(x > 0);
OUTPUT: true; //(answer will always be boolean TRUE or FALSE)
```

### Relational Operators

```js
console.log(x > 0); // X grater than 0
console.log(x >= 1); // X greater than or equal to 1
console.log(x < 1); // X less than 1
console.log(x <= 1); // X less than or equal to 1
```

### Equality Operators

```js
console.log(x === 1); // if X is equal to 1? TRUE
console.log(x !== 1); // if X is NOT equal to 1? FALSE
```

---

# Ternary Operator

EXAMPLE:

- IF A CUSTOMER HAS MORE THAN 100 POINTS,
- THEY ARE "GOLD" CUSTOMER, OTHERWISE,
- THEYA RE "SILVER" CUSTOMER.

```js
let points = 100;
let type = points > 100 ? "gold" : "silver";
// if points greater than(>) 100 =(?) gold otherwise(:) equal silver
// the condition is if value is true, we use first choice, if false it will use the second option.

console.log(type);
```

---

# Conditional Statements

- In Javascript we have two kinds of conditional statements.

## - if...else

- KEYWORD: <span style="color:red;"> "if" "else if" "else" </span>

- if..else statement is used for decision making in programming. If the given condition is true, then the code inside if block is executed, otherwise else block code is executed.

```js
if (condition) {
  //condition1 = true (will execute)
} else if (condition02) {
  //condition02 = true (will execute)
} else {
  // condition 01 or 02 = false (will execute)
}
```

```js
// hour
// if hour is between 6 am and 12pm: Good Morning!
// if it is between 12pm and 6 pm: Good Afternoon!
// otherwise: Good Evening!

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else console.log("Good Evening");
```

## - switch...case

- KEYWORD: <span class="Keyword">switch" "case" "break" "default" </span>
- A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each switch case.

```js
// variable we are trying to test
let variable = "value";

switch (variable) {
  case "value": // if this variable = "value"
    // statement or scenario will execute
    break;

  case "value-two": // if this variable = "value"
    //statement02 or scenario02 will execute
    break;

  default: // if no statement has been met.
  //default statement/scenario will execute.
}
```

```js
let role = "moderator";

switch (role) {
  case "guest":
    console.log("guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

OUTPUT: "Moderator User"; // <- second case was executed when 2nd scenario was met.
```

```js
// we can also use "if...else" to get the same results.

if (role === "guest") console.log("guest User");
else if (role === "moderator") console.log("moderator");
else console.log("unknown User");
```

---

# Loops

## - If we want to repeat actions X-amount of times we use loops

#### we have 5 different types of Loops:

1. for
2. while
3. do...while
4. for...in
5. for...of

## for

```js
for (let variable = #; condition we want to meet; incrementExpression will execute until condition is met){
  statement we want to execute;
}

// statement("Hello World") will execute until "i" is <5 (0,1,2,3,4)
for (let i = 0; i < 5; i++) {
  console.log("hello World");
}

OUTPUT:
(0)"Hello World" // condition is still true so it will continue to execute until it is met.
(1)"Hello World"
(2)"Hello World"
(3)"Hello World"
(4)"Hello World" // after (4) condition is evaluated as false and stop the execution of the statement.
```
