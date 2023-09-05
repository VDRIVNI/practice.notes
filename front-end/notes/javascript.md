# JAVASCRIPT NOTES

---

# Arrays

an ARRAY is ussed to store a group of OBJECTS.
EX: storing a list of products in a shopping list

```js
let variable = []; // "[]" is an ARRAY LITERAL, indicates an empty array.

let selectedColors = ["red", "blue"];
console.log(selectedColors);

//OUTPUT: (2) ["red", "blue"]
```

they are listed from left to right with # designation starting from 0. "red" holds position (0) and "blue" holds (1)

to display an item from any list you call on their position

```js
console.log(selectedColors[0]);
```

OUTPUT: red

to add items in an ARRAY we add a value to the number position

```js
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

// OUTPUT: (3) ["red", "blue", "green"]
//*green was added to position #2.
```

ARRAYS can store different types of information
EX: "strings", numbers (1,2,3...), Booleans (true/false) ...

---

# Functions

- KEYWORD: "function"

- ** FUNCTIONS are one of the fundamental blocks of JS **

- Functions are ta set of statements that perform a TASK or CALCULATE a value

```js
//anything inside {} is the body of the function.
function greeting() {
  console.log("Hello World!");
}

greeting(); // <- to call the function in the console.
```

- FUNCTIONS can have INPUTS, inputs change how the function behaves

```js
// the value inside () is known as a PARAMETER. its only accesible inside the function. ***CANNOT BE CALLED OUTSIDE THE FUNCTION.
function greet(name) {
  console.log("Hello " + name);
}

greet("John"); // when calling the function we need to pass a value (in this case the name "john"). This value is know as an ARGUMENT, it is supplied for the PARAMETER.
```

a FUNCTION can have multiple PARAMETERS
ex:

```js
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");

// OUTPUT: Hello John Smith
```

\*\* IF WE DO NOT PASS AN ARGUMENT FOR THE SECOND PARAMETER, WE WILL GET "undefined"

```js
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John"); // <- No second argument.

// OUTPUT: Hello John undefined
```

\*TYPES OF FUNCTIONS

- PERFORMING A TASK

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("John", "Smith");
//OUTPUT: Hello John Smith
```

- CALCULATING A VALUE

```js
function square(number) {
  return number * number; // "return" keyword  returns the value to whoever is calling the function.
}

console.log(square(2));
//OUTPUT: 4
```

---

# OPERATOR VARIATIONS

- ARITHMATIC OPERATORS (USED TO PERFORM CALCULATIONS)

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

- ASSIGNMENT OPERATORS (USED TO ASSIGN VALUES)

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

# COMPARING OPERATORS

- we use comparison operators to compare the value of a variable to something else

```js
let x = 1;
console.log(x > 0);
//OUTPUT: true (answer will always be boolean TRUE or FALSE)
```

RELATIONAL OPERATORS

```js
console.log(x > 0); // X grater than 0
console.log(x >= 1); // X greater than or equal to 1
console.log(x < 1); // X less than 1
console.log(x <= 1); // X less than or equal to 1
```

EQUALITY OPERATORS

```js
console.log(x === 1); // if X is equal to 1? TRUE
console.log(x !== 1); // if X is NOT equal to 1? FALSE
```

---

# TERNARY OPERATOR

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
