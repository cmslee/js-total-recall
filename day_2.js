////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    // console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i += 2) {
    // console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        // console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        // console.log("Buzz");
    } else if (i % 3 === 0) {
        // console.log("Fizz");
    } else {
        // console.log(i)
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
    // console.log(element.toUpperCase())
} 

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8])

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
// console.log(secondHalf)
//10.
// console.log(favMovies)
//11.
// console.log(favMovies[13])
//12. No.
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


whereIsWaldo.splice(1,1)
whereIsWaldo[1][2] = "No One"
// console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

for(j=1; j<=20; j++){
    // console.log(j + "Love me, pet me! HSSSSSS!")
}

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
        // console.log(kittyTalk[meow])
    //7. use else to log kitty excitement otherwise
    } else {
        // console.log("Love me, pet me! HSSSSSS!")
    }
} 

////////////////////////////////
//  Find the Median
////////////////////////////////

//

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort(); // to put in order of smallest to largest
console.log(nums) // check to make sure it worked
medianIndex = Math.floor(0 + nums.length /2) // to figure out the position
console.log(medianIndex); // to check the indexed position of the median
console.log(nums[12]) // console log the index position to find the number

//1. declare a function with variable named after what we are trying to find, in this case "median". set parameter as keyword "arr" so that function is not hard-coded to a particular array. **note to self**from now on, don't think of the array "nums", but any array.**end note**
function median(arr){
    //2. sort the array, so that it is in ascending order
    arr.sort();
    //3. write a variable and set it to calculate the middle index by dividing the length of the array by 2
    const middleIndex = arr.length/2;
    //4. now, since there are conditions for calculating median (depending on middleIndex being odd or even), write some if conditions to account for both situations
    //4a. in the case that array length (here arr.length) is odd, that means there will be a number in the middle (i.e. with equal number of numbers to the left and to the right). 
    if(arr.length % 2 === 1)
        //4ab. therefore, all you need to call is the array value positioned at the middleIndex
        return arr[Math.floor(middleIndex)]
    //4b. however, if the array length (here arr.length) is even, that means there will be two numbers occuping the middle position in the list. the median in that case is the average of the two values positioned there.
    if(arr.length % 2 === 0)
        return (arr[middleIndex -1] + arr[middleIndex]/2)
}

console.log(median(nums))


//more accurately, bc median in even number list is average of two numbers in the middle.