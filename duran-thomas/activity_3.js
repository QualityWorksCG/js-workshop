var druid = {
    age: 19,
    armor: '',
    killsOnBattleField: 90
}

function updateDriudAge(druidParam, ageParam){
    druidParam.age = ageParam
    console.log(druidParam)
}
updateDriudAge(druid, 30)

function checkUpgradeEligibility(druidParam){
    if(druidParam.age === 10){
        return true
    }else if(druidParam.age === 15){
        return true
    }
    if(druidParam.age === 15 && druidParam.killsOnBattleField > 90){
        return true
    }else if(druidParam.age === 20){
        return true
    }else{
        return false
    }
}

var result = checkUpgradeEligibility(druid)
console.log(result)