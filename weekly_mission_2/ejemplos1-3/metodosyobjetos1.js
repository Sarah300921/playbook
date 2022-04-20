// JavaScript source code
// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo() { // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())

// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
    }

    getInfo() {
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())

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
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)
