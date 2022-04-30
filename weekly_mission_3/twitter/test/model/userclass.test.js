// JavaScript source code
const User = require('./../../app/model/userclass');

describe("prueba de unidad para clase User", () => {

    /* test('1) Create empty object', () => {
        const user = new User()
        expect(user.id).toBeUndefined()
        expect(user.username).toBeUndefined()
        expect(user.name).toBeUndefined()
        expect(user.bio).toBeUndefined()
        expect(user.dateCreated).toBeUndefined()
        expect(user.lastUpdated).toBeUndefined()
    })*/

    test('2) Create an User object', () => {
  const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
    });
    
    test('3) Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('4) Add setters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")
       
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })

}) 