const druid = {
  'age': 21,
  'armour': '',
  'killsOnBattleField': 11
}

if (druid.age >= 10 && druid.age < 15) {
  druid.armour = 'bronze';
} else if (druid.age >= 15 && druid.age < 20) {
  if (druid.killsOnBattleField > 90) {
    druid.armour = 'silver maximum';
  } else {
    druid.armour = 'silver';
  }
} else if (druid.age >= 20) {
  druid.armour = 'titanium';
}

console.log(druid);
