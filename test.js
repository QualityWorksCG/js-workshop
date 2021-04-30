console.log('the below comment is a single line and will be skipped')
// this is a single line comment that will be skipped when the code is executed

console.log('the below is a comment is a multiline and also skipped');

/**
 * this is a multi-line string
 * that will also be skipped
 * when the code is executing
 */

let variable = 1;

const variable = 2

/**
 * varaibles declared using the let keyword
 * can be reassigned a new value
 */

variable = 100

/**
 * this would cause an error because
 * you are not able to reassign data to
 * a variable that is declared as a const
 */

variable2 = 140

let my_variable = 1

let my_other_variable = 1.2

const pi = 3.142
const diameter = 23
const circumfrence = pi * diameter
console.log(circumfrence)

const totalPrice = 243.45 + 4353.23
console.log(totalPrice)

let my_string_variable = 'hello world I am in single quotes'

let my_other_string_variable = "hey there world I am in double quotes"

const my_const_variable = 'Monday'

let first_half = 'Hello'
let second_half = ' World'

//strng concatenation
let whole_word = first_half + second_half
console.log(whole_word)

let first_name = 'Graham'
let last_name = 'Norton'
let product_1 = 5
let product_2 = 10

//strong concatenation
display_total = `The total for ${first_name} ${last_name} s ${product_1 + product_2}`
console.log(display_total)

let formatted_name = `${first_name[0]}. ${last_name}`
console.log(formatted_name)

// Arrays
let my_array = [1,2,3]

//get first value from array
const first_value = my_array[0]

//get second value from array
const second_value = my_array[1]

//get third value from array
const third_value = my_array[2]

const myOtherArray = [[1,2,3],4,5,6]

console.log(myOtherArray[0][0])
console.log(myOtherArray[0][1])
console.log(myOtherArray[0][2])
console.log(myOtherArray[1])

const student = {
  'first_name': 'Rudolph',
  'last_name': 'Red',
  'age': 9,
  'number_of_legs': 4,
  'has_red_nose': true
}

console.log(student.first_name)

console.log(student['first_name'])

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

//If statement syntax

let currentNumberOfPatients = 100
const maxNumberOfPatients = 120

if(currentNumberOfPatients < maxNumberOfPatients) {
  console.log(`Hello! The Hospital is still able to accommodate ${maxNumberOfPatients - currentNumberOfPatients}`)
} else {
  console.log('The Hospital is at max capacity')
}

if(currentNumberOfPatients < maxNumberOfPatients) {
  console.log(`Hello! The Hospital is still able to accommodate ${maxNumberOfPatients - currentNumberOfPatients}`)
} else if(currentNumberOfPatients === maxNumberOfPatients - 1) {
  console.log('The Hospital is able to accomodate one (1) more patient')
} else {
  console.log('The Hospital is at max capacity')
}

//Druids
const druid = {
  age: 10,
  armor: 'bronze armor',
  killsOnBattleField: 12
}

const druid = {
  age: 13,
  armor: 'bronze armor',
  killsOnBattleField: 40
}

const druid = {
  age: 17,
  armor: 'silver armor',
  killsOnBattleField: 25
}

function myFunction() {
  const number1 = 10
  const number2 = 20
  const total = number1 * number2
  console.log(total)  
}

function myOtherFunction(param1, param2) {
  const total = param1 * param2
  console.log(total)
}

function getTotal() {
  let productCost  =10
  let quantity = 20
  return productCost * quantity
}

const total = getTotal()
console.log(total);

function getTotal() {
  let productCost  =10
  let quantity = 20
  return productCost * quantity

  const discountAmount = total * 0.25
  total -= discountAmount
  console.log(`new total is ${total}`)
}

let globalvariable = 'global variable'

console.log(globalvariable)

function demo() {
  const localVariable = 'local variable'
  console.log(localVariable)
  console.log(globalVariable)
}

demo()

console.log(localVariable)

/**
 * Built in Objects 
 */

/**
 * 1. The String Object
 */
 const stringObject = new String('I am a string')

 /**
  * String Object - Properties
  */
 const stringObject = new String('My favorite food is fried chicken')
 
 const replacedValue = stringObject.replace('fried chicken', 'tomato paste')
 console.log(replacedValue)
 // output: My favorite food is tomato paste
 
 const otherStringObject = new String('Hello World'); 
 const world = otherStringObject.substring(6, 11); 
 console.log(world)
 // output: World
 
 /**
  * String Primitive - Properties
  */
 const myString = new String('My favorite food is fried chicken')
 
 const replacedValue = myString.replace('fried chicken', 'tomato paste')
 console.log(replacedValue)
 // output: My favorite food is tomato paste
 
 const myOtherString = new String('Hello World'); 
 const world = myOtherString.substring(6, 11); 
 console.log(world)
 // output: World
 
 /**
  * String Function: Non-string primitive to string primitive
  */
 const nonStringVal = 10;
 console.log(nonStringVal)
 // output: 10
 
 const stringVal = String(nonStringVal);
 console.log(stringVal)
 
 
 
 /**
  * 2. The Number Object - methods
  */
 const stringyNumber = '10.04';
 
 const plainNumber = Number(stringyNumber);
 console.log(plainNumber);
 // output: 10.04
 
 const numberObject = new Number(stringyNumber);
 const fixed = numberObject.toFixed();
 console.log(fixed);
 // output: 10
 
 const exponent = numberObject.toExponential();
 console.log(exponent);
 // output: 1.004e+1
 
 
 
 /**
  * 3. The Array Object
  */
 const arr = new Array(1, 2, 3, 4, 5, 6)
 console.log(arr)
 // output: [1, 2, 3, 4, 5, 6]
 
 /**
  * Comman Array Methods - forEach
  */
 const myArray = [1, 2, 3];
 
 function performForEachTask(value) {
     console.log(`I am the value: ${value}`)
 }
 
 // Pass function as a callback to forEach
 myArray.forEach(performForEachTask)
 // output: I am the value: 1
 // output: I am the value: 2
 // output: I am the value: 3
 
 // Inline callback function
 myArray.forEach(function performForEachTask(value) {
     console.log(`I am the value: ${value}`)
 })
 // output: I am the value: 1
 // output: I am the value: 2
 // output: I am the value: 3
 
 
 /**
  * Comman Array Methods - filter
  */
 const myArray1 = ['Hello from QW', 'Hello from another land', 'QW says hello']
 
 function filterByWordsWithQW(value) {
     return value.includes('QW')
 }
 
 // Pass function as callback to filter function 
 const filterredList = myArray1.filter(filterByWordsWithQW)
 console.log(filterredList)
 // output: ['hello from QW','QW says hello']
 
 
 /**
  * Comman Array Methods - map
  */
 
 const myArray2 = ['Hello from QW', 'Hello from another land', 'QW says hello']
 
 function mapByWordsWithQW(value) {
     let newValue = value
     if(value.includes('QW')) {
         newValue = value.replace('QW', 'QualityWoks')
     }
     return newValue
 }
 
 // Pass function as a callback to map function
 const mappedList = myArray2.map(mapByWordsWithQW)
 console.log(mappedList)
 // output: ['Hello from QualityWoks', 'Hello from another land', 'QualityWoks says hello']
 
 
 
 /**
  * For Loops
  */
 
 /**
  * 1. Traditional for loops
  */
 let array = [1, 2, 3, 4, 5]
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     console.log(`I am the element: ${element}`)
 }
 // output: I am the element: 1
 // output: I am the element: 2
 // output: I am the element: 3
 // output: I am the element: 4
 // output: I am the element: 5
 
 /**
  * 2. The for of loop
  */
  let array1 = [1, 2, 3, 4, 5]
  for (const element_ of array1) {
     console.log(`I am the element: ${element_}`)
  }
 // output: I am the element: 1
 // output: I am the element: 2
 // output: I am the element: 3
 // output: I am the element: 4
 // output: I am the element: 5
 
 /**
  * 3. The for in loop
  */
  const student = {
     'Full Name': 'Bob The Builder',
     'class': 'Javascript Workshop',
     'age': 10,
     'Questions Commonly Asked': 'Can we fix it?',
     'Common Responses': 'Yes we can!'
  }
 
 for (const key of student) {
     if (Object.hasOwnProperty.call(student, key)) {
         const element__ = student[key];
         console.log(`${key} -> ${element__}`)
     }
 }
  // output: Full Name -> Bob The Builder
  // output: class -> Javascript Workshop
  // output: age -> 10
  // output: Questions Commonly Asked -> Can we fix it?
  // output: Common Responses -> Yes we can!
 


// promises
//callback hell example
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);


// resolving promises with .then
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})

function doSomethingThatReturnsPromise() {
  return new Promise((resolve, reject) => {
    resolve('I promise you')
  })
}

const prom = new Promise((resolve, reject) => {
  resolve('I promise you')
})

async function doSomething() {
  return new Promise((resolve, reject) => {
    resolve('Do something')
  })
}


async function doSomethingElse(param) {
  return new Promise((resolve, reject) => {
    resolve('Do something else')
  })
}


async function doThirdThing(param) {
  return new Promise((resolve, reject) => {
    resolve('Do third thing')
  })
}

async function doAllTheThings() {
  const val = await doSomething()
  const otherVal = await doSomethingElse(val)
  await doThirdThing(otherVal)
}


