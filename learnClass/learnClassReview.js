export class Animal {
    openMouth(animalName) {
        console.log(`${animalName} opens Mouth`)
    }
}

export class Cat extends Animal {
    constructor(catSound) {
        super()
        this.catSound = catSound;
    }
    makeSound() {
        super.openMouth("Cat")
        return this.catSound
    }
}

export class Dog extends Animal {
    constructor(dogSound) {
        super()
        this.dogSound = dogSound;
    }
    makeSound() {
        super.openMouth("Dog")
        return this.dogSound
    }
}
