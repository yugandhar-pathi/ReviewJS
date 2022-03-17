class Person {
    eat() {
        return "Open mouth"
    }
}

class Children extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedChildren() {
        console.log(super.eat())
        console.log(this.speed)
    }
}

class Adult extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedAdult() {
        console.log(super.eat())
        console.log(this.speed)
    }
}

class Old extends Person {
    constructor(speed) {
        super()
        this.speed = speed;
    }
    eatSpeedOld() {
        console.log(super.eat())
        console.log(this.speed)
    }
}

let children = new Children("eats slowly")
let adults = new Adult("eats very fast")
let old = new Old("eats fast")
children.eatSpeedChildren()
adults.eatSpeedAdult()
old.eatSpeedOld()