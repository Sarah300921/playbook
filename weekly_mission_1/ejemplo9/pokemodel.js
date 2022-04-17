// JavaScript source code
class Pokemon{
    constructor(nombre,id,tipo){
        this.nombre = nombre
        this.id = id
        this.tipo = tipo
    }
    sayHello(){
        console.log(`${this.nombre} te saluda!`)
        console.log(`${this.nombre} tiene id:${this.id} y es de tipo ${this.tipo}`)
    }

    sayMsg(msg){
        console.log(`${this.nombre} dice ${msg}`   )
    }
}

module.exports = Pokemon
