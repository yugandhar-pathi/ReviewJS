class Person {
    eat() {
        return "Open mouth"
    }
}

export class Children extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedChildren() {
        console.log(super.eat())
        return this.speed
    }
}

export class Adult extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedAdult() {
        console.log(super.eat())
        return this.speed
    }
}

export class Old extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedOld() {
        console.log(super.eat())
        return this.speed
    }
}

