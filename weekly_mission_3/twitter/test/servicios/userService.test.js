// JavaScript source code

const UserService = require('./../../app/servicios/userService')
describe("prueba para UserService", () => {
    test("1.Crear nuevo usuario usando la clase UserService", () => {
        const user = UserService.create(1, "nombreusuario", "nombre")
        expect(user.username).toBe("nombreusuario")
        expect(user.id).toBe(1)

    })

})