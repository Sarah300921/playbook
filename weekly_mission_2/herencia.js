// JavaScript source code
/*
HERENCIA: Nos permite relacionar clases entre s� y rehusar sus componentes
*/

// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

// Se usa la palabra extends para indicar que heredar�s las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vac�a y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

// Ejemplo 10: Overrinding methods

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // SUPER nos ayudar� a llamar el constructor padre
    this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // llamamos el m�todo de la clase padre
    // nameAndUsername  es una variable de esta funci�n, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // M�todo de la clase padre
console.log(viajero1.getGeneralInfo()) // M�todo de la clase hija

