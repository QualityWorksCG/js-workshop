let number = [1, 2, 3, 4, 5]
console.log(number)

let reversed = [...number].reverse()
console.log(reversed)
let employee = {
    FullName: 'Nyran Moodie',
    Position: 'Developer',
    Age: 44,
    Gender: 'make'
}
console.log(employee)

console.log(`
Employee Name : ${employee.FullName} \n
Position : ${employee.Position}\n
Age :  ${employee.Age} \n
Gender :  ${employee.Gender}`)
