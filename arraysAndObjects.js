/**
 * Activity 1
 */

// Create an array
const myFirstArray = [1, 2, 3, 4, 5];
const myReverseArray = [myFirstArray[4], myFirstArray[3], myFirstArray[2], myFirstArray[1], myFirstArray[0]]

// Create an object
const employee = {
    "full_name": "Yanique Dickson",
    "position": "Associate Consultant",
    "age": 29,
    "gender": "female"
}

console.log(`${employee.full_name} is a ${employee.age} year old ${employee.gender} who is an ${employee["position"]} at QualityWorks.`)
