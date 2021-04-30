let druidsArray = [
    {
        age: 1,
        armor: '',
        killsOnBattlefield: 900
    },
    {
        age: 20,
        armor: 'gold',
        killsOnBattlefield: 900
    },
    {
        age: 16,
        armor: 'silver',
        killsOnBattlefield: 900
    },
    {
        age: 12,
        armor: 'wood',
        killsOnBattlefield: 900
    },
]

for (druid of druidsArray) {
    for (item in druid) {
        console.log(`${item} : ${druid[item]}`)
    }
    console.log('-------------------------------')
}