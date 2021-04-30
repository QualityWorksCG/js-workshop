var druid_1 = {
    age: 10,
    armor: '',
    killsOnBattleField: 70
}
var druid_2 = {
    age: 15,
    armor: '',
    killsOnBattleField: 35
}
var druid_3 = {
    age: 18,
    armor: '',
    killsOnBattleField: 101
}
var druid_4 = {
    age: 20,
    armor: '',
    killsOnBattleField: 54
}

druidArray = [ druid_1, druid_2, druid_3, druid_4 ]

console.log("Leader Board \n")

for (const item of druidArray){
    for (const key in item){
        const value = item[key]
        console.log(`${key} -> ${value}`)
    }
    console.log("\n")
}