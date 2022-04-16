// JavaScript source code
//Creacion de un objeto con propiedades
let miCoche = new Object();
miCoche.marca = "Vocho"
miCoche.modelo = "Pollo"
miCoche.anio = "1975"
console.log(miCoche)

//declaracion de variables


const exported = " ";

const miModulo = (() => {
    const privateUno = "variable privada"
    const privateDos = "otra variable privada"
    const baz = "esta no es privada"

    const exported = {
        publicUno: "variable publica",
        publicDos: "otra variable publica",
        publiclaquesea: baz

    }
    return exported
})()
  
console.log(exported)
console.log(miModulo.publicDos)
console.log(miModulo.privateDos)
console.log(miModulo.baz)
console.log(miModulo.publiclaquesea)
