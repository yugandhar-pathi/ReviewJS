import { Cat, Dog } from './learnClassReview'

test("test animal sound", () => {
    let cat = new Cat("Meow meow")
    let dog = new Dog("Bow bow")
    expect(cat.makeSound()).toBe("Meow meow")
    expect(dog.makeSound()).toBe("Bow bow")
})