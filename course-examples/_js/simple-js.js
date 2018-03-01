console.log(`Hello, I'm Shawn and I'm learning javascript!`)

1 + 1

console.log("1+1")
console.log("I'm writing JavaScript") // I mean technically yes but we all know it's not really .js we're writing. 


console.log("I'm using double quotes for my entries into the console because I feel that it's easier to have more punctuation with the double and have it look normal to the eye.")

console.log("string that I'm" + " going to add here" + " and another section being added here" + " and here, resulting in 4 separeate strings being added together") // My Example of stringing together a group of strings - I like to have my examples be a little more complex. 

console.log(23)
console.log(20 + 3)
console.log(26 - 3)
console.log(13 * 2)
console.log(46 / 2)
    // Yea we can do math in the console since you know our computers are glorified calculators so doing basic, and even more complex math can easily be handled by .js 


// Boom we're declaring variables now - it used be we used the VAR declaration but now since the new update with .js - its better if we start using the CONST declaration. 
const initialApples = 4
console.log(initialApples) // 4
const applesToBuy = 27
console.log(applesToBuy) // 27
const totalApples = initialApples + applesToBuy // 31
console.log(totalApples) // 31



// FUNCTIONS!

//Declaring a function
function firstFunction() {
    console.log("holy shit this is our first function and it's prety cool.")
}

firstFunction() // This is us "calling" our function - triggering our function. 

// creating a function for loggin first and last name of someone

function nameNoted(firstName, lastName) {
    console.log("Their name is " + firstName)
    console.log("Their last name is " + lastName)
}

nameNoted("Shawn", "Castillo")
    //This is basically saying that we're assigning a value of Shawn to firstName and a value of Castillo to lastName - You dont necessarily need to declare a variable separately to assign a value - this is when you're declaring and envoking the function after

function logger(someLog) {
    console.log(someLog)
}

logger("This is how you write to the logger - I think")

function addMyNumbers(number1, number2) {
    console.log(number1 + number2 + " should add up to 23 if this works correctly")
}

addMyNumbers(20, 3)

function multiplyMyNumbers(number1, number2) {
    console.log(number1 * number2 + " the multiplication outcome should end up comeing to 46")
}

multiplyMyNumbers(23, 2)


// Arrow function notation => this is what it looks like. Its different and is used in a very different way.

// What a normal anonymous function looks like.
const normalFunction = function(arg1, arg2) {
    // Do some really cool code stuff here
}

// New way of writing anonymous function in .js
const arrowFunctionNotation = (arg1, arg2) => {
    // Do some other really cool and awesome stuff in this function.
}

/*
Well what are we doing here :
We're creating a constant varible that is a function - it does an action that we dont need to have a separate name for. Now the reason for having this be like this is still not yet clear to me but I'm working through it.
*/

// You can also make these anonymous functions with no arguments to start with and those look different depending on what sort of information you're looking to get back -

// If you supply 0 arguments to the function you can subsitute the parenthesis with underscores

const zeroArgs = () => { /* Do some code here  */ }
const zeroArgsWithUnderscore = _ => { /* Do some code here  */ }

// If you supply only 1 arguemnt to the function you can still leave off the parenthesis as follows

const oneArgument = arg1 => { /* Do some more really cool stuff */ }
const oneArgumentWithParenthesis = (arg1) => { /* Do some more really cool stuff */ }

// Anything more than 1 arugment has to have parenthesis and commas to separeate those values

// Understanding the different types of Return that you can request when creating your code.

// Arrow functions like I'm learning right now will automaticlly create "return" statements

// The old way of getting information out of a function was to envoke a return at the end of the function just before the closing tag of the function so that it captured everything it needed.

// Also remember that this is for very basic of anonymous functions that can be contained within a single line of code

// Old method
const sumNormal = function(num1, num2) {
    return num1 + num2
}

// New method of writing the same thing out
const sumArrowMethod = (num1, num2) => num1 + num2
    // It does feel very weird that I dont have to write the ; after the very end of the varable. Makes me still feel uncomfortable.

// THIS in javascript will be getting to at another point in the lessons but right now we're going to pass it up and move on to something else.

// Workign with Arrow notation:
// This is technically correct but it needs to be don in new method way
const ten = () => 10
ten()
    //Correct way of expressing the exercise
    // const ten = _ => 10

// You log the argument not the name of the function - you call the name of the function and pass something into it to get something out of it - just calling the fucntion will bring back the function code itself and not the date genereated from the function parameters/rules.
const loggerArrowMethod = (logArg1) => {
    console.log(logArg1);
}

loggerArrowMethod("This is my text that I'm passing through a simple anonymous function that is going to output this text to the console so that I can get feedback on what's going on with my code and to test to see that it's working and doing things")

// Without Implicit Returns - You have to specifically add the return line to the code to get infomation to come back out.
function add(num1, num2) {
    return num1 + num2
}

//With Implicit Returns - Javascript will automatically get that going for you and you dont have to worry about it as long as it all can be contained onto a single line of text - the code will work. Also have to remember to removed the parenthesis from the RHS
const add2 = (num1, num2) => num1 + num2

const multiplyDemo = (num1, num2) => num1 * num2
const multiply2 = (num1, num2) => {
    return num1 * num2
}

// Remember that you have to envoke the function in the console in order to get anything form the function. If you don't log the info to the console you'll not immediately see that anything has changed. Remembering that you have to manually set that to 'log' that information.

// Scopes and Closures

const outsideVar = 'Outside Value Here'

function varInFunction() {
    const insideVariable = 'Inside Value Here'
    return outsideVar
}

// You can alawys find variables going from small scopes to much larger global scopes but you can't go the other direction and have a global function call a local scope defined variable. Doesn't work going that direction.

varInFunction() // Since it has a return on the -oustideVar- variable - and that variable is in the global scope range - it will be found and returned when the function is called - as is right now.

// console.log(insideVariable); // This will throw up an error because this variable is only defined within a function - a limited scope variable and thus isnt found by the Javascript engine.

const globalVariable = "Boom we're going global with this variable"

// Lets use this variable in various other places

const hello = "Hello World - Checkout my .js skillz "
const goodbye = "Boom - I'm out this bitch"

function sayHello() {
    console.log(goodbye);
}

console.log(hello); // Outputs to the console
sayHello(goodbye) // Outputs to the console

// Creating my own compound variables below - to help get my mind around closures and scopes

/* var globalVariable_2 = someGlobal_Value

function outsideScopeFunction() {
  // Inner function
  var localVar = some_Local_Value
  return function insideScopeFunction (){}
}

function different_OutsideScopeFunction(args1) {
  // Inner function - I'm just
  var localVar_2 = some_OtherLocal_Value
  return args1 + localVar_2
}
*/

function outerFn() {
    var outerVar = "I'm a variable in the outer function!"
    console.log("I'm a log that's nested in the outerFn - not nested in the function innerFn");

    return function innerFn() {
            console.log(outerVar)
            console.log("This log is created from within the innerFn, nested function")
        }
        // this didnt get sent to the console because it's after the return and nothing after the return gets run by the .js engine.
}

// Storing a reference to the closure
const theInnerFunction = outerFn()

// Calling the inner function
theInnerFunction() // I'm a variable in the outer function!


const macbook_DrKreiger = {
    operatingSystem: "macOS Sierra OSX",
    screenResolution: "2888x1800",
    screenSize: "15.4 inch",
    usbPorts: 2,
    hdmiPorts: 1,
    thunderboltPorts: 2,
    sdCardReaderPort: 1,
    storage: "500GB",
    textEditor: "Atom",
}

const imac_DeathStar = {
    operatingSystem: "macOS Sierra OSX",
    screenResolution: "3800x2600",
    screenSize: "27 inch",
    usbPorts: 4,
    hdmiPorts: 2,
    sdCardReaderPort: 1,
    storage: "1TB",
    textEditor: "Visual Studio Code"
}

const pc_MeghansLaptop = {
    operatingSystem: "Windows 10",
    screenResolution: "2440x1800",
    screenSize: "15.4",
    usbPorts: 4,
    hdmiPorts: 1,
    thunderboltPorts: 0,
    sdCardReaderPort: 1,
    storage: "500GB",
    textEditor: "None"
}

const operatingSystem = macbook_DrKreiger.operatingSystem
console.log(operatingSystem)
console.log(macbook_DrKreiger)

const emptyObject = {}

emptyObject.firstProperty = "This is the first property string, could also be any of the other types of js we can have"
emptyObject["secondProperty"] = "Second Propety set through using the bracket notation which I'm not a really huge fan of using as it is a legacy throw back"

console.log(emptyObject.firstProperty)
console.log(emptyObject["secondProperty"])

const weAreMakingMethodInsideThisVariable = {
    ourMethodHereBecauseOfTheFunctionAsValue: function() {
        // We'd have some code that would execute something here
        console.log("Our Code Did Something because of our Method was triggered")
    }
}

weAreMakingMethodInsideThisVariable.ourMethodHereBecauseOfTheFunctionAsValue()

// I think that having overly obvious variable names and method calls that help elaborate more of the complex context of what's going on behind the scenese when things get excuted.

const greeter = {
        sayHello: function(name) {
            console.log("Hello " + name + "!")
        },
        sayGoodBye: function(name) {
            console.log("Goodbye " + name + ", it was great to have you learn javascript with me")
        }
    }
    // You have to remember that when you're wanting to pass in a string as a parameter - you have to wrap in quotes 

greeter.sayHello("Meghan")
greeter.sayGoodBye("Shawn")

// We're going to make Arrays now fro this point forward - Arrays are made with the [] square brackets and remember from last lesson that methods are using squigly {} brackets. 

// Arrays are used to store list type of information - think of it as a grocery list - all the items pertaining to a particular them

const ourEmptyArray = []

const groceriesListToBuy = [
    "cabbage",
    "tomato Sauce",
    "Cereal",
    "Eggs",
    "Bread",
    "Milk",
    "Cheese",
    "Steak"
]

// This is inline styling mode if you want to have a more compact view of the content of an array. 

const strings = ["One", "Two", "Three", "Four"]
const numbers = [1, 2, 3, 4]
const booleans = [true, false, true, true]
const objects = [{ name: "Shawn" }, { name: "Meghan" }, { name: "Austin" }]
const arrays = [
    [1, 2, 3],
    ["a", "b", "c"],
    [4, 5, 6]
]

// This is how you would have the same variables in a more easily visual of code
const strings1 = [
    "Numbers",
    "As",
    "Text",
    "Not Numericals"
]

const numbers1 = [
    12345,
    534655,
    367,
    3424
]

const booleans1 = [
    false,
    true,
    false,
    true
]

const objects1 = [
    { name: "Alex" },
    { name: "Jenny" },
    { name: "Mike" }
]

const arrays1 = [
    [34, 22, 34563],
    ["e", "f", "g"],
    [4754, 0985, 3216]
]

console.log(numbers1.length)

// What is the index of Mahatma Gandhi in this list of people?
// Get Pablo Picasso from the people array.
// Set Walt Disney to Disneyland.
// Add your best friend's name to the end of the list
// Add another friend's name to the start of the list
// Add your name after Winston Churchill in the list
// Remove Benjamin Franklin from this list
// Remove Steve Jobs from this list
// Remove Napolean Bonaparte from this list
const friendAddName = 'Shawn Added'
const friendAddNameArray = [friendAddName]

const peopleArray = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Napolean Bonaparte',
    'Abraham Lincoln',
    'Mother Theresa',
    'Mahatma Gandhi',
    'Winston Churchill',
    'Charles Darwin',
    'Albert Einstein',
    'Pablo Picasso',
    'Ludwig Beethoven',
    'Walt Disney',
    'Henry Ford',
    'Steve Jobs'
]

// This is how you find out what the index is of an certain known item in a known variable array list
const indexGandhi = peopleArray.indexOf("Mahatma Gandhi")

// Setting a variable to a certain value in the array based on the index passed through - you have to name the array you're wanting to assign
const indexPablo = peopleArray[10]


console.log("Test Log to check for correct call reference")

console.log(indexGandhi)

console.log(indexPablo)

peopleArray[12] = 'Disneyland'

console.log(peopleArray)

// This is how you're adding content to the array - the end of the array 
const newPeopleArray = peopleArray.concat('Beer')

// This is adding a previous variable - already set to be an array value - to be added to the array - that variable could also hold more than one value stored in it.
const friendAdd = peopleArray.concat(friendAddNameArray)

console.log(peopleArray)
    // This just logs the old array unchanged

console.log(newPeopleArray)
    // This logs the new array after the addition has been added - Beer

console.log(friendAdd)
    // This logs the new array after the addition has been added - Shawn Added

// Okay so what we're doing above is that we're making a variable called "friendAdd" that then takes the "people" array and "concat" which means to add something to our original array list "people"

// So if we dont already have a variable that has converted its value to an array object then that needs to be done first in the following example 

// Also remember that you have to reference the new variable after you've done the .concat - otherwise you're just referencing the old array and not the new one with the new content that you're trying to add to the array. 

// OKay now we're going to learn how to remove items from an existing array 

// This parameter has the option to have an start.slice & end.slice parameters - if no option is set - this will copy entire array to slice/copy

const arrayToSlice = [1, 2, 3, 4, 5, 6, 7, 8]

const slicedArray = arrayToSlice.slice()

// Now we're going to be creating a start and end point of our array - this is going to look slightly different.

// This array slice is going to grab everything from the index[2] through index[5] - it's going to gather those parameters 
const slicedArray2 = arrayToSlice.slice(2, 5)

console.log(slicedArray2)
    // This is going to be the condensed slice from spots [2] and [5] If you provide an endIndex value, slice copies up to, but not including, the item you've indicated with the index.

// Okay so what if we wanted to just remove the ending of an array - we know what the array is and that we want to remove this last item - format the variable in this way (0,-1) this calls for the last item (0,-2) calls for the SECOND to last item - and so on - Negative numbers can only be used in slice 

// Now we're going to set up a situation that we're wanting remove some items from the middle of the known array:
// Rough Idea is to slice out the parts we want to retain and then join them .concat them back to gether at the end of this.  

// In our example we're going to want to remove numbers 3 & 4 from our arrayToSlice array list. 

const frontSlice = arrayToSlice.slice(0, 2)

const endSlice = arrayToSlice.slice(4)

// This is where we'll combine both of our arrays into a new array 
const combinedSlicedArray = frontSlice.concat(endSlice)
    // or with an empty initial array like the following
const combinedSlicedArrayAlternate = [].concat(frontSlice, endSlice)
    // This will produce the same output as the previous variable declaration. 
const superCondensedSlicedArray = [].concat(arrayToSlice.slice(0, 2), arrayToSlice.slice(4))

console.log(combinedSlicedArray) // This will log our new array minus the numbers we were trying to remove from our original array.
console.log(combinedSlicedArrayAlternate) // This should out put the same as the previous log. 
console.log(superCondensedSlicedArray)


// The whole previous section was about removing items from a list and from the middle of the list and the end of the list and probably even the beginning - I'm here to write human code not computer code

const dumbArray = []
const simpleArray = ["a", "b", "c"]

// If - Else Statements Section here 
// Anatomy of the if/else statment declaration 

if ("condition") {
    // Do Some Function Here
} else {
    // Do Some Other Function Here
}

// The condition in this delcaration is telling .js what to check before continuing on - if the condition evaluates to be "true" - .js will then execute the code within the if{} block. 

// If the condition is evaluated to be "false" the .js will execute everything within the else{} block.

// For our traffic light example
if ("Light is Red") {
    // Stop Walking
} else {
    // Continue Walking 
}

if ("light is red") {
    // Stop walking
} else if ("cars around") {
    // Stop walking
} else if ("yet another condition") {
    // Do yet another thing
} else {
    // Do the final thing
}

// if/else statements are based on the idea of comparing something is either "true" or "false" which utilizes .js extensive comparision library of signs to use depending on what type of comparison you're trying to do. 

// We have the following example of the different types of comparison operators

// Greater than (>) or greater or equals to (>=)
// Smaller than (<) or smaller or equals to (<=)
// Strictly equal (===) or equal ==
// Strictly unequal (!==) or unequal !=

// These are pretty simple to understand
24 > 23 // True
24 > 24 // False
24 >= 24 // True

24 < 25 // True
24 < 24 // False
24 <= 24 // True

24 === 24 // True
24 !== 24 // False

// However, there's a difference between strictly equal (===) vs equal (==), and strictly unequal (!==) vs unequal (!=):

    '24' === 24 // False - Strictly Equal
    '24' == 24 // True - Equal

    '24' !== 24 // True - Strictly UnEqual
    '24' != 24 // False - UnEqual

// As you can see from the example above, when you compare a string of 24 vs the number 24, === evaluates to false while == evaluates to true.

// === vs == (or !== vs !=)

// JavaScript is a loosely-typed language. What this means is that, when we declare variables, we don't care what type of value goes into the variable.

// You can declare any primitive or object, and JavaScript does the rest for you automatically:

const aString = 'Some string'
const aNumber = 123
const aBoolean = true

// When comparing things with strictly equal (===) or strictly unequal (!==), JavaScript checks the type of variable. This is why a string of 24 and a number 24 do not equate.

    '24' === 24 // False - Strictly Equal String is not a Number
    '24' !== 24 // True - Strictly UnEqual

// When comparing things with equal (==) or unequal (!=), JavaScript converts (or casts) the types so they match each other.

// Generally, JavaScript tries to convert all types to numbers when you use a conversion operator. In the example below, the string 24 is converted into the number 24 before the comparison.

// That's why a string of 24 equates to a number of 24 when you use ==.

    '24' == 24 // True
    '24' != 24 // False

// Booleans can also be converted into numbers. When JavaScript converts Booleans into numbers, true becomes 1 and false becomes 0.

0 == false // True
1 == true // True
2 == true // False

// Automatic type conversion (when using comparison operators) is one of the common causes of hard-to-find bugs. Whenever you compare for equality, always use the strict versions (=== or !==).

// Comparing objects and arrays

// Try comparing objects and arrays with === or ==. You'll be very surprised.

const a1 = { isHavingFun: true }
const b1 = { isHavingFun: true }

console.log(a1 === b1) // false
console.log(a1 == b1) // false

// In the example above, both a and b look exactly the same. They are both objects, they have the same values.

// The strange thing is, a === b is always going to be false. Why?

// Let's say you have an identical twin brother/sister. You look exactly the same as your twin. Same hair color, same face, same clothes, same everything. How can people differentiate the two of you? It'll be hard.

// In JavaScript, each object has a "identity card". This identity card is called the reference to the object. When you compare objects with equality operators, you're asking JavaScript to check if the two objects have the same reference (same identity card).

// Is it a surprise that a === b is always going to be false now?

// Let's tweak it a little and assign a to b.

const a = { isHavingFun: true }
const b = a

// In this case, a === b evaluates to true because b now points to the same reference as a.

console.log(a === b) // True

// Checking if two objects have the same value

// To check if two objects have the same property-value pairs, you need to compare every property-value pairs between the two objects. We'll look at this in a later lesson (not done yet).

// Truthy and Falsey

// If you write a single variable (like hasApples in the example below) as the condition of an if/else statement, JavaScript checks for a truthy or a falsey value.

const hasApples = 'true'

if (hasApples) {
    // Eat apple
} else {
    // Buy apples
}

// A falsey value is a value that evaluates to false when converted into a boolean. There are six possible falsey values in JavaScript:

// false
// undefined
// null
// 0 (numeric zero)
// "" (empty string)
// NaN (Not A Number

// A truthy value, on the other hand, is a value that evaluates to true when converted into a Boolean. In the case of numbers, anything that's not 0 converts to true.

// Automatic type conversion to truthy and falsey values are highly encouraged in JavaScript, because they make code shorter and easier to comprehend.

// For example, if you want to check if a string is empty, you can use the string in the condition straightaway.

const str = ''

if (str) {
    // Do something if string is not empty
} else {
    // Do something if string is empty
}

// More operators that I need to look out for
// Previously we learned about else if

// Note: Not actual JavaScript

if ("light is red") {
    // Stop walking *
} else if ("cars around") {
    // Stop walking *
} else {
    // Continue walking
}

// Notice how you need to repeat the "stop walking" code in two of the above conditions?

// To write better code, you can combine these two conditions if you had an OR keyword.

// Note: Not actual JavaScript
if ("light is red" && "cars around") {
    // Stop walking
} else {
    // Continue walking
}

// AND: &&
// OR: ||
// NOT: !