// JavaScript source code

const User = require('./app/model/userclass');

const usuario01 = new User("carlo01","AAAAA")
console.log(usuario01.getUsername)
    usuario01.setUsername = "GilmarSet"
console.log(usuario01.username)

const usuario02 = new User("Tulio","BBBBB")
console.log(usuario02.getUsername)
const usuario03 = new User("Jaime","CCCCC")
console.log(usuario03.id)
const usuario04 = new User("Saby","DDDDD")
console.log(usuario04.id)
console.log(usuario01.dateCreated)