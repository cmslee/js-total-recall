////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i += 2) {
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
wolfy[3] = "Gotham City"
dart.push = "Hawkins"
wolfy[0] = "Gameboy"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (const element of ninjaTurtles){
    console.log(element.toUpperCase())
} 

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])

//1.
favMovies.sort()
//2.
favMovies.pop()
//3.
favMovies.push("Guardians of the Galaxy")
//4.
favMovies.reverse()
//5.
favMovies.shift()
//6.
favMovies.unshift()
//7.
favMovies.splice(14, 1, "Avatar")
//8.-9.
const secondHalf = favMovies.slice(9,18)
console.log(secondHalf)
//10.
console.log(favMovies)
//11.
console.log(favMovies[13])
//12. No.
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


whereIsWaldo.splice(1,1)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

//1. create array of strings for what the kitty randomly says
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

//2. set variable for randomized talk
let meow = 0
//3. create for loop to set range and incrementation based on "log 'love me, pet me! HSSSSSS!' 20 times" in instructions
for (i=1; i<=20; i++){
    //4. nest "if...else" statement to apply randomized output to condition of even numbers using modulo operator
    if (i % 2 === 0) {
        //5. re-assign to variable an expression for drawing values at random: use math methods random (to randomize) and floor (to make sure randomized result is an integer) and multiply by 3 (to match 3 values in array)
        meow = Math.floor(Math.random()*3);
        //6. ???
        console.log(kittyTalk[meow])
    //7. use else to log kitty excitement otherwise
    } else {
        console.log("Love me, pet me! HSSSSSS!")
    }
} 

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.forEach(i => i++)

//step 1.access every item in array
function findMedium (arr){
    //step 2: add them to each other
    nums.forEach(i)
}
// const medianNum = Math.floor(numsOrder.length/2)
// console.log(medianNum)