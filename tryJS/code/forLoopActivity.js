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

for (const druid of druids) {
    for (const key in druid) {
        const element = druid[key];
        console.log(`${key} -> ${element}`);
    }
}