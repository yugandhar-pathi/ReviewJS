import { Children, Adult, Old } from './reviewClass'

test("test animal eat speed", () => {
    let children = new Children("eats slowly")
    let adults = new Adult("eats very fast")
    let old = new Old("eats fast")
    expect(children.eatSpeedChildren()).toBe("eats slowly")
    expect(adults.eatSpeedAdult()).toBe("eats very fast")
    expect(old.eatSpeedOld()).toBe("eats fast")
})