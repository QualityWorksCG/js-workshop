const druidArray = [
  {
    'name': 'John',
    'age': 10,
    'armour': 'silver',
    'killsOnBattleField': 98
  },

  {
    'name': 'Jayson',
    'age': 15,
    'armour': '',
    'killsOnBattleField': 11
  },

  {
    'name': 'Jerome',
    'age': 21,
    'armour': '',
    'killsOnBattleField': 21
  },

  {
    'name': 'Jane',
    'age': 32,
    'armour': 'silver plus',
    'killsOnBattleField': 902
  }
]

// NEED TO SORT THE ARRAY LATER

for (const element of druidArray) {
  for (const key in element) {
    if (Object.hasOwnProperty.call(element, key)) {
      const druid = element[key];
      console.log(`${key}: ${druid}`);
    }
  }
  console.log('');
}