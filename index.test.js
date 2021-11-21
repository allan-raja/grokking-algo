const testJest = require("./index");

test('1. Test Jest if working', () => {
    expect(testJest("Allan")).toBe("jest test result is Allan");
});