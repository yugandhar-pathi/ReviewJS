class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age
    }

    getGrade() {
        if (this.age > 5) {
            return "school going kid"
        } else {
            return "kindergarden kid"
        }

    }
}

class Grade5Students extends Student {
    constructor(name, age, percentage) {
        super(name, age)
        this.percentage = percentage;
    }

    getPercentage() {
        return this.percentage;
    }

    getGrade() {
        console.log(super.getGrade());
        return 5;
    }
}

let resh = new Student("resh", 6)
let skan = new Student("Skandhana", 1)
let jahn = new Grade5Students("jahn", 12, 80)
console.log(jahn.getGrade())
console.log(resh.getGrade())
console.log(skan.getGrade())

class Animal {
    // constructor(sound) {
    //     this.sound = sound;
    // }
    openMouth(animalName) {
        console.log(`${animalName} opens Mouth`)
    }
}

class Cat extends Animal {
    constructor(catSound) {
        super()
        this.catSound = catSound;
    }
    makeSound() {
        super.openMouth("Cat")
        console.log(this.catSound)
    }
}

class Dog extends Animal {
    constructor(dogSound) {
        super()
        this.dogSound = dogSound;
    }
    makeSound() {
        super.openMouth("Dog")
        console.log(this.dogSound)
    }
}
//let animal = new Animal("Makes sound")
let cat = new Cat("Meow meow")
cat.makeSound()
let dog = new Dog("Bow bow")
dog.makeSound()
// console.log(cat.doSound())
// console.log(cat.makeSound())
// console.log(dog.makeSound())