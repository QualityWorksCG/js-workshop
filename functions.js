// const druid = {
//     'age': 10,
//     'armor': 'bronze armor',
//     'killsOnBattleField': 36
// }

// const druid = {
//     'age': 13,
//     'armor': 'silver maximum armor',
//     'killsOnBattleField': 92
// }

// const druid = {
//     'age': 15,
//     'armor': 'silver armor',
//     'killsOnBattleField': 78
// }

// const druid = {
//     'age': 20,
//     'armor': 'titanium armor',
//     'killsOnBattleField': 156
// }

const druid = {
    'age': 10,
    'armor': 'bronze armor',
    'killsOnBattleField': 36
}

function updateDruidAge (druidObject, newAge) {
    druidObject['age'] = newAge;
    return druidObject;
}

const updatedDruid = updateDruidAge(druid, 17)
console.log (updatedDruid)

function checkUpgradeDruid (druidObject) {
    if (druidObject['age'] === 10 && druidObject['armor'] !== 'bronze armor') {
        return true
    }
    else if (druidObject['age'] === 15 && druidObject['armor'] !== 'silver armor') {
        return true
    }
    else if (druidObject['age'] === 20 && druidObject['armor'] !== 'titanium armor') {
        return true
    }
    else if (druidObject['killsOnBattleField'] > 90 && druidObject['armor'] !== 'silver maximum armor') {
        return true
    }
    else {
        return false
    }
}

const isEligible = checkUpgradeDruid (druid);
console.log (isEligible)
