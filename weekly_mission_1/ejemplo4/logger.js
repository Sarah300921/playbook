// JavaScript source code
class logger {
    constructor(nombre) {
        this.nombre = nombre
    }
    info(mensaje) {
        console.log(`[objeto con nombre:${this.nombre}]info:${mensaje}`)
    }
    verbose(mensaje) {
        console.log(`[objeto con nombre:${this.nombre}]info:${mensaje}`)
    }
}
module.exports=logger
