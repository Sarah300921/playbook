// JavaScript source code
import Viajero from './viajeros.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante m�dulos.
*/

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // M�todo de la clase padre
console.log(viajero1.getGeneralInfo()) // M�todo de la clase hija