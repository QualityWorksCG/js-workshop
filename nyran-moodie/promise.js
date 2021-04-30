function killSomeone(isDead) {
    if (isDead) {
        return Promise.resolve('Wanted')
    }
    else {
        Promise.reject('Free')
    }


}

let police = killSomeone().then()