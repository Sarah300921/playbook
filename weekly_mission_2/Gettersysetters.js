// JavaScript source code
// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.exercises_completed
    }
    get getName() {
        return this.name
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getName + " " + "completo" + " " + woopa.getExercisesCompleted + " " + "ejercicios")

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission) {
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getMCName() {
        return this.name
    }

    get getMission() {
        return this.mission
    }

    get getStudents() {
        return this.students
    }

    get getLives() {
        return this.lives
    }

    set setStudents(students) {
        this.students = students
    }

    set setLives(lives) {
        this.lives = lives
    }





}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

//console.log(missionCommanderNode.getStudents) // 0 por default
//console.log(missionCommanderNode.getLives)// 0 por default
console.log("el MC" + " " + missionCommanderNode.getMCName + " " + "de la mision" + " " + missionCommanderNode.getMission + " " + "admitio" + " " + missionCommanderNode.getStudents + " " + "explorers")

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log("el MC" + " " + missionCommanderNode.getMCName + " " + "de la mision" + " " + missionCommanderNode.getMission + " " + "admitio" + " " + missionCommanderNode.getStudents + " " + "explorers")

//console.log(missionCommanderNode.getStudents) // 0 por default
//console.log(missionCommanderNode.getLives)// 0 por default

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools() {
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function