// JavaScript source code
console.log("Objetos")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vac�o
console.log("Ejemplo 1: Crear un objeto vac�o")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
    name: "Carlo",
    age: 27
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
        "Tulipan",
        "Tulancingo",
        "Tulish"
    ],
    address: {
        zip_code: "10000",
        street: "Dr. Vertiz 11 Benito Juarez",
        city: "CDMX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])
console.log(myObject3.nicknames[0])
console.log(myObject3.address.street)

// Ejemplo 4: Objeto con m�todos
const pet = {
    name: "Tulio",
    // Esta es una funci�n que se guarda como propiedad
    sayHello: function () {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en espa�ol!`)
    }
}

console.log("Ejemplo 4: Objeto con m�todos")
pet.sayHello()

// Ejemplo 5: Objeto con m�todo que recibe par�metros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function (yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con m�todo que recibe par�metros")
myPet.sayHelloToMyPet("Tulio")