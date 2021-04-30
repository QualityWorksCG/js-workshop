const druid = {
    'age': 17,
    'armor':  'bronze armor',
    'killsOnBattlefield': 99,
}


function updateDruidAge(druid, age) {
    let newAge = age
    druid.age = newAge

    return druid
}

//updateDruidAge(druid, 15)
//console.log(druid)

function checkUpgradeEligibility(druid){
    if (druid.age >= 15 && druid.armor == 'bronze armor' ) {
        return true
    }
    else if (druid.age >= 20 && (druid.armor == 'silver armor' || druid.armor == 'silver armor maximum' )) {
        return true
    }
    else 
        return false

}

console.log(checkUpgradeEligibility(druid))
