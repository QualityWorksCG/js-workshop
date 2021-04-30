let druids = [
    {
        "age": 5,
        "armor": "",
        "killsOnBattleField": 21
    },
    {
        "age": 15,
        "armor": "",
        "killsOnBattleField": 98
    },
    {
        "age": 15,
        "armor": "",
        "killsOnBattleField": 74
    },
    {
        "age": 20,
        "armor": "",
        "killsOnBattleField": 491
    }
];

for (let i = 0; i < druids.length; i++) {
    if (druids[i].age < 15) 
        druids[i].armor = "Bronze";
    else if (druids[i].age >= 15 && druids[i].age < 20)
        if (druids[i].killsOnBattleField > 90)
            druids[i].armor = "Silver Maximum";
        else
            druids[i].armor = "Silver ";
    else 
        druids[i].armor = "Titanium";
    
    console.log(druids[i]);
}

//Ran in https://jsconsole.com/

