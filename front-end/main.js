// // DOUBLE SLASHES TO WRITE COMMENTS IN JAVASCRIPT


// //---------------------VARIABLES________________________
// // "let" Keyword is used to name a VARIABLE(container) for storing data.
// // let (variable name) = "(variable value)";

// let name;
// console.log(name)
// // by default vairables that are defined in JS their value is "undefined"

// let firstName = "Adrian";
// console.log(firstName);

// // Rules for naming variables:
// // - Cannot be a reserved Keyword "let, if, var ..."
// // - Names should be meaninful and descriptive names
// // - Cannot start with a number "1name, 2010lastname"
// // - Cannot contain a space of hyphen (-)
// // - When naming variables the first letter in the first word must be lower case and every words after should be upper case first letter EX. (firstName , numberOfChildrenOnBus). THIS IS CALLED CAMEL NOTATION.
// // - variables are case-sensitive


// // ways to name variables - ( let firstName = "Adrian", lastName = "Garay"; ) BUT BEST PRACTICE IS TO NAME VARIABLES IN ITS ONW LINE

// let firstDog = "Bruno";
// let secondDog = "Benji";


// // --------------------------CONSTANTS------------------------------------
// // if we don't want the value of a variable to change in a file we use keyword "const"

// let interestRate = 0.3; // <- initial value of variable "interstRate"
// interestRate = 1; // <- new value of variable "interestRate"
// console.log(interestRate);

// const newRate = 0.3;
// // newRate = 1;   <- if we try to change the value of variable we will get an error message.
// console.log(newRate);


// //--------------------PRIMITIVE TYPES-------------------------------------

// // What kind of values can we assign to variables?

// // PRIMITIVES / VALUE TYPES
// // - Strings  
// let stringNames = "Adrian"; // <- must be written in single/double quotes
// // - Numbers 
// let numberAge = 30; // <- numers must be written without quotes or otherwise they will become strings
// // - Booleans 
// let letterApproval = false // Boolean can only be true or false
// // - Undefined 
// let dogThree = undefined; // <- by default all variables are UNDEFINED until given a VALUE
// // - Null 
// let numberSelected = null; // <- we use null in situation where we want to EXPLICITELY CLEAR the value of a variable

// // REFERENCE TYPES
// // - Object
// // - Array
// // - Function


// // -------------------DYNAMIC LANGUAGE---------------------
// // Dynamic language means that a variable can be changed throught a JS file.

// // KEYWORD "typeof" allows us to CHECK the type of varible we are working with

// let dogNames = "bruno";
// // writing (typeof dogNames) in the console will output back "string" because dogNames = "bruno" is a string. 


// // ------------------OBJECTS---------------------------------
// //when we are dealing with multiple related variables we can group them in an object
// // an OBJECT is a collection of properties, properties is an association between a name and a value. 

// // standard variables that can be group together inside an object
// let nameValue ="Mosh";
// let ageValue = 30;

// // example of an object
// let person = {
//     nameValue: "Mosh",
//     ageValue: 30
// };

// console.log(person);
// // Console will return {nameValue: "Mosh", ageValue: 30}

// //THERE ARE TWO WAYS TO ACCESS DATA INSIDE AN OBJECT

// // Dot Notation 
// person.nameValue = "John"; // <- how to change the value of a variable inside an object
// console.log(person.nameValue); // <- how to call the value of the variable inside the console

// // Bracket Notation
// person["nameValue"] = "Mary"; // <- how to change the value of a variable inside an object using Bracket Notation
// console.log(person.nameValue); // <- calling the value inside the console

// // **DOT NOTATION IS USED MORE COMMON WHEN CHANGING DATA INSIDE AN OBJECT**



// //------------------ (7) LOGICAL OPERATORS ----------------------------


// // logical AND (&&)
// // Returns TRUE if BOTH operands are TRUE
// console.log(true && true); // CONSOLE -> True
// console.log(true && false); // CONSOLE -> False

// // real world scenario lets say in an app if a person needs approval for a loan, he needs to have high income and good credit score. 

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan); // CONSOLE -> true

// //logical OR (||)
// //Returns True if ONE of the operands is TRUE

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan); // CONSOLE -> true


// //NOT operator (!) 
// // paired with || it will be opposite of output. if(||) is false (!) will be true. if (||) is true then (!) will be false. 


// // if the applicant is not elible for loan, we have to consider their application as refused

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("eligible", eligibleForLoan);

// //CONSOLE -> eligible false.

// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused", applicationRefused);

// // CONSOLE -> Application Refused true.


// // -------------- logical operators with non-booleans -----------------

// // if we get an OUTPUT that is false but we don't want a BOOLEAN answer, we will get a Falsy OUTPUT


// // Falsy (false)
// // undefined
// // null
// // 0 
// // false
// // "" -> a string will be returned with the default answer. 
// // NaN

// //anything that is not Falsy is Truthy

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor; // <- the non-boolean value that will display an output other than "false" or "true"

// console.log(currentColor); //CONSOLE -> red

// // if we don't get an answer from the user, we will get the default answer ("blue") instead of getting "false".


// // --------------- OPERATORS PRECEDENCE -----------------------

// // when working with complex expression, we need to accont for is the precedence of operators

// let x = 2 + 3 * 4;

// console.log(x); //CONSOLE -> 14

// // PEMDAS WITH MATH EQUATIONS.

// // WE CAN USE "()" TO GIVE PRIORITY TO ANY OPERATION WE WANT TO EXECUTE FIRST!

// let x = (10 - 2 ) / 2;

// console.log(x); //CONSOLE -> 4. parentesys operation was executed first (10 - 2) = 8 then it was / by 2 = 4.

 
// // ----------------------------------
// // QUIZ
// // swapping a"red" to b"blue"

// let a = "red";
// let b = "blue";


// let c = a; // if we add a new variable, we can give it the value of "a". "c" now has the value of "a" which is "red"
// a = b; // we will set our value of "a" to copy the value of "b" which is "blue"
// b = c; // lastly we will get b to copy our c value, which c copied a. giving b = c = a, b -> a.
// // our values have now been swapped. 

// // *****CODE IS READ FROM TOP OF THE PAGE TO THE BOTTOM OF THE PAGE. LINE BY LINE. SO IT WILL READ LINE 1, THEN LINE 2 AND SO ON. 
// // "c" held value "a" before the value of "a" was switched to "b". "c" still holds value of "a" before was altered. 
// console.log(a);
// console.log(b);





