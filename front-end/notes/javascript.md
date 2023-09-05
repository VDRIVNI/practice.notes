# <span style="color: aquamarine"> JAVASCRIPT NOTES </span>

### <span style="color: red;"> CMD SHFT + V</span> to open up preview.

---

# <span style="color: yellow;"> Variables </span>

- KEYWORD: <span style="color:red;">let</span>
- VARIABLES are used to store DATA temparily inside a computers memory.

```js
let variable = "Data";
```

Rules for naming variables:

1. Cannot be a reserved keyword (if, let, var ...)
2. Should be meaninful (they must be descriptive of what you are trying to store)
3. Cannot start with a number (EX: 1name, 3stores, etc.)
4. Cannot contain a space or hyphen(-) all words must be connected
5. first word of the variable must be lower case and every word after must have first letter capitalized. (firstName, lastName)

If you want to declare multiple variables, its best practice to write them on their own line.

```js
let firstName = "Adrian";
let lastName = "Garay";
```

---

# <span style="color: yellow;"> Constants </span>

KEYWORD: "const"

- If we dont want DATA inside a VARIABLE to every change or be altered, we use "const" instead of "let".

```js
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
```

<strong>OUTPUT</strong>: 1 <- the new value of the variable changed to 1.

```js
const interestRate = 0.3;
interstRate = 1;
console.log(interestRate);
```

<strong>OUTPUT:</strong> TypeError: line 3 <- we cannot reasign a CONSTANT.

\*\* IN THE REAL WORLD IF WE DO NOT NEED TO REASIGN A VARIABLE WE USE "const", OTHERWISE USE "let"

---

## Primitive types

### 2 category of types that can be assigned to a variable

## Primitives / Value Types

1. "strings"
   - any value encased by quotes " "

```js
let variable = "Data";
```

2. Numbers
   - numbers do not need quotes

```js
let variable = 1;
```

3. Booleans
   - ONLY 2 possible values are booleans: true / false

```js
let variable = true;
let variable = false;
```

4. Undefined
   - by default, all variables are set to Undefined until given a value.

```js
let variable = undefined;
```

5. Null
   - When we want to clear the value of a variable we use NULL.

```js
let variable = null;
```

---

# <span style="color: yellow;"> Dynamic Typing </span>

KEYWORD: <span style="color:red;">typeof</span>

- JavaScript is a dynamic language
  - When a variable is set, we can change the value inside a value during runtime.

```js
let variable = "Data";
```

if we attempt to check in our console the value type using type of we will get "string"

```js
typeof variable;
```

OUTPUT: "string"

Now if we change the value to something other than a "string" we will get a new output for our type.

```js
let variable = "data";
variable = 1;
typeof variable;
```

OUTPUT: "number" <- the value of our variable was changed from a string to a number.

\*\* "typeof" will return one of our 5 value types:

1. "string"
2. "number"
3. "boolean"
4. "undefined"
5. (null) "object"

---

# <span style="color: yellow;"> Objects </span>

- An OBJECT is a collection of multiple related VARIABLES
- Instead of having multiple variables we can group them together and then call on the "object.key". this helps write cleaner code.
- {} is known as a object literal
- The properties inside an object are called KEYS.
-

```js
let object = {
  key: "value-one",
  secondKey: "value-two",
};

console.log(object);

let person = {
  name: "Adrian",
  age: "30",
};

console.log(person);
```

OUTPUT: {name: "Adrian", age: 30}

- to call on a KEY we need to call on the name property.

```js
// to access the property name we need to call on the object.key

let person = {
  name: "Adrian",
  age: 30,
};

console.log(person.age);
console.log(person.name);
```

OUTPUT: 30
s
OUTPUT: Adrian

- ## THERE ARE TWO WAYS TO WORK WITH OBJECTS
- DOT NOTATION:

```js
person.name = "John";
console.log(person.name);
// OUTPUT: John
```

- BRACKET NOTATION:

```JS
person['name'] = "Mary";
console.log(person.name);
// OUTPUT: Mary
```

---

# <span style="color: yellow;"> Arrays </span>

- An ARRAY is a data structure that we use to represent a group of items(objects).

```js
let arrays = ["object1", "object2"];
console.log(arrays);

//OUTPUT: ["object1", "object2"]

let selectedColors = ["red", "blue"];
console.log(selectedColors);

//OUTPUT: ["red", "blue"]
```

- Each element inside an array has an index # (starts from 0, 1, 2,...).
- In the example above "red" occupies (0) and "blue" is (1), so if we want to call on "red" we can call its index number.

```js
let selectedColors = ["red", "blue"];
console.log(selectedColors[1]);

//OUTPUT: red
```

- we can add more elements to arrays during runtime by adding new elements to index slots.

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = "green";
console.log(selectedColors);

//OUTPUT: ["red", "blue", "green"]
```

we can also store different types of data inside ARRAYS.

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = 1; // <- Number
console.log(selectedColors);

//OUTPUT: ["red", "blue", 1]
```

- Since ARRAYS are technically OBJECTS, we can use DOT NOTATION to access different properties when calling ARRAYS

  - console.log(selectedColors.lenght);
  - console.log(selectedColors.indexOf);
  - console.log(selectedColors.keys);
  - etc...

```js
let selectedColors = ["red", "blue"];
let selectedColors[2] = 1; // <- Number
console.log(selectedColors.lenght);

//OUTPUT: 3 <- ".lenght" returns the number of items inside an array.
```

---

# <span style="color: yellow;"> Functions </span>

- Functions are one of the fundamental blocks in JavaScript
- Functions is a set of statements that PERFORMS A TASK or CALCULATES A VALUE.

```js
function variable(parameter) {
   //body of a function
}
greet(Argument);

--
function greet(name) {
   console.log("Hello" + name);
}

greet("Adrian");

//OUTPUT: Hello Adrian
```

- We can also have multiple parameters inside functions

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("Adrian", "Garay");

//OUTPUT: Hello Adrian Garay
```

- If we do not declare a value to our ARGUMENT, we will get "undefined"

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("Adrian");

//OUTPUT: Hello Adrian undefined <- the default value of variables is "undefined".
```

---

# <span style="color: yellow;"> Types of Functions </span>

## <span style="color: red;"> Performing a Task </span>

```js
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

greet("John", "Smith");
//OUTPUT: Hello John Smith
```

## <span style="color: red;"> Calculating a Value </span>

```js
function square(number) {
  return number * number; // "return" keyword  returns the value to whoever is calling the function.
}

console.log(square(2));
//OUTPUT: 4
```

---

# <span style="color: yellow;"> Operator Variations </span>

## <span style="color: orange;"> - Arithmatic Operators (Calculations) </span>

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

## <span style="color: orange;"> - Assignment Operators (Used to Assign Values) </span>

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

# <span style="color: yellow;"> Comparing Operators </span>

- we use comparison operators to compare the value of a variable to something else

```js
let x = 1;
console.log(x > 0);
//OUTPUT: true (answer will always be boolean TRUE or FALSE)
```

## <span style="color: orange;"> - Relational Operators </span>

```js
console.log(x > 0); // X grater than 0
console.log(x >= 1); // X greater than or equal to 1
console.log(x < 1); // X less than 1
console.log(x <= 1); // X less than or equal to 1
```

## <span style="color: orange;"> - Equality Operators </span>

```js
console.log(x === 1); // if X is equal to 1? TRUE
console.log(x !== 1); // if X is NOT equal to 1? FALSE
```

---

# <span style="color: yellow;"> Ternary Operator </span>

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
