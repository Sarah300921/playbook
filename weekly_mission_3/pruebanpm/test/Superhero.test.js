// JavaScript source code
const User = require("./../app/Superhero")

describe("Unit Test for Superhero", () => {
    test('Case 1: Get a superhero', () => {

        const ironman = new User(1, "Robert Downey Jr.", "Tony Stark")

        expect(ironman.id).toBe(1)
        expect(ironman.username).toBe("Robert Downey Jr.")
        expect(ironman.name).toBe("Tony Stark")
    });
})