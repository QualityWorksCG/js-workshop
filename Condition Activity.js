const druid = {
    'age': 2,
    'armor':  '',
    'killsOnBattlefield': 99,
}

if (druid.age <= 10) {
    druid.armor = 'bronze armor'
}
else if (druid.age >= 15) {
    druid.armor = 'silver armor'
}
if (druid.killsOnBattlefield > 90) {
    druid.armor = 'silver armor maximum'
}
if (druid.age >= 20) {
    druid.armor = 'titanium armor'
}

console.log(druid.armor)
