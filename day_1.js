// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A

/*
1. How to assign value to variable? // with assignment operator =
2. How to change value of variable? // 
3. How to assign existing variable a new variable? // with assignment operator =
4. Definitions of declare, assign, and define // declare: using keywords to introduce ____; assign: used to give value to a variable; define: for expressions?
5. What is pseudocoding and why is it useful? // Expressing in plain English the steps that are happening. It is useful for making sure you know where your code is going and that it is fulfilling its intended function.
6. How much time should be spent thinking about how to solve a problem vs. actually typing in code? This is probably different depending on how different people think/work best, but, generally at least the same if not more time should be spent thinking about how to solve a problem than implementing since it likely saves time and energy for most to make sure their logic tracks before trying to define it in code.
*/


// B. Strings

var firstVariable;
firstVariable = "Hello World";
firstVariable = 8;
secondVariable = firstVariable;
secondVariable = "Any String";
// console.log(firstVariable); // 8

const yourName = "Casey"
// console.log(`Hello, my name is ${yourName}`);


// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

/*
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 !== '48');
*/

// D. The Farm

var animal = "fox"
if (animal === "fox") {
	// console.log("caw-shriek!");
} else {
	// console.log("Hey! You're not a fox!");
}

// E. Driver's Ed

var yourAge = 21

if (yourAge >= 16) {
	// console.log("Here are the keys!");
} else if (yourAge < 16) {
	// console.log("Sorry, you're too young.")
}

//_____________________________________________________________



// II. Loops
// A. The Basics

//1.
for (let i = 0; i <= 10 && i >= 0; i++) {
	// console.log(i)
}

//2.
for (let i = 10; i <= 400; i++) {
	// console.log(i)
}
//3.
for (let i = 12; i <= 4000; i += 3) {
	// console.log(i)
}

// B. Get even

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		// console.log(i+"<-- is an even number");
	} else {
		// console.log(i)
	}
}

// C. Give me Five

for (let i = 5; i <= 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		// console.log(`I found a ${i}. High five! Three is a crowd.`)
	} else if (i % 5 === 0) {
		// console.log(`I found a ${i}. High five!`);
	} else if (i % 3 === 0) {
		// console.log(`I found a ${i}. Three is a crowd.`)
	}
}

// D. Savings account

//1.
let bank_account = 0;
for (let i = 0; i <= 10; i++) {
	bank_account += i;
}

// console.log(bank_account);


//2.
for (let i = 0; i <= 100; i++) {
	bank_account += (i * 2);
}

// console.log(bank_account)


//_____________________________________________________________



// III. Arrays & Control Flow
// A. Talk about it:

/*
1. What are the things in an array called? // Values
2. Do Arrays guarantee those things will be in order? // No.
3. What real-life thing could you model with an array? // Datasets. Numbers on a bank statement. Titles in a DVD collection. Favorite thoughts.
*/

// B. Easy Does It

let quotes = ["veni, vidi, vici", "friends, romans, countrymen, lend me your ears", "may they weep for you..."]

// C. Accessing elements

randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]) 
randomThings.splice(2, 1, "World")
// console.log(randomThings)

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// console.log(ourClass[2])
ourClass.splice(4, 1, "Octocat")
ourClass.push("Cloud City")
// console.log(ourClass)

// E. Mix It Up

const myArray = [5, 10, 500, 20]
myArray.push("Aegon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

// console.log(myArray)

/*
5a. Did you mutate the array? // No.
5b. What does mutate mean? // To add/remove values in array.
5c. Did the .reverse() method return anything? No.
*/

// F. Biggie Smalls

var num = 100

if (num < 100) {
	console.log("little number")
} else {
	console.log("big number")
}

// G. Monkey in the Middle

var num = 8

if (num < 5) {
	console.log("little number");
} else if (num > 10) {
	console.log("big number");
} else {
	console.log("monkey")
}


// H. What's in Your Closet?

const kristynsCloset = [
	"left shoe",
	"cowboy boots",
	"right sock",
	"Per Scholas hoodie",
	"green pants",
	"yellow knit hat",
	"marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
	[
		// These are Thom's shirts
		"grey button-up",
		"dark grey button-up",
		"light blue button-up",
		"blue button-up",
	], [
		// These are Thom's pants
		"grey jeans",
		"jeans",
		"PJs"
	], [
		// Thom's accessories
		"wool mittens",
		"wool scarf",
		"raybans"
	]
];

//1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

//2.
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//3.
kristynsCloset.splice(5, 1, "stained knit hat");

//4.
thomsCloset[0][0]

//5.
thomsCloset[1][0]

//6.
thomsCloset[2][2]

//7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`)

//8.
thomsCloset[1][2] = "Footie Pajamas" 
console.log(thomsCloset)


//_____________________________________________________________








// IV. Functions

// A. printGreeting

function printGreeting(name) {
	return `Hello there, ${name}!`
}

console.log(printGreeting("you"));

// B. printCool

function printCool(name) {
	return `${name} is cool`
}

console.log(printCool("Harold Finch"));

// C. calculateCube

function calculateCube(num) {
	return num ** 3
}

console.log(calculateCube(5));

// D. isVowel

function isVowel(char) {
	char = char.toLowerCase()
	if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
		return true
	} else {
		return false
	}
}

console.log(isVowel("g"));

// E. getTwoLengths

function getTwoLengths(string1, string2){
	return [string1.length, string2.length]
}

console.log(getTwoLengths("Hank","Hippopotamus"));

// F. getMultipleLengths

function getMultipleLengths(arr){
	let lengthArr = []
	for(let i=0; i < arr.length; i++){
		lengthArr.push(arr[i].length)
	};
	return lengthArr;
}

console.log(getMultipleLengths(["hello","what","is","up","dude"]))

// G. getMaxThree

function maxOfThree (num1, num2, num3){
	if (num1 > num2 && num1 > num3){
		return num1;
	} else if (num2 > num1 && num2 > num3){
		return num2;
	} else {
		return num3;
	}
}

console.log(maxOfThree(6, 9, 1))

// H. printLongestWord

// function printLongestWord (arr1) {
// 	let longestWord = ''
// 	array.forEach(str) ==> {
// 		if (str.length > longestWord.length){
// 			longestWord = str;
// 		}		
// < arr1.length; i++){
// 		longestWord.push(arr1[i].length)
// 	}
// 	return longestWord; 
// }


// function printLongestWord(array){
// 	let longestWord = ''
// 	array.forEach((str) => {
// 		if (str.length > longestWord.length){
// 			longestWord = str;
// 		}
// 	});
// 	return longestWord
// }

// return Math.max([longestWord])

function printLongestWord(arr){
	let longestWord = ''
	
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//_____________________________________________________________






// V. Objects
// A.

const user = {
	name: "Sam",
	email: "Sam314@themachine.org",
	age: 25,
	purchased: ["sandwich","black shirt","hair tie"]
}

// B.

user.email = "Meen314@themachineasset.org"
user.age++

console.log(user.age)
// C.

user.location = "NYC"

// D. Shopaholic!

user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")

console.log(user.purchased[5])

// E.

user.friend = {
	name: "Samantha",
	age: 25,
	location: "NYC",
	purchased: []
}

console.log(user)
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])
// F.

for(let i=0; i < user.purchased.length; i++){
	console.log(user.purchased[i]);
}

for(let i=0; i < user.friend.purchased.length; i++){
	console.log(user.friend.purchased[i]);
}

// G.

function updateUser (){
	user.age++;
	user.name.toUpperCase();
}

function oldAndLoud (person){
	person.age = person.age++;
	person.name = person.name.toUpperCase();
	}


//_____________________________________________________________


// Extra

