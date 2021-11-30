var intro = "Good Morning";
/**
 * var = Variable keyword
 * intro = variable name
 * = => assignment operator
 * "Good Morning" => string
 */

console.log(intro);

/**
 * Naming Convention
 * 
 * Camel Case - firstName (Recomment)
 * Pascal Case - FirstName
 * Snake Case = first_name
 * 
 * --------------------------------------
 * 
 * Rules for variable names
 * 1. Variable Names include letters,number,$ , _.
 * 2. That don't start with numbers.
 * 3.That can start $ or _.
 * 4.That don't contains space.
 * 5.That are case sensitive.
 * 6.That not be reserved keywords.
 */

// var firstName = "Min"; // String
// var lastName = "Khant";
// console.log(firstName, lastName)
// var num = 10; // number
// var married = false; // Boolean
// var num2; // Undefined
// var num3 = null; // null
// console.log(num2)
// console.log(num3);

// console.log(typeof married)


//  Operator

/**
 * 1. Arimethic Operator
 * 2. Assignment Operator
 * 3. Comparison Operator
 * 4. Logical Operator
 */


/**
 * Arimethic Operator (+,-,*,/,%,++,--,**)
 */

var fullName = "Min Khant";
var age = 16;
var job = "Web Developer";
console.log("My name is" + ' ' + fullName + "My age is " + age + "My job is " + job);

var num1 = 10;
var num2 = 5;
var result = num1 + num2;
console.log(result); // Addition

var num3 = 35;
var num4 = 40;
console.log(num4-num3);// Subtraction

console.log(num4*num3); // Multiplication

console.log(num2/num3); // Divider
console.log(num4 % num3); // Module
console.log(num4++)
console.log(num4)
console.log(++num4)
console.log(num3--);
console.log(num3)
console.log(--num3)

console.log(2 ** 3); // 2 * 2 * 2 => Exponent


/**
 * Assignmnet Operator
 * += , -=, *=, /=, %=
 */

var num5 = 10;
num5 += 5;// 10 + 5
console.log(num5); //15
num5 -= 10;
console.log(num5)

