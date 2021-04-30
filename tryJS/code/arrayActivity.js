let druids = [
    {
        "age": 5,
        "armor": "Bronze",
        "killsOnBattleField": 21
    },
    {
        "age": 9,
        "armor": "Bronze",
        "killsOnBattleField": 42
    },
    {
        "age": 14,
        "armor": "Bronze",
        "killsOnBattleField": 79
    },
    {
        "age": 15,
        "armor": "Silver Maximum",
        "killsOnBattleField": 98
    },
    {
        "age": 15,
        "armor": "Silver",
        "killsOnBattleField": 74
    },
    {
        "age": 20,
        "armor": "Titanium",
        "killsOnBattleField": 491
    }
];

function filterDruidsUnder15(druid) {
    return druid.age < 15;
}

let under15Druids = druids.filter(filterDruidsUnder15);
console.log(under15Druids);

function alterDruidsAge(druid) {
    let newDruid = druid;
    newDruid.age--;
    return newDruid;
}

let druidsList = druids.map(alterDruidsAge);
console.log(druidsList);
