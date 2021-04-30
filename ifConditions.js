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
    'age': 9,
    'armor': 'bronze armor',
    'killsOnBattleField': 36
}

if (druid.age == 10) {
    console.log (`You have received the ${druid.armor}`)
}
else if (druid.age == 15) {
    console.log (`You have received the ${druid.armor}`)
}
else if (druid.age == 20) {
    console.log (`You have received the ${druid.armor}`)
}
else if (druid.killsOnBattleField > 90) {
    console.log (`You have received the ${druid.armor}`)
}
else {
    console.log ('You do not qualify for a new armor')
}
