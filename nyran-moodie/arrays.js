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

let youngDruids = druidsArray.filter((item) => {
    if (item.age < 15)
        return item
})
console.log(youngDruids)

let subtractAge = druidsArray.map((item) => {
    return { age: item.age - 1, ...item }
})
console.log(subtractAge)