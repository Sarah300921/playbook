// JavaScript source code
class logger {
    constructor(nombre) {
        this.cuenta = 0
        this.nombre = nombre
    }

    log(mensaje) {
        this.cuenta++
        console.log('[' + this.nombre + ']' + mensaje)
        
        console.log(this.cuenta)
    }
}
module.exports = new logger('DEFAULT')