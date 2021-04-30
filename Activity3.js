let youngDruid = {
  'age': 10,
  'armour': 'silver',
  'killsOnBattleField': 98
}

let archonDruid = {
  'age': 22,
  'armour': 'silver plus',
  'killsOnBattleField': 902
}

function updateDruidAge(druid, newAge) {
  druid.age = newAge;
  return druid;
}

function checkUpgradeEligibility(druid) {
  if (druid.age >= 10 && druid.age < 15 && druid.armour == null) {
    return true;
  } else if (druid.age >= 15 && druid.age < 20) {
    if (druid.killsOnBattleField > 90 && druid.armour != 'silver maximum') {
      return true;
    } else if (druid.armour != 'silver') {
      return true;
    }
  } else if (druid.age >= 20 && druid.armour != 'titanium') {
    return true;
  }
  
  return false;
}

let eligible = checkUpgradeEligibility(youngDruid);
console.log(eligible);

eligible = checkUpgradeEligibility(archonDruid);
console.log(eligible);

youngDruid = updateDruidAge(youngDruid, 13);
console.log(youngDruid);

archonDruid = updateDruidAge(archonDruid, 26);
console.log(archonDruid);
