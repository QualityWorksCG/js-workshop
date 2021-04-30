let druidArray = [
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

function filterLessThanFifteen(druid) {
	return result = druid.age < 15 ? true : false;
}

const filteredList = druidArray.filter(filterLessThanFifteen);
console.log(filteredList);

function minusAge(druid) {
	druid.age -= 1;
	return druid;
}

const moddedDruids = druidArray.map(minusAge);
console.log(moddedDruids);