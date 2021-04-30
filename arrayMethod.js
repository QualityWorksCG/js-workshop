const druid0 = {
    'age': 3,
    'armor': 'bronze armor',
    'killsOnBattleField': 36
}

const druid1 = {
    'age': 10,
    'armor': 'bronze armor',
    'killsOnBattleField': 36
}

const druid2 = {
    'age': 13,
    'armor': 'silver maximum armor',
    'killsOnBattleField': 92
}

const druid3 = {
    'age': 15,
    'armor': 'silver armor',
    'killsOnBattleField': 78
}

const druid4 = {
    'age': 20,
    'armor': 'titanium armor',
    'killsOnBattleField': 156
}

const druid5 = {
    'age': 7,
    'armor': 'bronze armor',
    'killsOnBattleField': 39
}

const myDruidArr = [druid0, druid1, druid2, druid3, druid4, druid5]

function filterByAge (value) {
    if(value.age < 10) {
        return value 
    }  
}

const filteredDruid = myDruidArr.filter(filterByAge)
console.log(filteredDruid)

function minusAge (value) {
    value.age = value.age - 1
    return value
}

const reducedAgeDruid = myDruidArr.map(minusAge)
console.log(reducedAgeDruid)

for (const druid of myDruidArr) {
    for (const key in druid) {
        const value = druid[key]
        const druidString = `${key} -> ${value}`
        console.log (`My druid details are: ${druidString}`)
    }
}
