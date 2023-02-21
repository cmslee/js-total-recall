// Hamster

/*
class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }
*/

// const hamster1 = new Hamster("carl") 
// hamster1.wheelRun()



// Person

/*
class Person {
  constructor(name) {
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getWeight() {
    return this.weight
  }

  greet() {
    console.log(`Hello! I am ${this.name}.`)
  }

  eat() {
    this.weight++;
    this.mood++
  }

  exercise() {
    this.weight--
  }

  ageUp() {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster)
    this.mood += 10
    this.bankAccount -= hamster.getPrice()
  }
}

//1.
const person1 = new Person("Timmy")
//2.
for(i=1; i<=5; i++){
  person1.ageUp()
}
//3.
for(i=0; i<5; i++){
  person1.eat()
}
//4.
for(i=0; i<5; i++){
  person1.exercise()
}
//5.
for(i=0; i<9; i++){
  person1.ageUp()
}
//6. Create a hamster named "Gus"
const hamster2 = new Hamster("Gus")
//7. set Gus's ownder to the string "Timmy"
hamster2.owner = "Timmy"
//8. Have Timmy "buy" Gus
person1.buyHamster(hamster2)
//9. Age Timmy 15 years
for(i=0; i<15; i++){
  person1.ageUp()
}
//10. Have Timmy eat twice
person1.eat()
person1.eat()
//11. Have Timmy exercise twice
for(i=0; i<2;i++){
  person1.exercise()
}
*/

// console.log(hamster2)
// console.log(person1)

//***Chef Makes Dinners ***//

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer,
    this.entree = entree,
    this.dessert = dessert
  }
}


class Chef {
  constructor(name) {
    this.name = name;
    this.skillLevel = 0
    this.dinners = []
  }

  createDinner(dinner) {
    this.dinners.push(dinner)
    this.skillLevel++

  }
}

const heartyOption = new Dinner('caesar salad', 'chicken parmigiana', 'belgium brownie')
const liteOption = new Dinner('potato and leak soup', 'roasted salmon', 'rhubarb crumble')
const kidsOption = new Dinner('baked potato', 'mac and cheese', 'ice cream sundae')

const harry = new Chef("Harold")


harry.createDinner(heartyOption)
harry.createDinner(liteOption)
harry.createDinner(kidsOption)

console.log(harry)

for(item of harry.dinners){
  console.log(item)
}