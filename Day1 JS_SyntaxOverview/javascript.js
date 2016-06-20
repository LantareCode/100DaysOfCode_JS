/*************************************************************************************
*** Excercise sheet downloaded from https://github.com/P1kachu/ProgrammingLearning ***
*************************************************************************************/

// Part One:
//Declare variables
// Declare two variables: an integer named "age", and a string named "name" with corresponding values (your name and age)
var age = 26;
var name = "Lantare";

//Print
console.log("You are " + name + " and you are " + age + " years old!");

//Concatenation
// Create a new string variable called "hello" which value is "Hello ". Add "name" at the end of "hello" (Concatenation) then print it
var str1 = "Hello ";
var str2 = "world!";
var str3 = str1.concat(str2);
console.log(str3);

var hello = "Hello " + name;
console.log(hello);

//Array
// create a new string array called "shoppingList", with three elements of your choice. Create an int variable containing the number of
// elements in "shoppingList" (using a function of the array/using the array)
var test = [];
for (var i = 0; i < 10; i++)
    test[i] = i;
console.log(test);

var shoppingList = ["Apples","Bananas","Pineapples"];
for (var i = 0; i < shoppingList.length; i++)
    console.log("Shopping list item number " + (i+1) + " is: " + shoppingList[i]);

//For-loop - Integer
// Create a simple for-loop for an integer "i" going from 1 to 10 that print the value of "i"
for(var i = 0; i <= 10; i++)
    console.log(i);

//loop through properties of an object
var person = {pFname:"John", pLname:"Doe", pAge:25}; 
console.log("Loop through object person.");
for (var x in person) 
    console.log(person[x]);


//If-statement
// Modify the first for-loop (with i from 1 to 10) such that it prints "(value of i) is even" when "i" is divisible
// by 2 (You may want to learn more about "modulo" (%)). Else, print "(value of i) is odd".
for(var i = 0; i <= 10; i++)
    console.log(i);


//Sum Up
// Create a string variable called "element" with the value of your choice. Then create a for-loop that checks if //"shoppingList" contains "element". If yes, print "You have to buy (value of element) !", and stop the loop //(search how to stop a loop).
// If not, print "Nope, you don't need (value of "element")".
var element = "Pizza";
for(var x in shoppingList){
   if(shoppingList[x] === element)
        console.log("You have to buy " + element + "!");
    else
       console.log("Nope, you don't need " + element + ".");
}

//-- Alternative to for loop above --
var test = (shoppingList.indexOf(element) !== -1) ?
    ("You have to buy " + element + "!") : ("Nope, you don't need " + element + ".");
console.log(test);


// Part Two:
//Functions - Ascii
// Create a function that returns nothing and which doesn't takes any parameter. It should just be named "TriForce"
// and print the TriForce symbol (one triangle over two other ones, can be found on internet) with "TRIFORCE"
// Don't forget to call the function !
function TriForce(){
    console.log ("   /\\");
    console.log ("  /__\\");
    console.log (" /\\  /\\");
    console.log ("/__\\/__\\");
    console.log ("TRIFORCE");
}
TriForce();

//Functions - One parameter
//Create a function that takes a string as parameter and returns "Hello (value of string) !"
function Hello(str){
    console.log("Hello " + str);
}
Hello("User");

//Functions - Multiple parameters
// Create a function that takes two integers as parameters and returns the addition of these two.
function add(val1, val2){
    console.log(val1 + " + " + val2 + " = " + (val1+val2));
}
add(99,1);

//User entry
// Create a string variable that takes what the user enter in the console as value. Then print "You entered (value of string)"
var user_value = prompt("Enter a value", ":)");
console.log(user_value);

//While loop
//Create a while loop that takes a number and divides it by 2 until it is less than 3
var num = 10;
while(num > 3){    
    num /=2;
}
console.log(num);


//do-While loop
//Do the same with a do-while loop
num = 10;
do{
    num /= 2;
}while(num > 3);
console.log(num);

// Random generator
// Create a function that returns a random number
function randomNum(){
    console.log(Math.random());
}
randomNum();

// Random generator with bounds
// Create another function that returns a random number between two bounds given as parameters.
function randomNum(from_x, to_y){
    console.log(Math.floor((Math.random() * to_y) + from_x));
}
randomNum(1, 10);

//Switch
// Create a Switch that takes an integer "a" and return a sentence regarding the value of a
// (Create 3 statements for 3 specific values and a default one)
var a = 1;
switch (a) {
    case 0:
        console.log (":)");
        break;
    case 1:
        console.log (";)");
        break;
    case 2:
        console.log (":o");
        break
    default: 
        console.log ("Nope.");
}

//Reverse
// Create a function that reverse a string
function reverseString(str) {
  console.log(str.split('').reverse().join(''));
}
reverseString("Catfish");



