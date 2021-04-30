druidArray = [druid1 = {
    'age': 11,
    'armor':  'bronze armor',
    'killsOnBattlefield': 99,
},druid2 = {
    'age': 12,
    'armor':  'bronze armor',
    'killsOnBattlefield': 99,
},
druid3 = {
    'age': 21,
    'armor':  'bronze armor',
    'killsOnBattlefield': 99,
}]

function filterByAge(druid) {
    young = []
    if (druid.age < 15) {
        young.push(druid)
    }
    console.log(young) 
}

druidArray.forEach(filterByAge)


function mapByAge(druid) {
    druid.age = druid.age - 1
    return druid.age
    
}

const mappedList = druidArray.map(mapByAge)
console.log(mappedList)













