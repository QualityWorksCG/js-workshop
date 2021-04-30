
const druid = {
    age: 20,
    armor: '',
    killsOnBattlefield: 900
}

// function updateDruidAge(druidObject, newAge) {
//     druidObject.age = newAge
//     return druidObject
// }

// let newDruid = updateDruidAge(druid, 12)
// console.log(newDruid)

function checkUpgradeEligibility(druidObject) {
    if (druidObject.armor === '' || druidObject.age < 10)
        return false

    if (druidObject.age >= 10 && druidObject.age <= 14) {
        return true
    }

    if (druidObject.age >= 15 && druidObject.age < 20) {
        if (druidObject.killsOnBattlefield >= 90) {
            return true
        } else {
            return true
        }
    }
    if (druidObject.age >= 20) {
        return true
    }
}

let canReceiveArmor = checkUpgradeEligibility(druid)
console.log(canReceiveArmor)