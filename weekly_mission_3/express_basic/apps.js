
// JavaScript source code
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("HOLA MUNDO")
})

app.get('/launchx', (req, res) => {
    res.send("otro Hola Mundo")
})
app.get('/node', (req, res) => {
    const explorer1 = { id: 1, name: "explorerUno" }
    const explorer2 = { id: 2, name: "explorerDos" }
    const explorer3 = { id: 3, name: "explorerTres" }
    res.send([explorer1.name, explorer2.id, explorer3.name])
})

app.get('/explorers/:test', (req,res)=> {
    console.log(req.param)
    res.send(req.params)
})

app.listen(port,() => {
    console.log("Server running")
})



