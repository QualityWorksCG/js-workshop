const druid = {
    'age': 20,
    'armor': '',
    'killsOnBattleField': 90,
}

function updateDruidAge(druidObject, newAge) {
    druidObject.age = newAge;
    return druid;
}

let newDruidAge = updateDruidAge(druid, 19);

function checkUpgradeEligibility(druidObject) {
    if (druid.age === 0) {
        return false;
    } else if (druid.age === 10) {
        return true;
    } else if (druid.age >= 15 && druid.killsOnBattleField === 90) {
        return true;
    } else if (druid.age >= 10 && druid.age < 15) {
        return true;
    } else if (druid.age >= 20) {
        return true;
    }
};

let upgradeEligibility = checkUpgradeEligibility(druid);

if (upgradeEligibility) {
    console.log('You are approved for an upgrade!');
} else {
    console.log('You are not eligible for an upgrade at this time!');
}

let druidArray = [
    {
        'age': 9,
        'armor': '',
        'killsOnBattleField': 80,
        'name': 'John',
    },
    {
        'age': 10,
        'armor': '',
        'killsOnBattleField': 120,
        'name': 'Jace',
    },
    {
        'age': 20,
        'armor': '',
        'killsOnBattleField': 40,
        'name': 'Harry',
    }
];

let youngDruids = druidArray.filter((druidAge) => {
    if (druidAge.age < 15)
        return druidAge;
});

console.log(youngDruids);

let reduceAge = druidArray.map((druidAge) => {
    druidAge.age = druidAge.age - 1;
    return druidAge;
});

console.log(reduceAge);



for (const element of druidArray) {
    for (const key in element) {
        const values = element[key]
        console.log(`${element.killsOnBattleField} kills made by ${values}`);
    }
}
````