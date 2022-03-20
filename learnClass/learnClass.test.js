import { Student, Grade5Students } from './learnClass'

test("test class", () => {
    let resh = new Student("resh", 6)
    let skan = new Student("Skandhana", 1)
    let jahn = new Grade5Students("jahn", 12, 80)

    expect(jahn.getGrade()).toEqual(5)
    expect(resh.getGrade()).toEqual("school going kid")
    expect(skan.getGrade()).toEqual("kindergarden kid")
})