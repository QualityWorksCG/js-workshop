// #region DATA TYPES ACTIVITY
const company = "QualityWorks"

let arrayAsc = [1, 2, 3, 4, 5]
let arrayDes = [...arrayAsc].reverse()

console.log(`\nAssending Array: ${arrayAsc} \nDecending Array: ${arrayDes}\n`)

QWemp = {
    "fullName": "Orane Findley",
    "position": "Lead Quality Assurance Consultant",
    "age": 27,
    "gender": "male"
}

console.log(`Hey i'm ${QWemp.fullName} a ${QWemp.position} from ${company}, I enjoy car racing... other than that i'm just another ${QWemp.age} year old ${QWemp.gender}.\n`)
//#endregion

//#region CONDITION ACTIVITY
const druid = {
    "age": 15,
    "armor": "",
    "killsOnBattleField": 2000
}

if (druid.age < 10) {
    console.log("Druids can NOT be younger than 10 years old")
    return
} else if (druid.age >= 10 && druid.age < 15) {
    druid.armor = "bronze armor"
} else if (druid.age >= 15 && druid.age < 20 && druid.killsOnBattleField <= 90) {
    druid.armor = "silver armor"
} else if (druid.age >= 15 && druid.age < 20 && druid.killsOnBattleField > 90) {
    druid.armor = "silver armor maximum"
} else if (druid.age >= 20) {
    druid.armor = "titanium armor"
}

console.log(`This Druid is ${druid.age} years old with ${druid.killsOnBattleField} kills so they are given a ${druid.armor}.`)

// Question, why does this work?
druid.name = "Stunna"
console.log(druid)
//#endregion

//#region FUNCTION
function updateDruidAge(druid, age) {
    druid.age = age
    return druid
}

function checkUpradeEligibility(druid) {

    if (druid.age < 10) {
        console.log("Druids can NOT be younger than 10 years old")
        return false
    } else if (druid.age >= 10 && druid.age < 15 && druid.armor != "bronze armor") {
        return true
    } else if (druid.age >= 15 && druid.age < 20 && druid.killsOnBattleField <= 90 && druid.armor != "silver armor") {
        return true
    } else if (druid.age >= 15 && druid.age < 20 && druid.killsOnBattleField > 90 && druid.armor != "silver armor maximum") {
        return true
    } else if (druid.age >= 20 && druid.armor != "titanium armor") {
        return true
    }
    return false
}

console.log(updateDruidAge(druid, 15))
console.log(checkUpradeEligibility(druid))
//#endregion

let druids = [{ "age": 15, "armor": "", "killsOnBattleField": 2000 }, { "age": 12, "armor": "", "killsOnBattleField": 2000 }, { "age": 26, "armor": "", "killsOnBattleField": 2000 }]

function filterByAge(druids) {
    if (druids.age < 15) {
        newDruids = druids
    }
    return newDruids
}

function reduceAge(druids) {
    return druids.age -= 1
}

const reducedDruids = druids.map(reduceAge)
//console.log(reducedDruids)

const includedDruids = druids.map(filterByAge)
console.log(includedDruids)

for (const ele of druids) {
    for (const key in ele) {
        const element = ele[key]
        console.log(`${key} -> ${element}`)
    }
}