druidArray = [druid1 = {
    'age': 11,
    'armor':  'bronze armor',
    'killsOnBattlefield': 99,
},druid2 = {
    'age': 12,
    'armor':  'bronze armor',
    'killsOnBattlefield': 90,
},
druid3 = {
    'age': 21,
    'armor':  'bronze armor',
    'killsOnBattlefield': 9,
}]

for (const druid of druidArray) {
    
    for (const key in druid) {
        if (Object.hasOwnProperty.call(druid, key)) {
            const element = druid[key];
            console.log(`${key} -> ${element}`)
        }
    }
}