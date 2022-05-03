// JavaScript source code
const express = require('express')
const app = express()
app.use (express.json())
const port = 3000

//routes
//metodos HTTP
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Get explorers V1 API ${new Date()}`)
    console.log(`obtener explorador mediante Id ${req.params.id}`)

    const explorer1 = { id: 1, name: "explorerUno" }
    const explorer2 = { id: 2, name: "explorerDos" }
    const explorer3 = { id: 3, name: "explorerTres" }
    const explorers = [explorer1, explorer2, explorer3]

    // HTTP CODE STATUS:200
    //res.status(200).json(explorer1)
    res.status(200).json(explorer2)
})

app.post('/v1/explorers/', (req, res) => {
    console.log(`POST explorers V1 API ${new Date()}`)
    console.log(`obtener explorador mediante Id ${req.params.id}`)
    console.log(req.body)
    // HTTP CODE STATUS:201 para POST
    res.status(201).json({ message: "creado exitosamente" })
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Put explorers V1 API ${new Date()}`)
    console.log(req.body)
    console.log(req.params.id)
    
    // HTTP CODE STATUS:200 para PUT (ACTUALIZAR)
    res.status(200).json({ message: "actualizado exitosamente"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`delete explorers V1 API ${new Date()}`)
   
    // HTTP CODE STATUS:200 para ELIMINAR
    res.status(200).json({ message: "Se eliminó exitosamente" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
