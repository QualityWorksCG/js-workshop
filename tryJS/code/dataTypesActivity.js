let arrOriginal = [1,2,3,4,5];
console.log('Original: ' + arrOriginal);

let arrReversed = [
    arrOriginal[4], 
    arrOriginal[3], 
    arrOriginal[2], 
    arrOriginal[1], 
    arrOriginal[0]
];
console.log('Reversed: ' + arrReversed);

let employee = {
    "fullName": "Chris Watts",
    "position": "HR",
    "age": "27",
    "gender": "male"
}

let empString = `${employee.fullName} is a ${employee.age} years old ${employee.gender} working in ${employee.position}.`;
console.log(empString);