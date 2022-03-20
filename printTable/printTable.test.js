import { printTable } from "./printTable";

test("print table 2", () => {
    expect(printTable(2)).toMatchSnapshot()
    expect(printTable(3)).toMatchSnapshot()
})