const druid = {
    age: 58.9,
    armor: '',
    killsOnBattlefield: 900
}

if (druid.age >= 10 && druid.age <= 14) {
    druid.armor = 'bronze armor'
}
if (druid.age >= 15 && druid.age < 20) {
    if (druid.killsOnBattlefield >= 90) {
        druid.armor = 'silver armor maximum'
    } else {
        druid.armor = 'silver armor'
    }
}
if (druid.age >= 20) {
    druid.armor = 'titanium armor'
}
druid.new = 888
console.log(druid)