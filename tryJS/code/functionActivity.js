let druid = {
    "age": 5,
    "armor": "Bronze",
    "killsOnBattleField": 21
}

function updateDruidAge(myDruid, age) {
    myDruid.age = age;
    return myDruid;
}

function checkUpgradeEligibility(myDruid) {
    if (myDruid.age < 15 && myDruid.armor != "Bronze") 
        return true
    else if (myDruid.age >= 15 && myDruid.age < 20)
        if (myDruid.killsOnBattleField > 90 && myDruid.armor != "Silver Maximum")
            return true;
        else if (myDruid.armor != "Silver")
            return true;
    else if (myDruid.armor != "Titanium")
        return true;

    return false;
}

function upgradeDruidArmor(myDruid) {
    if (myDruid.age < 15) 
        myDruid.armor = "Bronze";
    else if (myDruid.age >= 15 && myDruid.age < 20)
        if (myDruid.killsOnBattleField > 90)
            myDruid.armor = "Silver Maximum";
        else
            myDruid.armor = "Silver ";
    else 
        myDruid.armor = "Titanium";

    return myDruid;
}

function displayDruid (myDruid) {
    return 'Age: ' + myDruid.age + "\nArmor: " + myDruid.armor + "\nKills: " + myDruid.killsOnBattleField;
}

let updatedDruid = updateDruidAge(druid, 15);
displayDruid(updatedDruid);

let isEligible = checkUpgradeEligibility(updatedDruid);
if (isEligible)
    updatedDruid = upgradeDruidArmor(updatedDruid);

displayDruid(updatedDruid);