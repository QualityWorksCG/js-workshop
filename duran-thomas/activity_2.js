var druid = {
    'age': 20,
    'armor': '',
    'killsOnBattleField': 89
}

if(druid.age === 10){
    druid.armor = 'Bronze Armor'
}else if(druid.age === 15){
    druid.armor = 'Silver Armor'
}
if(druid.age === 15 && druid.killsOnBattleField > 90){
    druid.armor = 'Silver Armor Maximum'
}else if(druid.age === 20){
    druid.armor = 'Titanium Armor'
}

console.log(druid)
